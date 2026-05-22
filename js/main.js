/* ===================================================
   DIGITS & SPOTS — Global JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', function () {

  // -------------------------------------------------------
  // MOBILE NAV TOGGLE
  // -------------------------------------------------------
  const toggle = document.querySelector('.ds-nav-toggle');
  const navLinks = document.querySelector('.ds-nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      // animate burger bars
      const bars = toggle.querySelectorAll('span');
      if (isOpen) {
        bars[0].style.transform = 'translateY(7px) rotate(45deg)';
        bars[1].style.opacity  = '0';
        bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity  = '';
        bars[2].style.transform = '';
      }
    });

    // Close nav when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        const bars = toggle.querySelectorAll('span');
        bars[0].style.transform = '';
        bars[1].style.opacity  = '';
        bars[2].style.transform = '';
      });
    });
  }

  // -------------------------------------------------------
  // FAQ ACCORDION
  // -------------------------------------------------------
  document.querySelectorAll('.ds-faq-q').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item    = btn.closest('.ds-faq-item');
      const wasOpen = item.classList.contains('open');
      // close all
      document.querySelectorAll('.ds-faq-item').forEach(function (i) {
        i.classList.remove('open');
      });
      // re-open if it was closed
      if (!wasOpen) item.classList.add('open');
    });
  });

  // -------------------------------------------------------
  // ACTIVE NAV LINK (highlights current page)
  // -------------------------------------------------------
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.ds-nav-links a, .ds-footer-links a').forEach(function (a) {
    const href = a.getAttribute('href');
    if (href && href !== '#' && currentPage.includes(href.replace('.html', ''))) {
      a.classList.add('active');
    }
  });

  // -------------------------------------------------------
  // CONTACT FORM — basic client-side validation
  // (Wire up to a real backend / Formspree / Netlify Forms)
  // -------------------------------------------------------
  const form = document.querySelector('.ds-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const name  = form.querySelector('[name="name"]');
      const phone = form.querySelector('[name="phone"]');
      let valid = true;

      [name, phone].forEach(function (field) {
        if (field && !field.value.trim()) {
          field.style.borderColor = '#c0392b';
          valid = false;
        } else if (field) {
          field.style.borderColor = '';
        }
      });

      if (valid) {
        // Replace this block with your actual form submission logic,
        // e.g. fetch('/api/contact', { method: 'POST', body: new FormData(form) })
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = '✓ Request sent — Kathleen will be in touch soon.';
        btn.disabled    = true;
        btn.style.background = '#3a5a3c';
      }
    });
  }

});
