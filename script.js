// Fade-in on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      obs.unobserve(e.target);
    }
  });
}, {threshold: 0.12});
revealEls.forEach(el => io.observe(el));

// Lightweight i18n
const dict = {
  en: {
    "nav.about":"About",
    "nav.works":"Works",
    "nav.contact":"Contact",
    "about.title":"About",
    "about.lead":"Each piece is inspired by the dance of color, texture, and light. Welcome to our world where warm oranges meet deep blues.",
    "about.b1":"Handcrafted, small-batch production",
    "about.b2":"Carefully selected pigments & essences",
    "about.b3":"Bespoke, made-to-order designs",
    "works.title":"Works",
    "works.lead":"Designs that reflect harmony of color and texture — each crafted with care.",
    "works.w1.title":"Evil Eye Candle",
    "works.w1.desc":"A gentle piece that brings balance and calm to your space.",
    "works.w2.title":"Tropical Layers",
    "works.w2.desc":"Vibrant colors with a summer breeze feel and fruity notes.",
    "works.w3.title":"Teddy Candle",
    "works.w3.desc":"Playful charm with a heartwarming, cozy look.",
    "works.w4.title":"Chocolate Candle",
    "works.w4.desc":"Sweet hints with modern textures and a warm aura.",
    "works.w5.title":"Caramel Crumble",
    "works.w5.desc":"Creamy layers and caramel tones for a snug atmosphere.",
    "works.w6.title":"Gold Noir",
    "works.w6.desc":"Elegant gold details on a dark canvas — refined and bold.",
    "contact.title":"Contact",
    "contact.lead":"For inquiries and custom orders:"
  },
  tr: {
    "nav.about":"Hakkında",
    "nav.works":"Çalışmalar",
    "nav.contact":"İletişim",
    "about.title":"Hakkında",
    "about.lead":"Her parçamız; renk, doku ve ışığın dansından ilham alır. Sıcak turuncular ile derin mavilerin buluştuğu dünyamıza hoş geldin.",
    "about.b1":"El yapımı ve sınırlı üretim",
    "about.b2":"Özenle seçilmiş pigment & esanslar",
    "about.b3":"Kişiye özel tasarım seçenekleri",
    "works.title":"Çalışmalar",
    "works.lead":"Her biri sevgiyle üretilmiş, renk ve dokunun uyumunu yansıtan tasarımlar.",
    "works.w1.title":"Nazar Boncuğu Mum",
    "works.w1.desc":"Mekanına denge ve sükunet taşıyan zarif bir parça.",
    "works.w2.title":"Tropik Katman",
    "works.w2.desc":"Yaz esintisi ve meyvemsi notalarla canlı renkler.",
    "works.w3.title":"Ayıcık Mum",
    "works.w3.desc":"Neşeli ve iç ısıtan yumuşak bir görünüm.",
    "works.w4.title":"Çikolatalı Mum",
    "works.w4.desc":"Tatlı esintiler ve modern dokular.",
    "works.w5.title":"Karamel Crumble",
    "works.w5.desc":"Kremamsı doku ve karamel tonlarıyla sıcak atmosfer.",
    "works.w6.title":"Gold Noir",
    "works.w6.desc":"Koyu zeminde altın detaylar — rafine ve cesur.",
    "contact.title":"İletişim",
    "contact.lead":"Soruların ve özel siparişlerin için:"
  }
};

const applyLang = (lang) => {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[lang][key]) el.textContent = dict[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
};

const saved = localStorage.getItem('lang') || 'en';
applyLang(saved);

document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> applyLang(btn.dataset.lang));
});
