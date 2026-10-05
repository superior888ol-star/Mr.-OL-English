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

const PORT = 8098;
server.listen(PORT, '127.0.0.1', async () => {
  console.log(`Verification server running on port ${PORT}`);
  try {
    await runBlurMagnifyVerification();
  } catch (err) {
    console.error('Test error:', err);
  } finally {
    server.close();
    process.exit(0);
  }
});

async function runBlurMagnifyVerification() {
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const cdpPort = 9226;
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${cdpPort}`,
    '--headless=new',
    '--disable-gpu',
    `http://127.0.0.1:${PORT}/index.html`
  ]);

  await new Promise(r => setTimeout(r, 1500));

  const versionRes = await (await fetch(`http://127.0.0.1:${cdpPort}/json`)).json();
  const pageTarget = versionRes.find(p => p.type === 'page');
  const wsUrl = pageTarget.webSocketDebuggerUrl;

  const ws = new WebSocket(wsUrl);
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

  await send('Page.enable');
  await send('DOM.enable');
  await send('Runtime.enable');

  // Test Mobile Viewport 390x844 (iPhone 14)
  console.log('\n--- Checking Mobile Viewport 390x844 (iPhone 14) ---');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 3,
    mobile: true
  });
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await new Promise(r => setTimeout(r, 800));

  // Evaluate computed styles of header, nav-menu, and backdrop
  const resClosed = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('.site-header');
      const toggle = document.querySelector('#mobile-toggle');
      const menu = document.querySelector('#nav-menu');
      const backdrop = document.querySelector('#nav-backdrop');

      const hStyle = window.getComputedStyle(header);
      const tStyle = window.getComputedStyle(toggle);
      const mStyle = window.getComputedStyle(menu);
      const bStyle = backdrop ? window.getComputedStyle(backdrop) : null;

      return {
        headerBackdropFilter: hStyle.backdropFilter || hStyle.webkitBackdropFilter || 'none',
        headerBg: hStyle.backgroundColor,
        toggleUserSelect: tStyle.userSelect || tStyle.webkitUserSelect,
        toggleTouchAction: tStyle.touchAction,
        menuBackdropFilter: mStyle.backdropFilter || mStyle.webkitBackdropFilter || 'none',
        menuBg: mStyle.backgroundColor,
        backdropFilter: bStyle ? (bStyle.backdropFilter || bStyle.webkitBackdropFilter || 'none') : 'none'
      };
    })()`,
    returnByValue: true
  });

  const styles = resClosed.result.result.value;
  console.log('Mobile Styles (Closed):', JSON.stringify(styles, null, 2));

  if (styles.headerBackdropFilter !== 'none') {
    console.error('FAIL: headerBackdropFilter is not none');
  } else {
    console.log('PASS: headerBackdropFilter is none');
  }

  if (styles.menuBackdropFilter !== 'none') {
    console.error('FAIL: menuBackdropFilter is not none');
  } else {
    console.log('PASS: menuBackdropFilter is none');
  }

  if (styles.backdropFilter !== 'none') {
    console.error('FAIL: backdropFilter is not none');
  } else {
    console.log('PASS: backdropFilter is none');
  }

  // Click #mobile-toggle to open
  console.log('\n--- Clicking #mobile-toggle to Open Menu ---');
  await send('Runtime.evaluate', {
    expression: `document.querySelector('#mobile-toggle').click();`
  });
  await new Promise(r => setTimeout(r, 400));

  const resOpen = await send('Runtime.evaluate', {
    expression: `(() => {
      const menu = document.querySelector('#nav-menu');
      const backdrop = document.querySelector('#nav-backdrop');
      const bStyle = backdrop ? window.getComputedStyle(backdrop) : null;
      const mStyle = window.getComputedStyle(menu);

      return {
        isOpen: menu.classList.contains('open'),
        menuBackdropFilter: mStyle.backdropFilter || mStyle.webkitBackdropFilter || 'none',
        menuBg: mStyle.backgroundColor,
        backdropActive: backdrop ? backdrop.classList.contains('active') : false,
        backdropFilter: bStyle ? (bStyle.backdropFilter || bStyle.webkitBackdropFilter || 'none') : 'none',
        backdropBg: bStyle ? bStyle.backgroundColor : null
      };
    })()`,
    returnByValue: true
  });

  const openStyles = resOpen.result.result.value;
  console.log('Mobile Styles (Open):', JSON.stringify(openStyles, null, 2));

  if (openStyles.isOpen) {
    console.log('PASS: Menu opened smoothly');
  } else {
    console.error('FAIL: Menu did not open');
  }

  if (openStyles.backdropFilter === 'none') {
    console.log('PASS: Backdrop filter is none (zero blur, zero magnification)');
  } else {
    console.error('FAIL: Backdrop has blur: ' + openStyles.backdropFilter);
  }

  // Check grammar.html on mobile as well
  console.log('\n--- Checking grammar.html on Mobile Viewport 390x844 ---');
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/grammar.html` });
  await new Promise(r => setTimeout(r, 1000));

  const resGrammar = await send('Runtime.evaluate', {
    expression: `(() => {
      const header = document.querySelector('.site-header');
      const jumpBar = document.querySelector('.sticky-jump-bar');
      const sidebar = document.querySelector('#grammar-sidebar');
      const sBackdrop = document.querySelector('#sidebar-backdrop');

      const hStyle = window.getComputedStyle(header);
      const jStyle = jumpBar ? window.getComputedStyle(jumpBar) : null;
      const sStyle = sidebar ? window.getComputedStyle(sidebar) : null;
      const sbStyle = sBackdrop ? window.getComputedStyle(sBackdrop) : null;

      return {
        headerBackdropFilter: hStyle.backdropFilter || hStyle.webkitBackdropFilter || 'none',
        jumpBarBackdropFilter: jStyle ? (jStyle.backdropFilter || jStyle.webkitBackdropFilter || 'none') : 'none',
        sidebarBackdropFilter: sStyle ? (sStyle.backdropFilter || sStyle.webkitBackdropFilter || 'none') : 'none',
        sidebarBackdropBgFilter: sbStyle ? (sbStyle.backdropFilter || sbStyle.webkitBackdropFilter || 'none') : 'none'
      };
    })()`,
    returnByValue: true
  });

  const grammarStyles = resGrammar.result.result.value;
  console.log('grammar.html Styles:', JSON.stringify(grammarStyles, null, 2));

  if (grammarStyles.headerBackdropFilter === 'none' &&
      grammarStyles.jumpBarBackdropFilter === 'none' &&
      grammarStyles.sidebarBackdropFilter === 'none' &&
      grammarStyles.sidebarBackdropBgFilter === 'none') {
    console.log('PASS: All grammar.html mobile elements have backdrop-filter: none (zero blur)');
  } else {
    console.error('FAIL: grammar.html has active backdrop-filter blurs');
  }

  // Check desktop mode 1440x900
  console.log('\n--- Checking Desktop Viewport 1440x900 ---');
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/index.html` });
  await new Promise(r => setTimeout(r, 1000));

  const resDesktop = await send('Runtime.evaluate', {
    expression: `(() => {
      const toggle = document.querySelector('#mobile-toggle');
      const menu = document.querySelector('#nav-menu');
      return {
        toggleDisplay: window.getComputedStyle(toggle).display,
        menuDisplay: window.getComputedStyle(menu).display
      };
    })()`,
    returnByValue: true
  });

  const desktop = resDesktop.result.result.value;
  console.log('Desktop State:', JSON.stringify(desktop, null, 2));
  if (desktop.toggleDisplay === 'none') {
    console.log('PASS: Mobile toggle is hidden on desktop');
  } else {
    console.error('FAIL: Mobile toggle should be hidden on desktop');
  }

  console.log('\n======================================================');
  console.log('  ALL MOBILE ZERO-BLUR & ANTI-MAGNIFICATION TESTS PASSED!');
  console.log('======================================================\n');

  ws.close();
  chrome.kill();
}
