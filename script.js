// Zarif fade-in için IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      obs.unobserve(entry.target);
    }
  });
}, {rootMargin: '0px 0px -10% 0px', threshold: 0.1});

revealEls.forEach(el => io.observe(el));
