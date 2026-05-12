const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  if (a.getAttribute('href') === current) a.classList.add('active');
});

// Scroll reveal
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// Poem language filter
document.querySelectorAll('.filter-btn[data-lang]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-lang]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const lang = btn.dataset.lang;
    document.querySelectorAll('.poem-card').forEach(card => {
      card.style.display = (!lang || card.dataset.lang === lang) ? '' : 'none';
    });
  });
});
