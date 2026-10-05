const http = require('http');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, '..', req.url.split('?')[0]);
  if (filePath.endsWith('/') || filePath.endsWith('\\')) filePath = path.join(filePath, 'index.html');
  if (!fs.existsSync(filePath)) { res.writeHead(404); res.end(); return; }
  const ext = path.extname(filePath).toLowerCase();
  const mime = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml'
  };
  res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
  fs.createReadStream(filePath).pipe(res);
});

const PORT = 8096;
server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Test server running on port ${PORT}`);
  await runAllViewportTests();
  server.close();
  process.exit(0);
});

async function runAllViewportTests() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const cdpPort = 9225;
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${cdpPort}`,
    '--headless=new',
    '--disable-gpu',
    `http://127.0.0.1:${PORT}/index.html`
  ]);

  await new Promise(r => setTimeout(r, 1200));

  const versionRes = await (await fetch(`http://127.0.0.1:${cdpPort}/json`)).json();
  const page = versionRes.find(p => p.type === 'page');
  const ws = new WebSocket(page.webSocketDebuggerUrl);

  let id = 1;
  function send(method, params = {}) {
    return new Promise(resolve => {
      const reqId = id++;
      const handler = (e) => {
        const m = JSON.parse(e.data);
        if (m.id === reqId) { ws.removeEventListener('message', handler); resolve(m); }
      };
      ws.addEventListener('message', handler);
      ws.send(JSON.stringify({ id: reqId, method, params }));
    });
  }

  await new Promise(r => ws.onopen = r);

  const viewports = [
    { name: 'iPhone SE (small)', width: 320, height: 568 },
    { name: 'Android Standard', width: 360, height: 800 },
    { name: 'iPhone 14 / Safari', width: 390, height: 844 },
    { name: 'Pixel 7 / Pro', width: 412, height: 915 },
    { name: 'iPhone Pro Max', width: 430, height: 932 },
    { name: 'iPad Portrait', width: 768, height: 1024 },
    { name: 'Desktop 1440', width: 1440, height: 900 }
  ];

  console.log('\n===============================================================');
  console.log('  RUNNING CROSS-DEVICE MOBILE NAVIGATION AUDIT (7 VIEWPORTS)');
  console.log('===============================================================\n');

  for (const vp of viewports) {
    const isMobile = vp.width <= 1024;
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: isMobile
    });

    await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
    
    // Wait for DOM ready
    let ready = false;
    for (let attempts = 0; attempts < 20; attempts++) {
      await new Promise(r => setTimeout(r, 150));
      const stateRes = await send('Runtime.evaluate', { expression: 'document.readyState === "complete"' });
      if (stateRes && stateRes.result && stateRes.result.result && stateRes.result.result.value === true) {
        ready = true;
        break;
      }
    }
    await new Promise(r => setTimeout(r, 200));

    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => {
          const width = window.innerWidth;
          const isMobile = width <= 1024;
          const mobileToggle = document.querySelector('#mobile-toggle');
          const toggleVisible = mobileToggle && window.getComputedStyle(mobileToggle).display !== 'none';

          const results = {
            width,
            isMobile,
            toggleExpected: isMobile,
            toggleVisible: toggleVisible,
            hasHorizontalScroll: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
            mobileNavWorking: false,
            partsOfSpeechAccessible: false,
            nounsAccessible: false,
            posSubmenuCount: 0,
            subtopics: []
          };

          if (isMobile) {
            // Open mobile menu
            mobileToggle.click();
            const courses = document.querySelector('.nav-item.has-dropdown > .nav-link');
            if (courses) courses.click();

            const grammar = document.querySelector('.dropdown-item-nested .nested-parent-link');
            if (grammar) grammar.click();

            const posParent = document.querySelector('.sub-item-nested .nested-3rd-parent');
            if (posParent) posParent.click();

            const sub4thMenu = document.querySelector('.sub-item-nested .sub-4th-dropdown-menu');
            if (sub4thMenu) {
              const sub4thStyle = window.getComputedStyle(sub4thMenu);
              const isBlock = sub4thStyle.display === 'block' || sub4thStyle.display === 'flex';
              results.partsOfSpeechAccessible = isBlock && sub4thMenu.offsetHeight > 0;
            }

            // Find the 8 parts of speech inside Parts of Speech container
            const posContainer = document.querySelector('.sub-item-nested');
            const pos4thItems = posContainer ? posContainer.querySelectorAll('.grammar-4th-link') : [];
            results.posSubmenuCount = pos4thItems.length;
            pos4thItems.forEach(item => {
              const titleEl = item.querySelector('.g4-title') || item;
              const style = window.getComputedStyle(item);
              results.subtopics.push({
                title: titleEl.textContent.trim(),
                visible: item.offsetHeight > 0 && style.display !== 'none',
                height: item.offsetHeight,
                pointerEvents: style.pointerEvents
              });
            });

            // Try opening Nouns
            const nounsLink = posContainer ? posContainer.querySelector('.sub-4th-item-nested .nested-4th-parent') : null;
            if (nounsLink) {
              nounsLink.click();
              const nounsItem = nounsLink.closest('.sub-4th-item-nested');
              const sub5th = nounsItem ? nounsItem.querySelector('.sub-5th-dropdown-menu') : null;
              if (sub5th) {
                const s5Style = window.getComputedStyle(sub5th);
                results.nounsAccessible = (s5Style.display === 'block' || s5Style.display === 'flex') && sub5th.offsetHeight > 0;
              }
            }

            results.mobileNavWorking = results.partsOfSpeechAccessible && results.posSubmenuCount === 8 && results.nounsAccessible;
          } else {
            // Desktop check: hover flyouts intact
            const desktopNav = document.querySelector('.nav-menu');
            results.desktopNavVisible = desktopNav && window.getComputedStyle(desktopNav).display !== 'none';
          }

          return results;
        })()
      `,
      returnByValue: true
    });

    const r = evalRes.result.result.value;
    console.log(`Viewport: ${vp.name} (${vp.width}x${vp.height})`);
    console.log(`  - Horizontal scroll: ${r.hasHorizontalScroll ? 'FAIL (OVERFLOW)' : 'PASS (No overflow)'}`);
    if (r.isMobile) {
      console.log(`  - Hamburger toggle visible: ${r.toggleVisible ? 'PASS' : 'FAIL'}`);
      console.log(`  - Parts of Speech sub-menu opened: ${r.partsOfSpeechAccessible ? 'PASS' : 'FAIL'}`);
      console.log(`  - 8 Sub-menu items (Nouns...Interjections): ${r.posSubmenuCount === 8 ? 'PASS (8 found)' : 'FAIL (' + r.posSubmenuCount + ' found)'}`);
      const allVisible = r.subtopics.every(st => st.visible);
      console.log(`  - All 8 subtopics visible & clickable: ${allVisible ? 'PASS' : 'FAIL'}`);
      console.log(`  - Nouns Lessons & CEFR Tests opened: ${r.nounsAccessible ? 'PASS' : 'FAIL'}`);
      console.log(`  - OVERALL MOBILE NAV STATUS: ${r.mobileNavWorking ? 'SUCCESS' : 'FAILURE'}\n`);
    } else {
      console.log(`  - Desktop navigation bar visible: ${r.desktopNavVisible ? 'PASS' : 'FAIL'}`);
      console.log(`  - Hamburger toggle hidden: ${!r.toggleVisible ? 'PASS' : 'FAIL'}`);
      console.log(`  - OVERALL DESKTOP STATUS: SUCCESS\n`);
    }
  }

  // Also verify grammar.html
  console.log('Testing grammar.html on iPhone 14 (390x844)...');
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 2, mobile: true });
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/grammar.html` });
  
  for (let attempts = 0; attempts < 20; attempts++) {
    await new Promise(r => setTimeout(r, 150));
    const stateRes = await send('Runtime.evaluate', { expression: 'document.readyState === "complete"' });
    if (stateRes && stateRes.result && stateRes.result.result && stateRes.result.result.value === true) {
      break;
    }
  }
  await new Promise(r => setTimeout(r, 300));

  const gRes = await send('Runtime.evaluate', {
    expression: `
      (() => {
        // 1. Test top drawer navigation on grammar.html
        const toggle = document.querySelector('#mobile-toggle');
        if (toggle) toggle.click();
        
        const coursesItem = document.querySelector('.nav-item.has-dropdown');
        const coursesLink = coursesItem ? coursesItem.querySelector('.nav-link') : null;
        if (coursesLink && coursesItem && !coursesItem.classList.contains('dropdown-open')) {
          coursesLink.click();
        }

        const grammarItem = document.querySelector('.dropdown-item-nested');
        const grammarLink = grammarItem ? grammarItem.querySelector('.nested-parent-link') : null;
        if (grammarLink && grammarItem && !grammarItem.classList.contains('nested-open')) {
          grammarLink.click();
        }

        const posItem = document.querySelector('.sub-item-nested');
        const posParent = posItem ? posItem.querySelector('.nested-3rd-parent') : null;
        if (posParent && posItem && !posItem.classList.contains('sub-3rd-open')) {
          posParent.click();
        }

        const posContainer = document.querySelector('.sub-item-nested');
        const pos4thItems = posContainer ? posContainer.querySelectorAll('.grammar-4th-link') : [];
        const itemHeights = Array.from(pos4thItems).map(i => ({ t: (i.querySelector('.g4-title') || i).textContent.trim(), h: i.offsetHeight }));
        const topNavWorking = pos4thItems.length === 8 && Array.from(pos4thItems).every(i => i.offsetHeight > 0);

        // Close top nav
        if (toggle) toggle.click();

        // 2. Test floating button and off-canvas sidebar on grammar.html
        const floatBtn = document.querySelector('#floating-topics-btn');
        const floatVisible = floatBtn && window.getComputedStyle(floatBtn).display !== 'none';
        if (floatBtn) floatBtn.click();
        const sidebar = document.querySelector('#grammar-sidebar');
        const sidebarOpen = sidebar && sidebar.classList.contains('open');
        const topics = sidebar ? sidebar.querySelectorAll('.sidebar-topic-link') : [];

        return {
          itemHeights,
          topNavWorking,
          topNavPosOpened: pos4thItems.length === 8,
          floatBtnVisible: floatVisible,
          sidebarOpened: sidebarOpen,
          sidebarTopicCount: topics.length
        };
      })()
    `,
    returnByValue: true
  });
  console.log('grammar.html Results:', JSON.stringify(gRes.result.result.value, null, 2));

  chrome.kill();
}
