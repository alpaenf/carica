/**
 * Carica Gemilang - Smooth Transition & Global Mobile Navigation Handler
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

  // 2. Ensure Mobile Hamburger Menu Works on EVERY page automatically
  function initMobileMenu() {
    const menuButtons = document.querySelectorAll('button[aria-label="Buka Menu"], .mobile-nav-toggle');
    const mobileNav = document.getElementById('mobile-nav');

    if (mobileNav) {
      menuButtons.forEach(btn => {
        // Remove previous clone to avoid duplicate listeners
        const newBtn = btn.cloneNode(true);
        btn.parentNode.replaceChild(newBtn, btn);

        newBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const isHidden = mobileNav.classList.contains('hidden');
          if (isHidden) {
            mobileNav.classList.remove('hidden');
          } else {
            mobileNav.classList.add('hidden');
          }
        });
      });

      // Close mobile menu if clicked outside
      document.addEventListener('click', (e) => {
        if (!mobileNav.contains(e.target) && !Array.from(menuButtons).some(b => b.contains(e.target))) {
          mobileNav.classList.add('hidden');
        }
      });
    }

    // Admin Sidebar Mobile Trigger
    const openSidebarBtn = document.getElementById('open-sidebar-btn');
    const closeSidebarBtn = document.getElementById('close-sidebar-btn');
    const adminSidebar = document.getElementById('admin-sidebar');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');

    if (openSidebarBtn && adminSidebar) {
      openSidebarBtn.addEventListener('click', () => {
        adminSidebar.classList.remove('-translate-x-full');
        sidebarBackdrop?.classList.remove('hidden');
      });
    }
    if (closeSidebarBtn && adminSidebar) {
      closeSidebarBtn.addEventListener('click', () => {
        adminSidebar.classList.add('-translate-x-full');
        sidebarBackdrop?.classList.add('hidden');
      });
    }
    if (sidebarBackdrop && adminSidebar) {
      sidebarBackdrop.addEventListener('click', () => {
        adminSidebar.classList.add('-translate-x-full');
        sidebarBackdrop.classList.add('hidden');
      });
    }
  }

  // 3. Smooth page link interceptor (50ms tactile feedback)
  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href) return;

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
      // Fallback normal navigation
    }
  });

  // Restore state on BFCache
  window.addEventListener('pageshow', function (e) {
    document.body.classList.remove('page-leaving');
  });

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
