// The first section's min-height subtracts the header, as on Squarespace
const headerEl = document.querySelector('.header');
const setHeaderH = () => document.documentElement.style.setProperty('--header-h', `${headerEl.offsetHeight}px`);
if (headerEl) { setHeaderH(); window.addEventListener('resize', setHeaderH); }

// ?placeholders outlines copy that still needs importing
if (new URLSearchParams(location.search).has('placeholders')) {
  document.body.classList.add('show-placeholders');
}

// Mobile menu toggle
const burger = document.querySelector('.burger');
if (burger) {
  burger.addEventListener('click', () => {
    const open = document.body.classList.toggle('menu-open');
    burger.setAttribute('aria-expanded', String(open));
  });
}

// Desktop dropdowns: click/keyboard support in addition to hover
document.querySelectorAll('.nav-item > button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    const open = !item.classList.contains('open');
    document.querySelectorAll('.nav-item.open').forEach((i) => i.classList.remove('open'));
    item.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', String(open));
  });
});
document.addEventListener('click', (e) => {
  if (!e.target.closest('.nav-item')) {
    document.querySelectorAll('.nav-item.open').forEach((i) => i.classList.remove('open'));
  }
});

// Fade blocks in as they scroll into view
const fades = document.querySelectorAll('.fade');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fades.forEach((el) => io.observe(el));
} else {
  fades.forEach((el) => el.classList.add('in'));
}
