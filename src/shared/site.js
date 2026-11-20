const contactDetails = Object.freeze({
  email: 'klikitsolutions@outlook.com',
  whatsappNumber: '+27743716637',
  defaultWhatsAppMessage: "Hello KLIK I.T., I'd like to enquire about your services.",
});

export function initializeSite() {
  const root = document.documentElement;
  root.classList.replace('no-js', 'js');

  const menuToggle = document.querySelector('.menu-toggle');
  const siteHeader = document.querySelector('.site-header');
  const navigation = document.querySelector('#primary-navigation');

  function closeMenu({ returnFocus = false } = {}) {
    if (!menuToggle || !siteHeader) {
      return;
    }

    siteHeader.classList.remove('nav-open');
    menuToggle.setAttribute('aria-expanded', 'false');

    if (returnFocus) {
      menuToggle.focus();
    }
  }

  if (menuToggle && siteHeader && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      siteHeader.classList.toggle('nav-open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        closeMenu({ returnFocus: true });
      }
    });
  }

  document.querySelectorAll('[data-contact-email]').forEach((emailLink) => {
    emailLink.href = `mailto:${contactDetails.email}`;
    const value = emailLink.querySelector('.contact-detail-value');

    if (value) {
      value.textContent = contactDetails.email;
    }
  });

  document.querySelectorAll('[data-contact-whatsapp]').forEach((whatsappLink) => {
    const whatsappDigits = contactDetails.whatsappNumber.replace(/\D/g, '');
    const message =
      whatsappLink.dataset.whatsappMessage || contactDetails.defaultWhatsAppMessage;
    whatsappLink.href =
      `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(message)}`;

    const numberLabel = whatsappLink.querySelector('[data-whatsapp-number]');

    if (numberLabel) {
      numberLabel.textContent = contactDetails.whatsappNumber;
    }
  });

  document.querySelectorAll('#current-year').forEach((year) => {
    year.textContent = String(new Date().getFullYear());
  });
}
