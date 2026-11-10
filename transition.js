/**
 * Carica Gemilang - Smooth Page Transition & Navbar Script
 */
(function () {
  // Inject CSS transition styles
  const style = document.createElement('style');
  style.id = 'smooth-transition-style';
  style.textContent = `
    html {
      scroll-behavior: smooth;
    }
    body {
      opacity: 0;
      transition: opacity 0.22s cubic-bezier(0.4, 0, 0.2, 1);
    }
    body.page-loaded {
      opacity: 1;
    }
    body.page-leaving {
      opacity: 0;
    }
  `;
  document.head.appendChild(style);

  // Mark page as loaded once DOM is interactive
  function onReady() {
    requestAnimationFrame(() => {
      document.body.classList.add('page-loaded');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onReady);
  } else {
    onReady();
  }

  // Intercept local link clicks for smooth fade transitions
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

    // Check if it's an internal HTML link or same-origin link
    const url = new URL(link.href, window.location.href);
    if (url.origin === window.location.origin) {
      // If clicking same page anchor, let standard smooth scroll handle it
      if (url.pathname === window.location.pathname && url.hash) {
        return;
      }

      // Smooth fade-out before navigation
      e.preventDefault();
      document.body.classList.remove('page-loaded');
      document.body.classList.add('page-leaving');

      setTimeout(() => {
        window.location.href = link.href;
      }, 180);
    }
  });

  // Handle back/forward cache in browsers
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      document.body.classList.remove('page-leaving');
      document.body.classList.add('page-loaded');
    }
  });
})();
