function initLanguageSwitcher() {
   const savedLang = localStorage.getItem('language') || 'bg';
   setLanguage(savedLang);
   updateLanguageButtons(savedLang);
}

function setLanguage(lang) {
   const elements = document.querySelectorAll('[data-i18n]');
   elements.forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
         el.textContent = translations[lang][key];
      }
   });

   document.documentElement.lang = lang === 'bg' ? 'bg' : 'en';
   localStorage.setItem('language', lang);
   updateLanguageButtons(lang);
}

function updateLanguageButtons(lang) {
   document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
   });
}

document.addEventListener('DOMContentLoaded', () => {
   document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
         const lang = btn.getAttribute('data-lang');
         setLanguage(lang);
      });
   });

   initLanguageSwitcher();
});
