const nav = document.querySelector('.site-nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
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

// Writing topic filter
document.querySelectorAll('.filter-btn[data-topic]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn[data-topic]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const topic = btn.dataset.topic;
    document.querySelectorAll('.writing-card[data-topic]').forEach(card => {
      card.style.display = (!topic || card.dataset.topic === topic) ? '' : 'none';
    });
  });
});

// BibTeX copy-to-clipboard buttons
document.querySelectorAll('.bibtex-copy').forEach(btn => {
  btn.addEventListener('click', () => {
    const pre = document.getElementById(btn.dataset.target);
    if (!pre || !navigator.clipboard) return;
    navigator.clipboard.writeText(pre.textContent.trim()).then(() => {
      const original = btn.textContent;
      btn.textContent = 'Copied!';
      setTimeout(() => { btn.textContent = original; }, 1500);
    });
  });
});
