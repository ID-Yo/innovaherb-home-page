// InnoVAherb — Shared Header, Footer, Mobile Menu, Sticky Behavior

(function () {
  const basePath = window.location.pathname.includes('/products/') ? '..' : '.';

  // ── Header ──
  function renderHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;
    header.innerHTML = `
    <!-- Promo Strip -->
    <div id="promo-strip" class="bg-brand-700 text-white text-center py-2 px-4 text-sm font-body tracking-wide">
      <span data-i18n="promo.text">Get 10% off your first order — Subscribe to our newsletter</span>
    </div>
    <!-- Main Header -->
    <header id="main-header" class="bg-warm-50/95 backdrop-blur-md border-b border-warm-200/60 sticky top-0 z-50 transition-[box-shadow,padding] duration-300 ease-out">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-18 lg:h-20">
          <!-- Logo -->
          <a href="${basePath}/index.html" class="flex-shrink-0 group">
            <img src="${basePath}/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
                 alt="InnoVAherb"
                 class="h-8 sm:h-9 lg:h-10 w-auto transition-transform duration-300 ease-spring group-hover:scale-105"
            />
          </a>

          <!-- Desktop Nav -->
          <nav class="hidden lg:flex items-center gap-8">
            <a href="${basePath}/index.html#products" class="nav-link font-body text-grey-700 hover:text-brand-600 focus-visible:text-brand-600 transition-colors duration-200 text-[0.9375rem] font-medium tracking-tight" data-i18n="nav.products">Products</a>
            <a href="${basePath}/about.html" class="nav-link font-body text-grey-700 hover:text-brand-600 focus-visible:text-brand-600 transition-colors duration-200 text-[0.9375rem] font-medium tracking-tight" data-i18n="nav.about">About Us</a>
            <a href="${basePath}/blog.html" class="nav-link font-body text-grey-700 hover:text-brand-600 focus-visible:text-brand-600 transition-colors duration-200 text-[0.9375rem] font-medium tracking-tight" data-i18n="nav.blog">Blog</a>
            <a href="${basePath}/contact.html" class="nav-link font-body text-grey-700 hover:text-brand-600 focus-visible:text-brand-600 transition-colors duration-200 text-[0.9375rem] font-medium tracking-tight" data-i18n="nav.contacts">Contacts</a>
          </nav>

          <!-- Right Actions -->
          <div class="flex items-center gap-3">
            <!-- Language Toggle -->
            <div class="flex items-center bg-warm-100 rounded-full p-0.5 border border-warm-200/60">
              <button data-lang-btn="en" onclick="window.InnoI18n.setLang('en')"
                      class="lang-btn px-2.5 py-1 text-xs font-body font-semibold rounded-full transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-brand-500">
                EN
              </button>
              <button data-lang-btn="bg" onclick="window.InnoI18n.setLang('bg')"
                      class="lang-btn px-2.5 py-1 text-xs font-body font-semibold rounded-full transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-brand-500">
                BG
              </button>
            </div>

            <!-- Cart Icon -->
            <button id="cart-btn" class="relative p-2 rounded-full hover:bg-warm-100 focus-visible:bg-warm-100 active:bg-warm-200 transition-colors duration-200" aria-label="Cart">
              <svg class="w-5 h-5 text-grey-700" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
              </svg>
              <span id="cart-count" class="absolute -top-0.5 -right-0.5 bg-brand-600 text-white text-[0.625rem] font-bold w-4 h-4 rounded-full flex items-center justify-center opacity-0 transition-opacity duration-200">0</span>
            </button>

            <!-- Mobile Menu Button -->
            <button id="menu-toggle" class="lg:hidden p-2 rounded-lg hover:bg-warm-100 focus-visible:bg-warm-100 active:bg-warm-200 transition-colors duration-200" aria-label="Menu">
              <svg class="w-5 h-5 text-grey-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path id="menu-icon-open" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                <path id="menu-icon-close" class="hidden" stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu Panel -->
      <div id="mobile-menu" class="lg:hidden hidden bg-warm-50 border-t border-warm-200/60 overflow-hidden">
        <nav class="px-6 py-6 space-y-1">
          <a href="${basePath}/index.html#products" class="block py-3 px-4 rounded-xl font-body text-grey-800 hover:bg-brand-50 hover:text-brand-700 transition-colors duration-200 font-medium" data-i18n="nav.products">Products</a>
          <a href="${basePath}/about.html" class="block py-3 px-4 rounded-xl font-body text-grey-800 hover:bg-brand-50 hover:text-brand-700 transition-colors duration-200 font-medium" data-i18n="nav.about">About Us</a>
          <a href="${basePath}/blog.html" class="block py-3 px-4 rounded-xl font-body text-grey-800 hover:bg-brand-50 hover:text-brand-700 transition-colors duration-200 font-medium" data-i18n="nav.blog">Blog</a>
          <a href="${basePath}/contact.html" class="block py-3 px-4 rounded-xl font-body text-grey-800 hover:bg-brand-50 hover:text-brand-700 transition-colors duration-200 font-medium" data-i18n="nav.contacts">Contacts</a>
        </nav>
      </div>
    </header>`;

    // ── Mobile menu toggle ──
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const open = menu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden', !open);
        iconClose.classList.toggle('hidden', open);
      });
    }

    // ── Sticky header shadow on scroll ──
    const mainHeader = document.getElementById('main-header');
    if (mainHeader) {
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            if (window.scrollY > 60) {
              mainHeader.classList.add('shadow-elevated');
            } else {
              mainHeader.classList.remove('shadow-elevated');
            }
            ticking = false;
          });
          ticking = true;
        }
      });
    }

    // ── Language toggle active state ──
    const lang = window.InnoI18n ? window.InnoI18n.getLang() : 'en';
    document.querySelectorAll('[data-lang-btn]').forEach(btn => {
      if (btn.dataset.langBtn === lang) {
        btn.classList.add('bg-white', 'text-brand-700', 'shadow-sm');
      } else {
        btn.classList.add('text-grey-500');
      }
    });
  }

  // ── Footer ──
  function renderFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;
    footer.innerHTML = `
    <footer class="bg-grey-900 text-warm-200 pt-16 pb-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-grey-700/50">
          <!-- Brand Column -->
          <div class="lg:col-span-1">
            <img src="${basePath}/brand_assets/Innoherb_logo_FIN-01-cropped-no-background.png"
                 alt="InnoVAherb" class="h-8 w-auto mb-4 brightness-0 invert opacity-80" />
            <p class="text-warm-300 text-sm leading-relaxed font-body mb-6" data-i18n="footer.tagline">Nature's Intelligence, Perfected.</p>
            <!-- Social Icons -->
            <div class="flex gap-3">
              <a href="#" class="w-9 h-9 rounded-full bg-grey-800 hover:bg-brand-600 flex items-center justify-center transition-colors duration-200" aria-label="Facebook">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-9 h-9 rounded-full bg-grey-800 hover:bg-brand-600 flex items-center justify-center transition-colors duration-200" aria-label="Instagram">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          <!-- Shop Links -->
          <div>
            <h4 class="text-white font-display text-lg font-semibold mb-4 tracking-heading" data-i18n="footer.shop">Shop</h4>
            <ul class="space-y-2.5 font-body text-sm">
              <li><a href="${basePath}/products/lions-mane.html" class="text-warm-300 hover:text-white transition-colors duration-200">Lion's Mane</a></li>
              <li><a href="${basePath}/products/cordyceps.html" class="text-warm-300 hover:text-white transition-colors duration-200">Cordyceps</a></li>
              <li><a href="${basePath}/products/reishi.html" class="text-warm-300 hover:text-white transition-colors duration-200">Reishi</a></li>
              <li><a href="${basePath}/products/shiitake.html" class="text-warm-300 hover:text-white transition-colors duration-200">Shiitake</a></li>
              <li><a href="${basePath}/products/chaga.html" class="text-warm-300 hover:text-white transition-colors duration-200">Chaga</a></li>
              <li><a href="${basePath}/products/mix.html" class="text-warm-300 hover:text-white transition-colors duration-200">Mix</a></li>
            </ul>
          </div>

          <!-- Company Links -->
          <div>
            <h4 class="text-white font-display text-lg font-semibold mb-4 tracking-heading" data-i18n="footer.company">Company</h4>
            <ul class="space-y-2.5 font-body text-sm">
              <li><a href="${basePath}/about.html" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.about">About Us</a></li>
              <li><a href="${basePath}/blog.html" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.blog">Blog</a></li>
              <li><a href="${basePath}/contact.html" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.contact">Contact</a></li>
            </ul>
          </div>

          <!-- Support Links -->
          <div>
            <h4 class="text-white font-display text-lg font-semibold mb-4 tracking-heading" data-i18n="footer.support">Support</h4>
            <ul class="space-y-2.5 font-body text-sm">
              <li><a href="#" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.shipping">Shipping & Returns</a></li>
              <li><a href="#" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.faq">FAQ</a></li>
              <li><a href="#" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.privacy">Privacy Policy</a></li>
              <li><a href="#" class="text-warm-300 hover:text-white transition-colors duration-200" data-i18n="footer.terms">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="pt-8 text-center">
          <p class="text-grey-400 text-xs font-body" data-i18n="footer.rights">© 2026 InnoVAherb. All rights reserved.</p>
        </div>
      </div>
    </footer>`;
  }

  // ── Init ──
  document.addEventListener('DOMContentLoaded', () => {
    renderHeader();
    renderFooter();
    // Re-translate after injection
    if (window.InnoI18n) {
      window.InnoI18n.translatePage();
    }
  });
})();
