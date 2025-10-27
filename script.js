// Fade-in (subtle)
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((es,obs)=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('is-visible'); obs.unobserve(e.target);} });
},{threshold:.12});
reveals.forEach(el=>io.observe(el));

/* i18n dictionary */
const dict = {
  en:{
    "nav.about":"About","nav.works":"Works","nav.contact":"Contact",
    "hero.title":"Making candles is simple — creating moments is art.",
    "hero.lead":"A cozy craft that sparks creativity and quality time for everyone.",
    "hero.cta":"Explore Works",
    "about.title":"About",
    "about.lead":"Each piece is inspired by the dance of color, texture and light. Welcome to our world where warm oranges meet deep blues.",
    "about.b1":"Handmade & small-batch production",
    "about.b2":"Carefully selected pigments & essences",
    "about.b3":"Custom design options",
    "works.title":"Works",
    "works.lead":"One-of-a-kind designs made with love, reflecting the harmony of color and texture.",
    "works.w1.title":"Evil Eye Candle","works.w1.desc":"A protective symbol bringing balance and calm.",
    "works.w2.title":"Tropical Layers","works.w2.desc":"Playful layers that recall a summer breeze.",
    "works.w3.title":"Teddy Candle","works.w3.desc":"Soft notes for a sweet, loving ambiance.",
    "works.w4.title":"Chocolate Textures","works.w4.desc":"Modern silhouette with dessert-like details.",
    "works.w5.title":"Caramel Crumble","works.w5.desc":"Warm caramel notes and a cozy atmosphere.",
    "works.w6.title":"Gold Noir","works.w6.desc":"Deep black with golden accents; a refined silhouette.",
    "contact.title":"Contact","contact.lead":"For questions and orders:"
  },
  tr:{
    "nav.about":"Hakkında","nav.works":"Çalışmalar","nav.contact":"İletişim",
    "hero.title":"Mum yapmak basit — anlar yaratmak bir sanattır.",
    "hero.lead":"Herkes için yaratıcılığı ve kaliteli vakti ateşleyen sıcak bir uğraş.",
    "hero.cta":"Çalışmalara Göz At",
    "about.title":"Hakkında",
    "about.lead":"Her parçamız; renk, doku ve ışığın dansından ilham alır. Sıcak turuncular ile derin mavilerin buluştuğu dünyamıza hoş geldin.",
    "about.b1":"El yapımı & sınırlı üretim",
    "about.b2":"Özenle seçilmiş pigment & esanslar",
    "about.b3":"Kişiye özel tasarım seçenekleri",
    "works.title":"Çalışmalar",
    "works.lead":"Sevgiyle üretilmiş, renk ve dokunun uyumunu yansıtan özgün tasarımlar.",
    "works.w1.title":"Nazar Boncuğu Mum","works.w1.desc":"Denge ve sükunet getiren zarif bir sembol.",
    "works.w2.title":"Tropik Katman","works.w2.desc":"Yaz esintisini çağrıştıran neşeli katmanlar.",
    "works.w3.title":"Ayıcık Mum","works.w3.desc":"Tatlı ve sıcak bir ambiyans için yumuşak notalar.",
    "works.w4.title":"Çikolatalı Dokular","works.w4.desc":"Modern siluet, tatlı esintiler.",
    "works.w5.title":"Karamel Crumble","works.w5.desc":"Sıcak karamel tonlarıyla huzurlu bir atmosfer.",
    "works.w6.title":"Gold Noir","works.w6.desc":"Siyah zemin üzerinde altın vurgular; rafine bir siluet.",
    "contact.title":"İletişim","contact.lead":"Soruların ve siparişlerin için:"
  },
  he:{
    "nav.about":"אודות","nav.works":"עבודות","nav.contact":"צור קשר",
    "hero.title":"להכין נרות זה פשוט — ליצור רגעים זו אמנות.",
    "hero.lead":"מלאכה חמימה שמעוררת יצירתיות וזמן איכות לכולם.",
    "hero.cta":"לגלריה",
    "about.title":"אודות",
    "about.lead":"כל יצירה מושפעת מהריקוד של צבע, מרקם ואור. ברוכים הבאים לעולם שבו כתומים חמימים נפגשים עם כחולים עמוקים.",
    "about.b1":"עבודת יד וייצור בכמות קטנה",
    "about.b2":"פיגמנטים ותמציות שנבחרו בקפידה",
    "about.b3":"עיצוב בהתאמה אישית",
    "works.title":"עבודות",
    "works.lead":"עיצובים חד-פעמיים שנעשו באהבה, המשקפים הרמוניה של צבע ומרקם.",
    "works.w1.title":"נר עין-החמסה","works.w1.desc":"סמל הגנה שמביא איזון ורוגע.",
    "works.w2.title":"שכבות טרופיות","works.w2.desc":"שכבות שובבות שמעלות זיכרון של בריזת קיץ.",
    "works.w3.title":"נר דובון","works.w3.desc":"נגיעות רכות לאווירה מתוקה ואוהבת.",
    "works.w4.title":"מרקמי שוקולד","works.w4.desc":"סילואט מודרני עם נגיעות קינוח.",
    "works.w5.title":"קראמבל קרמל","works.w5.desc":"גוני קרמל חמים ואווירה ביתית נעימה.",
    "works.w6.title":"גולד נואר","works.w6.desc":"שחור עמוק עם הדגשות זהב; סילואט מעודן.",
    "contact.title":"צור קשר","contact.lead":"לפניות והזמנות:"
  }
};

function applyLang(lang){
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'he') ? 'rtl' : 'ltr';
  localStorage.setItem('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.dataset.i18n;
    if(dict[lang] && dict[lang][k]) el.textContent = dict[lang][k];
  });

  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.classList.toggle('active', b.dataset.lang === lang);
  });
}

// init
applyLang(localStorage.getItem('lang') || 'en');

// events
document.querySelectorAll('.lang-btn').forEach(btn=>{
  btn.addEventListener('click', ()=> applyLang(btn.dataset.lang));
});
