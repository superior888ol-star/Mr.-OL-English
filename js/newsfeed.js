/**
 * News Feed & Activity Stream Component
 * Teacher Ouch Ol Portfolio - Hun Sen Svay Thom High School
 * Handles: Filtering, Photo Lightbox, Interactive Likes, Share & Layout Toggle
 */

// Dataset of all 21 photos across the 5 posts
const newsFeedGalleryData = {
  post1: [
    { src: 'image 1/photo_16_2026-09-25_16-23-03.jpg', title: 'សិស្សានុសិស្សគ្រប់ក្រុមបង្ហាញផ្ទាំងរូបភាពរួមគ្នា', desc: 'សកម្មភាពសាមគ្គីភាពបង្ហាញផ្ទាំងរូបភាព: បរិស្ថាន, គ្រោះថ្នាក់ចរាចរណ៍, ថាមពលកកើតឡើងវិញ និងផលប៉ះពាល់បណ្ដាញសង្គម' },
    { src: 'image 1/photo_10_2026-09-25_16-23-02.jpg', title: 'ក្រុមទី៧ ធ្វើបទបង្ហាញពីប្រាសាទបុរាណ (Led by Mr. Ol)', desc: 'ការធ្វើបទបង្ហាញជាភាសាអង់គ្លេសរបស់សិស្សានុសិស្សសាលាសុវណ្ណភូមិ ដឹកនាំដោយលោកគ្រូ អ៊ូច អុល @2026' },
    { src: 'image 1/photo_11_2026-09-25_16-23-02.jpg', title: 'បទបង្ហាញពីពីរ៉ាមីត The Great Pyramid (Team 8 - 11A)', desc: 'សិស្សានុសិស្សឡើងធ្វើបទបង្ហាញពីប្រវត្តិសាស្ត្រពិភពលោកជាភាសាអង់គ្លេស' },
    { src: 'image 1/photo_14_2026-09-25_16-23-02.jpg', title: 'ផ្ទាំងរូបភាព Qualities of Good Friends', desc: 'ស្នាដៃស្រាវជ្រាវពីគុណតម្លៃនៃមិត្តភាព: ភាពស្មោះត្រង់ ការគាំទ្រ និងការគោរពគ្នា' },
    { src: 'image 1/photo_15_2026-09-25_16-23-03.jpg', title: 'ផ្ទាំងរូបភាព Pollution: Causes, Effects, Solutions (Team 1)', desc: 'ការវិភាគពីមូលហេតុ ផលប៉ះពាល់ និងដំណោះស្រាយបញ្ហាបរិស្ថាន និងការប្រែប្រួលអាកាសធាតុ' },
    { src: 'image 1/photo_17_2026-09-25_16-23-03.jpg', title: 'ផ្ទាំងរូបភាព Bad Impact of Social Media', desc: 'ការយល់ដឹងពីសុខភាពផ្លូវចិត្ត ពេលវេលា និងទំនាក់ទំនងក្នុងយុគសម័យឌីជីថល' },
    { src: 'image 1/photo_18_2026-09-25_16-23-03.jpg', title: 'ផ្ទាំងរូបភាព How to Remain a Healthy Lifestyle (Team 2)', desc: 'គន្លឹះថែរក្សាសុខភាព: ផឹកទឹក គេងឱ្យគ្រប់គ្រាន់ និងរបបអាហារត្រឹមត្រូវ' },
    { src: 'image 1/photo_12_2026-09-25_16-23-02.jpg', title: 'សកម្មភាពគូររូបភាព Traffic Accidents in Cambodia', desc: 'ការងារជាក្រុមក្នុងការរៀបចំប្លង់គំនិតស្តីពីសុវត្ថិភាពចរាចរណ៍' },
    { src: 'image 1/photo_13_2026-09-25_16-23-02.jpg', title: 'សកម្មភាពគូរផ្ទាំងរូបភាព និងសៀវភៅ English Grade 12', desc: 'ការស្រាវជ្រាវផ្ទាល់ពីសៀវភៅសិក្សាគោលភាសាអង់គ្លេសថ្នាក់ទី១២ របស់ក្រសួង' },
    { src: 'image 1/photo_8_2026-09-25_16-23-02.jpg', title: 'បទបង្ហាញពី Question Tags ក្នុងថ្នាក់រៀន', desc: 'ការអនុវត្តក្បួនវេយ្យាករណ៍ភាសាអង់គ្លេស Question Tags តាមរយៈស្លាយបញ្ចាំង' }
  ],
  post2: [
    { src: 'image 1/photo_6_2026-09-25_16-23-02.jpg', title: 'តារាងសង្ខេបហានិភ័យ និងការការពារលើប្រព័ន្ធអ៊ីនធឺណិត', desc: 'ការយល់ដឹងពី Identity Theft, Malware, Phishing, Cyberbullying, និង Hacking លើ Smartboard' },
    { src: 'image 1/photo_4_2026-09-25_16-23-02.jpg', title: 'ការយល់ដឹងអំពី Internet និងសារៈសំខាន់ក្នុងសតវត្សទី២១', desc: 'បទបង្ហាញពីបណ្ដាញសកលលោក និងតួនាទីបច្ចេកវិទ្យាក្នុងការរស់នៅប្រចាំថ្ងៃ' },
    { src: 'image 1/photo_9_2026-09-25_16-23-02.jpg', title: 'តើ Internet គឺជាអ្វី? - សិស្សឡើងធ្វើបទបង្ហាញ', desc: 'ការពន្យល់ពី Fiber Optic, Satellite, និង Wireless Connection យ៉ាងក្បោះក្បាយ' }
  ],
  post3: [
    { src: 'image 1/photo_2_2026-09-25_16-23-02.jpg', title: 'Make Learning Fun - ក្រុមសិស្សានុសិស្សឡើងធ្វើបទបង្ហាញ', desc: 'ការប្រើប្រាស់ហ្គេម និងសកម្មភាពក្រុមដើម្បីបង្កើនចំណាប់អារម្មណ៍ក្នុងការរៀនសូត្រ' },
    { src: 'image 1/photo_1_2026-09-25_16-23-02.jpg', title: 'Lifecycle of Gecko - បទបង្ហាញជីវវិទ្យាជាភាសាអង់គ្លេស', desc: 'សិស្សប្រើប្រាស់ផ្ទាំង Smartboard អន្តរកម្មពន្យល់ពីវដ្តជីវិតសត្វតុកកែជាភាសាអង់គ្លេស' },
    { src: 'image 1/photo_3_2026-09-25_16-23-02.jpg', title: 'តើ Internet គឺជាអ្វី? - បទបង្ហាញជំនួយដោយ AI (presentations.ai)', desc: 'ការប្រើប្រាស់បញ្ញាសិប្បនិម្មិតក្នុងការបង្កើតស្លាយ និងរចនាបទបង្ហាញ' },
    { src: 'image 1/photo_5_2026-09-25_16-23-02.jpg', title: 'Meet the Dragonfly - បទបង្ហាញពីសត្វកន្ទុំរុយ', desc: 'ការរួមបញ្ចូលគ្នារវាងវិទ្យាសាស្ត្រ និងការប្រើប្រាស់ភាសាអង់គ្លេស' },
    { src: 'image 1/photo_7_2026-09-25_16-23-02.jpg', title: 'គោលបំណងនៃមេរៀន Internet & ARPANET', desc: 'ការសិក្សាស្វែងយល់ពីប្រវត្តិ និងរចនាសម្ព័ន្ធ Client-Server' }
  ],
  post4: [
    { src: 'image 1/photo 1.jpg', title: 'ការប្រកួតប្រជែងយុវជនសហគ្រិន (Young Entrepreneur Competition)', desc: 'សិស្សានុសិស្សឡើងថ្លែងការពារគម្រោង Progressive Web App (PWA) នៅវិទ្យាល័យ ១០មករា ១៩៧៩ សហការជាមួយសហគ្រិនខ្មែរ (Khmer Enterprise)' }
  ],
  post5: [
    { src: 'image 1/New Academic Year Opening day.jpg', title: 'ពិធីបើកបវេសនកាលឆ្នាំសិក្សាថ្មី នៅវិទ្យាល័យ ហ៊ុន សែន ស្វាយធំ', desc: 'គណៈគ្រប់គ្រង និងលោកគ្រូ-អ្នកគ្រូ ថតរូបអនុស្សាវរីយ៍មុខខ្លោងទ្វារវិទ្យាល័យក្នុងទិវាបើកបវេសនកាល' },
    { src: 'image 1/Leader Upgrading  Program.jpg', title: 'កម្មវិធីលើកកម្ពស់សមត្ថភាពភាពជាអ្នកដឹកនាំគ្រូបង្រៀន (Leader Upgrading Program)', desc: 'សកម្មភាពពង្រឹងគុណវុឌ្ឍិ និងវិធីសាស្ត្រគ្រប់គ្រង-បង្រៀនថ្មីៗក្នុងវិស័យអប់រំ' }
  ]
};

// State
let currentLightboxList = [];
let currentLightboxIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
  initNewsFeedFilters();
  initNewsFeedInteractions();
  initNewsFeedLightbox();
});

/**
 * Filter Feeds by Category
 */
function initNewsFeedFilters() {
  const filterBtns = document.querySelectorAll('.feed-filter-btn');
  const feedCards = document.querySelectorAll('.feed-card');
  const feedCountBadge = document.getElementById('feed-count-badge');

  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');

      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      let visibleCount = 0;

      feedCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'block';
          card.style.animation = 'feedFadeIn 0.4s ease forwards';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (feedCountBadge) {
        feedCountBadge.textContent = `${visibleCount} ការបង្ហោះ (Posts)`;
      }
    });
  });

  // Global helper for menu links
  window.filterFeeds = function(category) {
    const targetBtn = document.querySelector(`.feed-filter-btn[data-filter="${category}"]`);
    if (targetBtn) {
      targetBtn.click();
    }
    const section = document.getElementById('newsfeed');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
}

/**
 * Interactive Likes, Share & Comments Toggle
 */
function initNewsFeedInteractions() {
  // Likes
  const likeBtns = document.querySelectorAll('.feed-btn-like');
  likeBtns.forEach(btn => {
    const postId = btn.getAttribute('data-post');
    const countSpan = btn.querySelector('.like-count');
    const isLiked = localStorage.getItem(`ouch_like_${postId}`) === 'true';

    if (isLiked) {
      btn.classList.add('active');
    }

    btn.addEventListener('click', () => {
      const currentlyLiked = btn.classList.toggle('active');
      let count = parseInt(countSpan.textContent) || 0;
      if (currentlyLiked) {
        count++;
        localStorage.setItem(`ouch_like_${postId}`, 'true');
        btn.querySelector('.btn-icon').style.transform = 'scale(1.35)';
        setTimeout(() => { btn.querySelector('.btn-icon').style.transform = ''; }, 300);
      } else {
        count = Math.max(0, count - 1);
        localStorage.removeItem(`ouch_like_${postId}`);
      }
      countSpan.textContent = count;
    });
  });

  // Share
  const shareBtns = document.querySelectorAll('.feed-btn-share');
  shareBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const postId = btn.getAttribute('data-post');
      const shareUrl = `${window.location.origin}${window.location.pathname}#${postId}`;
      
      if (navigator.clipboard) {
        navigator.clipboard.writeText(shareUrl).then(() => {
          showFeedToast("🔗 បានចម្លងតំណភ្ជាប់ការបង្ហោះនេះ! (Link copied to clipboard)");
        });
      } else {
        showFeedToast("🔗 តំណភ្ជាប់: " + shareUrl);
      }
    });
  });

  // Quick Comment Toggle
  const commentBtns = document.querySelectorAll('.feed-btn-comment');
  commentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const postId = btn.getAttribute('data-post');
      const commentBox = document.getElementById(`comments-${postId}`);
      if (commentBox) {
        commentBox.classList.toggle('active');
      }
    });
  });
}

/**
 * Toast Notification for News Feed
 */
function showFeedToast(msg) {
  const toast = document.getElementById('toast-msg');
  const toastText = document.getElementById('toast-text');
  if (toast && toastText) {
    toastText.textContent = msg;
    toast.style.borderColor = 'var(--accent-cyan)';
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3500);
  } else {
    alert(msg);
  }
}

/**
 * Fullscreen Photo Lightbox Modal
 */
function initNewsFeedLightbox() {
  const lightbox = document.getElementById('feed-lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const btnPrev = document.getElementById('lightbox-prev');
  const btnNext = document.getElementById('lightbox-next');
  const btnClose = document.getElementById('lightbox-close');

  if (!lightbox) return;

  // Open Lightbox
  window.openFeedLightbox = function(postKey, index = 0) {
    if (!newsFeedGalleryData[postKey]) return;
    currentLightboxList = newsFeedGalleryData[postKey];
    currentLightboxIndex = index;
    renderLightboxItem();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  function renderLightboxItem() {
    if (!currentLightboxList.length) return;
    const item = currentLightboxList[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.desc;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${currentLightboxList.length}`;

    // Disable/enable arrows if only 1 item
    if (btnPrev && btnNext) {
      btnPrev.style.display = currentLightboxList.length > 1 ? 'flex' : 'none';
      btnNext.style.display = currentLightboxList.length > 1 ? 'flex' : 'none';
    }
  }

  window.closeFeedLightbox = function() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  function showNext() {
    if (currentLightboxList.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex + 1) % currentLightboxList.length;
    renderLightboxItem();
  }

  function showPrev() {
    if (currentLightboxList.length <= 1) return;
    currentLightboxIndex = (currentLightboxIndex - 1 + currentLightboxList.length) % currentLightboxList.length;
    renderLightboxItem();
  }

  if (btnNext) btnNext.addEventListener('click', showNext);
  if (btnPrev) btnPrev.addEventListener('click', showPrev);
  if (btnClose) btnClose.addEventListener('click', closeFeedLightbox);

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      closeFeedLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeFeedLightbox();
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
  });
}
