/**
 * Carica Gemilang - Smooth Transition & Global Responsive Helper
 */
(function () {
  // 1. Inject responsive viewport meta & smooth transition styling
  const style = document.createElement('style');
  style.id = 'carica-responsive-enhancement';
  style.textContent = `
    html {
      scroll-behavior: smooth;
      -webkit-text-size-adjust: 100%;
    }
    body {
      opacity: 1;
      transition: opacity 0.12s ease-out;
      overflow-x: hidden;
      width: 100%;
    }
    body.page-leaving {
      opacity: 0.15;
    }
    /* Responsive typography protection on mobile */
    @media (max-width: 640px) {
      .text-display-xl, .font-display-xl {
        font-size: 28px !important;
        line-height: 36px !important;
      }
      .text-display-lg, .font-display-lg {
        font-size: 24px !important;
        line-height: 32px !important;
      }
      .text-headline-lg, .font-headline-lg {
        font-size: 20px !important;
        line-height: 28px !important;
      }
    }
    /* Touch friendly mobile tap highlight */
    a, button {
      -webkit-tap-highlight-color: transparent;
    }
    /* Prevent horizontal overflow on mobile containers */
    img, video, iframe {
      max-width: 100%;
      height: auto;
    }
  `;
  document.head.appendChild(style);

  // 2. Single Global Delegated Mobile Menu Click Handler (Rock-solid, no conflict)
  document.addEventListener('click', function (e) {
    const toggleBtn = e.target.closest('button[aria-label="Buka Menu"], #open-sidebar-btn, #close-sidebar-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const adminSidebar = document.getElementById('admin-sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    // Case A: Navbar hamburger menu button clicked
    if (toggleBtn && toggleBtn.matches('button[aria-label="Buka Menu"]')) {
      e.preventDefault();
      e.stopPropagation();
      if (mobileNav) {
        mobileNav.classList.toggle('hidden');
      }
      return;
    }

    // Case B: Admin sidebar open button clicked
    if (toggleBtn && toggleBtn.id === 'open-sidebar-btn') {
      e.preventDefault();
      e.stopPropagation();
      adminSidebar?.classList.remove('-translate-x-full');
      sidebarBackdrop?.classList.remove('hidden');
      return;
    }

    // Case C Admin sidebar close button or backdrop clicked
    if ((toggleBtn && toggleBtn.id === 'close-sidebar-btn') || e.target === sidebarBackdrop) {
      e.preventDefault();
      e.stopPropagation();
      adminSidebar?.classList.add('-translate-x-full');
      sidebarBackdrop?.classList.add('hidden');
      return;
    }

    // Case D: Tap outside mobile nav closes the dropdown
    if (mobileNav && !mobileNav.classList.contains('hidden') && !mobileNav.contains(e.target)) {
      mobileNav.classList.add('hidden');
    }
  });

  // 3. Smooth page navigation interceptor (50ms tactile feedback)
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

    // Ignore anchors, external links, mailto, tel, target="_blank", or modifier keys
    if (
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      link.target === '_blank' ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }

    try {
      const url = new URL(link.href, window.location.href);
      if (url.origin === window.location.origin) {
        if (url.pathname === window.location.pathname && url.hash) {
          return;
        }

        e.preventDefault();
        document.body.classList.add('page-leaving');

        setTimeout(() => {
          window.location.href = link.href;
        }, 50);
      }
    } catch (err) {
      // Fallback
    }
  });

  // Restore state on BFCache
  window.addEventListener('pageshow', function (e) {
    document.body.classList.remove('page-leaving');
  });
})();
