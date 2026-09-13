/**
 * CodeCraft // Alex - Web Developer Portfolio
 * Canvas 2D background scroll animation engine with smooth lerp physics
 */

(function () {
  'use strict';

  const TOTAL_FRAMES = 300;
  const FRAME_DIR = 'ezgif-497d03a4f9f2ffef-jpg';
  const FRAME_PREFIX = 'ezgif-frame-';
  const LERP_FACTOR = 0.12;

  const preloader = document.getElementById('preloader');
  const preloaderFill = document.getElementById('preloader-fill');
  const preloaderText = document.getElementById('preloader-text');
  const canvas = document.getElementById('scroll-canvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  const frames = new Array(TOTAL_FRAMES);
  let loadedFramesCount = 0;
  let isReady = false;

  let currentFrame = 0;
  let targetFrame = 0;
  let lastDrawnFrame = -1;

  function getFramePath(index) {
    const frameNumber = String(index + 1).padStart(3, '0');
    return `${FRAME_DIR}/${FRAME_PREFIX}${frameNumber}.jpg`;
  }

  // Set high-DPI canvas resolution
  function resizeCanvas() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(window.innerWidth * dpr);
    canvas.height = Math.floor(window.innerHeight * dpr);

    if (frames[Math.floor(currentFrame)]) {
      drawFrame(currentFrame);
    }
  }

  // Preload all 300 frames
  function preloadImages() {
    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = getFramePath(0);
    firstImg.onload = () => {
      frames[0] = firstImg;
      loadedFramesCount++;
      drawFrame(0);
    };

    const promises = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (i === 0 && frames[0]) continue;

      promises.push(
        new Promise((resolve) => {
          const img = new Image();
          img.src = getFramePath(i);
          img.onload = () => {
            frames[i] = img;
            loadedFramesCount++;
            updateProgress();
            resolve();
          };
          img.onerror = () => {
            frames[i] = frames[i - 1] || null;
            loadedFramesCount++;
            updateProgress();
            resolve();
          };
        })
      );
    }

    function updateProgress() {
      const pct = Math.min(Math.round((loadedFramesCount / TOTAL_FRAMES) * 100), 100);
      if (preloaderFill) preloaderFill.style.width = `${pct}%`;
      if (preloaderText) preloaderText.textContent = `Loading experience... ${pct}%`;
    }

    Promise.all(promises).then(() => {
      isReady = true;
      if (preloader) {
        preloader.classList.add('fade-out');
        document.body.classList.remove('is-loading');
      }
      triggerHeroLoadAnimations();
      updateTargetFromScroll();
      drawFrame(targetFrame);
    });
  }

  // Draw current frame using cover aspect ratio
  function drawFrame(frameIdx) {
    const index = Math.min(Math.max(Math.round(frameIdx), 0), TOTAL_FRAMES - 1);
    
    let img = frames[index];
    if (!img) {
      for (let offset = 1; offset < 30; offset++) {
        if (frames[index - offset]) { img = frames[index - offset]; break; }
        if (frames[index + offset]) { img = frames[index + offset]; break; }
      }
    }
    if (!img || !img.naturalWidth) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth;
    const ih = img.naturalHeight;

    const canvasAspect = cw / ch;
    const imgAspect = iw / ih;

    let dw, dh, dx, dy;

    if (canvasAspect > imgAspect) {
      dw = cw;
      dh = cw / imgAspect;
      dx = 0;
      dy = (ch - dh) / 2;
    } else {
      dh = ch;
      dw = ch * imgAspect;
      dx = (cw - dw) / 2;
      dy = 0;
    }

    ctx.drawImage(img, dx, dy, dw, dh);
    lastDrawnFrame = index;
  }

  // Hero Background Image Scroll & Parallax Engine
  const heroBgContainer = document.getElementById('hero-bg-container');
  const heroBgImage = document.getElementById('hero-bg-image');
  const heroSection = document.getElementById('home');

  let currentHeroScroll = 0;
  let targetHeroScroll = 0;
  let currentMouseX = 0;
  let currentMouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;

  // Global Smooth Scroll with Inertia / Momentum (Lenis / Locomotive style)
  let targetScrollY = window.scrollY;
  let currentScrollY = window.scrollY;
  // 0.085 lerp factor generates an ~0.8s ease-out fluid natural deceleration
  const SCROLL_LERP = 0.085;

  // Trigger Hero on-load staggered animations
  function triggerHeroLoadAnimations() {
    document.body.classList.add('hero-animated');
    if (heroBgContainer) {
      heroBgContainer.classList.add('is-loaded');
    }
  }

  // Mouse Parallax for Hero Background
  function setupHeroMouseParallax() {
    if (!heroSection || !heroBgImage) return;

    heroSection.addEventListener('mousemove', (e) => {
      const rect = heroSection.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetMouseX = x * 20;
      targetMouseY = y * 14;
    }, { passive: true });

    heroSection.addEventListener('mouseleave', () => {
      targetMouseX = 0;
      targetMouseY = 0;
    });
  }

  // Helper to detect if element is inside an active modal or scroll container
  function isInsideScrollable(target) {
    let el = target;
    while (el && el !== document.body && el !== document.documentElement) {
      if (el.classList && (
        el.classList.contains('modal-backdrop') || 
        el.classList.contains('modal-body') || 
        el.classList.contains('modal-content')
      )) {
        return true;
      }
      const cs = window.getComputedStyle(el);
      if ((cs.overflowY === 'auto' || cs.overflowY === 'scroll') && el.scrollHeight > el.clientHeight) {
        return true;
      }
      el = el.parentElement;
    }
    return false;
  }

  // Global Momentum Smooth Scroll Setup
  function setupSmoothScroll() {
    document.documentElement.classList.add('has-smooth-scroll');

    // Intercept mousewheel for momentum physics (skipping if inside open modal)
    window.addEventListener('wheel', (e) => {
      if (isInsideScrollable(e.target)) return;
      if (document.querySelector('.modal-backdrop.is-open')) return;

      e.preventDefault();

      let delta = e.deltaY;
      if (e.deltaMode === 1) delta *= 36;
      else if (e.deltaMode === 2) delta *= window.innerHeight;

      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetScrollY = Math.min(Math.max(targetScrollY + delta, 0), maxScroll);
    }, { passive: false });

    // Synchronize if user drags native scrollbar or touches on mobile
    window.addEventListener('scroll', () => {
      if (Math.abs(window.scrollY - currentScrollY) > 8) {
        targetScrollY = window.scrollY;
        currentScrollY = window.scrollY;
        updateTargetFromScroll(currentScrollY);
      }
    }, { passive: true });

    // Smooth Anchor Navigation for all internal hash links (View My Work, Download CV, Nav links)
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId || targetId === '#') return;
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          e.preventDefault();
          const headerOffset = 72;
          const rect = targetEl.getBoundingClientRect();
          const destY = rect.top + currentScrollY - headerOffset;
          const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
          targetScrollY = Math.min(Math.max(destY, 0), maxScroll);
        }
      });
    });
  }

  // Scroll-Triggered Reveal Observers (Stats, Skills, Projects, Bottom Grid)
  function animateStatsCount(statsGrid) {
    const statCards = statsGrid.querySelectorAll('.stat-card');
    statCards.forEach(card => {
      const numEl = card.querySelector('.stat-number');
      if (!numEl) return;
      const originalText = numEl.textContent.trim();
      const match = originalText.match(/^(\d+)(\+?%?)$/);
      if (match) {
        const targetVal = parseInt(match[1], 10);
        const suffix = match[2];
        const duration = 1200;
        const startTime = performance.now();
        function updateCount(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = Math.floor(ease * targetVal);
          numEl.textContent = `${current}${suffix}`;
          if (progress < 1) {
            requestAnimationFrame(updateCount);
          } else {
            numEl.textContent = originalText;
          }
        }
        requestAnimationFrame(updateCount);
      }
    });
  }

  function setupScrollObservers() {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -40px 0px',
      threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');

          // Stats counter animation
          if (entry.target.classList.contains('stats-grid')) {
            animateStatsCount(entry.target);
          }

          // Skills horizontal progress bar animation from 0% to respective value
          if (entry.target.classList.contains('skills-grid-creative')) {
            const fills = entry.target.querySelectorAll('.skill-bar-fill');
            fills.forEach(fill => {
              const level = fill.getAttribute('data-skill-level');
              if (level) {
                fill.style.width = level;
              }
            });
          }

          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll('.stats-grid, .skills-grid-creative, .projects-category-grid, .bottom-grid');
    targets.forEach(el => {
      if (el) revealObserver.observe(el);
    });
  }

  // Calculate target frame and hero background scroll progress
  function updateTargetFromScroll(scrollY = window.scrollY) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    if (maxScroll <= 0) return;

    const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    targetFrame = progress * (TOTAL_FRAMES - 1);

    // Hero background animation progress across hero section
    const heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
    targetHeroScroll = Math.min(Math.max(scrollY / heroHeight, 0), 1.2);
  }

  // Render loop with lerp physics
  function tick() {
    // 1. Momentum Smooth Scroll Lerp (~0.8s ease-out feel)
    const scrollDiff = targetScrollY - currentScrollY;
    if (Math.abs(scrollDiff) > 0.1) {
      currentScrollY += scrollDiff * SCROLL_LERP;
      window.scrollTo(0, currentScrollY);
      updateTargetFromScroll(currentScrollY);
    } else if (Math.abs(scrollDiff) > 0) {
      currentScrollY = targetScrollY;
      window.scrollTo(0, currentScrollY);
      updateTargetFromScroll(currentScrollY);
    }

    // 2. Background video canvas lerp
    const diff = targetFrame - currentFrame;
    if (Math.abs(diff) > 0.005) {
      currentFrame += diff * LERP_FACTOR;
      drawFrame(currentFrame);
    } else if (lastDrawnFrame !== Math.round(currentFrame)) {
      currentFrame = targetFrame;
      drawFrame(currentFrame);
    }

    // 3. Hero Background Image Cinematic Scroll Animation
    const hDiff = targetHeroScroll - currentHeroScroll;
    if (Math.abs(hDiff) > 0.0005) {
      currentHeroScroll += hDiff * 0.12;
    } else {
      currentHeroScroll = targetHeroScroll;
    }

    currentMouseX += (targetMouseX - currentMouseX) * 0.08;
    currentMouseY += (targetMouseY - currentMouseY) * 0.08;

    if (heroBgContainer && heroBgImage) {
      if (currentHeroScroll >= 1.05) {
        if (heroBgContainer.style.visibility !== 'hidden') {
          heroBgContainer.style.visibility = 'hidden';
          heroBgContainer.style.opacity = '0';
        }
      } else {
        if (heroBgContainer.style.visibility !== 'visible') {
          heroBgContainer.style.visibility = 'visible';
        }

        const sp = currentHeroScroll;
        
        // Cinematic Parallax: background moves slower than scroll
        const parallaxY = sp * 130; 
        
        // Cinematic Zoom: subtle camera zoom-in effect as you scroll
        const zoom = 1 + sp * 0.12; 
        
        // Smooth fade-out starting at 35% hero scroll, fully faded out at 100%
        let opacity = 1;
        if (sp > 0.35) {
          const fadeP = (sp - 0.35) / 0.65;
          const ease = fadeP * fadeP * (3 - 2 * fadeP); // smoothstep
          opacity = Math.max(0, 1 - ease);
        }

        // Soft depth-of-field blur as the background recedes into the dark canvas
        const blur = sp > 0.45 ? (sp - 0.45) * 12 : 0;

        // Apply scroll fade opacity once scroll starts or loaded
        if (heroBgContainer.classList.contains('is-loaded')) {
          heroBgContainer.style.opacity = opacity.toFixed(4);
        }
        heroBgImage.style.filter = blur > 0.2 ? `blur(${blur.toFixed(1)}px)` : 'none';

        // Combined transform: parallax translateY + mouse float + camera zoom
        const totalX = currentMouseX.toFixed(2);
        const totalY = (parallaxY + currentMouseY).toFixed(2);
        heroBgImage.style.transform = `translate3d(${totalX}px, ${totalY}px, 0px) scale(${zoom.toFixed(4)})`;
      }
    }

    requestAnimationFrame(tick);
  }

  // Nav link active state highlighting
  function setupNavObserver() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let currentSection = '';
      const scrollPos = window.scrollY + 200;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          currentSection = section.getAttribute('id');
        }
      });

      if (currentSection) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${currentSection}`);
        });
      }
    }, { passive: true });
  }

  // Initialization
  function init() {
    resizeCanvas();
    preloadImages();
    setupSmoothScroll();
    setupScrollObservers();
    setupNavObserver();
    setupHeroMouseParallax();
    updateTargetFromScroll();

    // Fallback trigger in case preloader finished fast or was cached
    setTimeout(triggerHeroLoadAnimations, 600);

    window.addEventListener('resize', () => {
      resizeCanvas();
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      targetScrollY = Math.min(targetScrollY, maxScroll);
    });
    requestAnimationFrame(tick);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
