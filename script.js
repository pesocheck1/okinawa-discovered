// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.feature, .tour-card, .testi-card, .hl-list li, .intro-features');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
reveals.forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// ===== BOOKING FORM =====
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const success = document.getElementById('formSuccess');
  btn.textContent = 'Sending…';
  btn.disabled = true;
  setTimeout(() => {
    btn.style.display = 'none';
    success.style.display = 'block';
    document.getElementById('bookingForm').reset();
  }, 1200);
}

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navLinks.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current
      ? 'var(--teal)'
      : '';
  });
}, { passive: true });

// ===== PARALLAX HERO =====
const hero = document.getElementById('hero');
window.addEventListener('scroll', () => {
  if (window.scrollY < window.innerHeight) {
    hero.style.backgroundPositionY = `calc(50% + ${window.scrollY * 0.3}px)`;
  }
}, { passive: true });
