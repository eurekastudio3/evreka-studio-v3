// Basit mobil menü
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if (menuBtn && navLinks){
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

// Ankarlara yumuşak kaydırma
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if (id.length > 1){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      navLinks?.classList.remove('open');
    }
  });
});
