// =======================
// HEADER & NAVBAR
// =======================

const header = document.querySelector('.header');
const navbar = document.querySelector('.header .navbar');

function updateHeaderOnScroll() {
  if (!header) return;

  if (window.scrollY > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  // On ferme le menu mobile au scroll
  if (navbar) {
    navbar.classList.remove('active');
  }
}

window.addEventListener('scroll', updateHeaderOnScroll);
window.addEventListener('load', updateHeaderOnScroll);

// =======================
// MENU MOBILE
// =======================

const menuBtn  = document.querySelector('#menu-btn');
const navClose = document.querySelector('#nav-close');

if (menuBtn && navbar) {
  menuBtn.addEventListener('click', () => {
    navbar.classList.add('active');
  });
}

if (navClose && navbar) {
  navClose.addEventListener('click', () => {
    navbar.classList.remove('active');
  });
}

// =======================
// SWIPER : SLIDER "MES QUALITÉS"
// =======================

if (typeof Swiper !== 'undefined' && document.querySelector('.review-slider')) {
  const reviewSwiper = new Swiper('.review-slider', {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0:   { slidesPerView: 1 },
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
  });
}

// =======================
// MODALE ANECDOTES
// =======================

const modal       = document.getElementById('modal');
const modalTitle  = document.getElementById('modal-title');
const modalText   = document.getElementById('modal-text');
const closeBtn    = document.getElementById('closeModal');
const openButtons = document.querySelectorAll('.open-modal');

if (modal && modalTitle && modalText && closeBtn && openButtons.length > 0) {

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();

      const title = btn.dataset.title || '';
      const text  = btn.dataset.text  || '';

      modalTitle.textContent = title;
      modalText.textContent  = text;

      modal.classList.add('open');
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('open');
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('open');
    }
  });
}
