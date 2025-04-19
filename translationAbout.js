import { aboutTranslations, fetchTextArray } from './translations.js';

const languageSelect = document.querySelector("#choose__lang");
const languageSelect2 = document.querySelector("#choose__lang2");
const changeHeaderLang = document.querySelectorAll("#change_lang_main");
const capabLang = document.querySelectorAll(".capabilities_Lang");
const experLang = document.querySelectorAll(".exper_lang");
const connectLan = document.querySelectorAll(".connect__lan__change");
const aboutSecLang = document.querySelectorAll(".aboutSecLang");

let translationMap = {};

(async () => {
  await fetchTextArray();
  console.log("Translations loaded:", aboutTranslations);

  translationMap = aboutTranslations.reduce((acc, curr) => {
    acc[curr.lang] = curr.translations;
    return acc;
  }, {});

  const savedLang = localStorage.getItem("language");

  if (savedLang) {
    languageSelect.value = savedLang;
    languageSelect2.value = savedLang;
    changeLanguage(savedLang, setLangClass);
  }
})();

function changeLanguage(lang, changeLang) {
  const trans = translationMap[lang];
  if (!trans) {
    console.error(`No translations found for language: ${lang}`);
    return;
  }

  changeHeaderLang[0].textContent = trans.work;
  changeHeaderLang[1].textContent = trans.about;
  changeHeaderLang[2].textContent = trans.contact;
  changeHeaderLang[3].textContent = trans.work;
  changeHeaderLang[4].textContent = trans.about;
  changeHeaderLang[5].textContent = trans.contact;

  aboutSecLang[0].innerHTML = trans.aboutIntro;
  aboutSecLang[1].innerHTML = trans.aboutBigText;
  aboutSecLang[2].innerHTML = trans.aboutSmallText;
  aboutSecLang[3].innerHTML = trans.aboutBtnText;
  aboutSecLang[4].innerHTML = trans.aboutSkills;

  capabLang[0].innerHTML = trans.capabIntro;
  capabLang[1].innerHTML = trans.capabText;
  capabLang[2].innerHTML = trans.capabBtn1;
  capabLang[3].innerHTML = trans.capabBtn2;
  capabLang[4].innerHTML = trans.capabBtn3;

  experLang[0].innerHTML = trans.experIntro;
  experLang[1].innerHTML = trans.experStatus;
  experLang[2].innerHTML = trans.experTime;
  experLang[3].innerHTML = trans.experText;
  experLang[4].innerHTML = trans.experStatus2;
  experLang[5].innerHTML = trans.experTime2;
  experLang[6].innerHTML = trans.experSit;
  experLang[7].innerHTML = trans.experText2;
  experLang[8].innerHTML = trans.experLink;

  connectLan[0].innerHTML = trans.connectIntro;
  changeLang(connectLan[0], lang);
  connectLan[1].innerHTML = trans.connectText;
  connectLan[2].innerHTML = trans.connectInfoText;
  connectLan[3].innerHTML = trans.connectTextName;
  connectLan[4].innerHTML = trans.connectTextEmail;
  connectLan[6].innerHTML = trans.connectTextMessage;
  connectLan[7].innerHTML = trans.connectTextSubmit;
}

function setLangClass(elements, lang) {
  const elList = elements.length ? elements : [elements];
  elList.forEach(el => {
    el.classList.forEach(cls => {
      if (cls.startsWith("lang_")) el.classList.remove(cls);
    });
    el.classList.add(`lang_${lang}`);
  });
}

languageSelect.addEventListener("change", function () {
  const selectedLang = languageSelect.value;
  changeLanguage(selectedLang, setLangClass);
  languageSelect2.value = selectedLang;
  localStorage.setItem("language", selectedLang);
});

languageSelect2.addEventListener("change", function () {
  const selectedLang = languageSelect2.value;
  changeLanguage(selectedLang, setLangClass);
  languageSelect.value = selectedLang;
  localStorage.setItem("language", selectedLang);
});
