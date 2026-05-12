const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) toggle.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.site-nav a').forEach(a => {
  if (a.getAttribute('href') === current) a.classList.add('active');
});
