/**
 * Carica Gemilang - Smooth Page Transition & Navbar Script (Optimized)
 */
(function () {
  // Inject clean instant transition styles
  const style = document.createElement('style');
  style.id = 'smooth-transition-style';
  style.textContent = `
    html {
      scroll-behavior: smooth;
    }
    body {
      opacity: 1;
      transition: opacity 0.12s ease-out;
    }
    body.page-leaving {
      opacity: 0.15;
    }
  `;
  document.head.appendChild(style);

  // Intercept navigation clicks for instantaneous feedback without lag
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

        // Quick 50ms tactile transition so it feels snappy and immediate
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
})();
