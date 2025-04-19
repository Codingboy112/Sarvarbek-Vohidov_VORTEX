import { translations, fetchTextArray } from './indexTranslations.js';

let indexTranslations = {}; 

let textArray = document.querySelectorAll('#change_lang_main');
let changeHeroLang = document.querySelectorAll('.change_lang_hero');
let projectLan = document.querySelectorAll('.project__lan__change');
let secondProLan = document.querySelectorAll('.second__pro__lan__change');
let thirdProLan = document.querySelectorAll('.third__pro__lang__change');
let changeAboutLang = document.querySelectorAll('.aboutSection_lang');
let connectLan = document.querySelectorAll('.connect__lan__change');
const languageSelect = document.querySelector("#choose__lang");
const languageSelect2 = document.querySelector("#choose__lang2");

// Make sure translations are loaded before calling changeLanguage
async function changeLanguage(lang, changeLang) {
  if (Object.keys(translations).length === 0) {
    console.error("Translations are not loaded yet!");
    return;
  }
  
  const langTranslations = translations[lang];  // Renamed to avoid confusion
  if (!langTranslations) {
    console.error(`Translations not found for language: ${lang}`);
    return;
  }

  // Header
  textArray[0].textContent = langTranslations.work;
  textArray[1].textContent = langTranslations.about;
  textArray[2].textContent = langTranslations.contact;
  textArray[3].textContent = langTranslations.work;
  textArray[4].textContent = langTranslations.about;
  textArray[5].textContent = langTranslations.contact;

  // Hero
  changeHeroLang[0].textContent = langTranslations.welcome;
  changeHeroLang[1].innerHTML = langTranslations.nameText;
  changeLang(changeHeroLang[1], lang);
  changeHeroLang[2].textContent = langTranslations.heroIntro;
  changeHeroLang[3].innerHTML = langTranslations.heroContact;

  // First Project
  projectLan[0].innerText = langTranslations.featured;
  changeLang(projectLan[0], lang);
  projectLan[1].innerHTML = langTranslations.featuredIntro;
  projectLan[2].innerHTML = langTranslations.featuredStatus;
  projectLan[3].innerHTML = langTranslations.featuredProTitle;
  projectLan[4].innerHTML = langTranslations.featuredProDetail;
  projectLan[5].innerHTML = langTranslations.featuredTextInfo;
  projectLan[6].innerHTML = langTranslations.featuredTextYear;
  projectLan[7].innerHTML = langTranslations.featuredTextRole;
  projectLan[8].innerHTML = langTranslations.featuredTextFront;
  projectLan[9].innerHTML = langTranslations.featuredTextLive;
  projectLan[10].innerHTML = langTranslations.featuredTextSee;

  // Second Project
  secondProLan[0].innerHTML = langTranslations.secondProStatus;
  secondProLan[1].innerHTML = langTranslations.secondProTitle;
  secondProLan[2].innerHTML = langTranslations.secondProDetail;
  secondProLan[3].innerHTML = langTranslations.featuredTextInfo;
  secondProLan[4].innerHTML = langTranslations.featuredTextYear;
  secondProLan[5].innerHTML = langTranslations.featuredTextRole;
  secondProLan[6].innerHTML = langTranslations.featuredTextFront;
  secondProLan[7].innerHTML = langTranslations.featuredTextLive;
  secondProLan[8].innerHTML = langTranslations.featuredTextSee;

  // Third Project
  thirdProLan[0].innerHTML = langTranslations.thirdProStatus;
  thirdProLan[1].innerHTML = langTranslations.thirdProTitle;
  thirdProLan[2].innerHTML = langTranslations.thirdProDetail;
  thirdProLan[3].innerHTML = langTranslations.featuredTextInfo;
  thirdProLan[4].innerHTML = langTranslations.featuredTextYear;
  thirdProLan[5].innerHTML = langTranslations.featuredTextRole;
  thirdProLan[6].innerHTML = langTranslations.featuredTextFront;
  thirdProLan[7].innerHTML = langTranslations.featuredTextLive;
  thirdProLan[8].innerHTML = langTranslations.featuredTextSee;

  // About Section
  changeAboutLang[0].innerHTML = langTranslations.aboutMeIntro;
  changeLang(changeAboutLang[0], lang);
  changeAboutLang[1].innerHTML = langTranslations.aboutBigText;
  changeAboutLang[2].innerHTML = langTranslations.aboutSmallText;
  changeAboutLang[3].innerHTML = langTranslations.aboutLinkText;
  changeAboutLang[4].innerHTML = langTranslations.aboutSkills;

  // Connect Section
  connectLan[0].innerHTML = langTranslations.connectIntro;
  changeLang(connectLan[0], lang);
  connectLan[1].innerHTML = langTranslations.connectText;
  connectLan[2].innerHTML = langTranslations.connectInfoText;
  connectLan[3].innerHTML = langTranslations.connectTextName;
  connectLan[4].innerHTML = langTranslations.connectTextEmail;
  connectLan[6].innerHTML = langTranslations.connectTextMessage;
  connectLan[7].innerHTML = langTranslations.connectTextSubmit;
}

fetchTextArray().then(() => {
  // Now that translations are loaded, assign them to indexTranslations
  Object.entries(translations).forEach(([lang, translation]) => {
    indexTranslations[lang] = translation;
  });

  console.log('✅ Translations successfully assigned to indexTranslations:', indexTranslations);

  const savedLang = localStorage.getItem("language");

  function setLangClass(elements, lang) {
    if (!elements) return;
    const elList = Array.isArray(elements) ? elements : [elements];
    elList.forEach(el => {
      for (let cls of el.classList) {
        if (cls.startsWith("lang_")) el.classList.remove(cls);
      }
      el.classList.add(`lang_${lang}`);
    });
  }

  // Call changeLanguage only after translations are loaded
  if (savedLang) {
    languageSelect.value = savedLang;
    languageSelect2.value = savedLang;
    changeLanguage(savedLang, setLangClass);
  }

  languageSelect.addEventListener("change", () => {
    const selectedLang = languageSelect.value;
    changeLanguage(selectedLang, setLangClass);
    languageSelect2.value = selectedLang;
    localStorage.setItem("language", selectedLang);
  });

  languageSelect2.addEventListener("change", () => {
    const selectedLang = languageSelect2.value;
    changeLanguage(selectedLang, setLangClass);
    languageSelect.value = selectedLang;
    localStorage.setItem("language", selectedLang);
  });
});
