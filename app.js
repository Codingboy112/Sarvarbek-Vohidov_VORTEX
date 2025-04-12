let navbarBtn = document.querySelector(".navbar__icon");
let dropdownLinks = document.querySelector(".links__dropdown");
let elForm = document.querySelector("#user__details");
let elName = document.querySelector("#userName");
let elEmail = document.querySelector("#userEmail");
let elNumber = document.querySelector("#userPhone");
let userMessage = document.querySelector("#userMessage");
const changeHeaderLang = document.querySelectorAll("#change_lang_main");
const changeHeroLang = document.querySelectorAll(".change_lang_hero");
const languageSelect = document.getElementById("choose__lang");
const languageSelect2 = document.getElementById("choose__lang2");
const projectLan = document.querySelectorAll(".project__lan__change");
let secondProLan = document.querySelectorAll(".second__pro__lan__change");
let thirdProLan = document.querySelectorAll(".third__pro__lang__change");
let connectLan = document.querySelectorAll(".connect__lan__change");




navbarBtn.addEventListener("click", () => {
  dropdownLinks.classList.toggle("links__dropdown--active");
});

elForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const token = "8167034934:AAGdbvHormNNr1r-AMgKMZm6-gVhkI9eVpY";
  const chatId = "6959013020";

  let telegramSend = `New People 🌎\n\nUsername: ${elName.value}\nEmail: ${elEmail.value}\nPhone Number: ${elNumber.value}\nMessage: ${userMessage.value}`;

  

  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${telegramSend}`;

  fetch(url, { method: "GET" })
    .then((response) => response.json())
    .then((data) => {
      if (data.ok) {
        console.log("Message sent successfully!");
      } else {
        console.error("Error sending message:", data);
      }
    })
    .catch((error) => console.error("Error:", error));

  elName.value = "";
  elEmail.value = "";
  elNumber.value = "";
  userMessage.value = "";
});

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() === "a") {
    document.getElementById("wordDownload").click();
  }
});

function changeLanguage(lang) {
  // header

  changeHeaderLang[0].textContent = translations[lang].work;
  changeHeaderLang[1].textContent = translations[lang].about;
  changeHeaderLang[2].textContent = translations[lang].contact;
  changeHeaderLang[3].textContent = translations[lang].work;
  changeHeaderLang[4].textContent = translations[lang].about;
  changeHeaderLang[5].textContent = translations[lang].contact;

  // hero

  changeHeroLang[0].textContent = translations[lang].welcome;
  changeHeroLang[1].innerHTML = translations[lang].nameText;
  changeHeroLang[2].textContent = translations[lang].heroIntro;
  changeHeroLang[3].innerHTML = translations[lang].heroContact;

  // first Project
  projectLan[0].innerText = translations[lang].featured;
  projectLan[1].innerHTML = translations[lang].featuredIntro;
  projectLan[2].innerHTML = translations[lang].featuredStatus;
  projectLan[3].innerHTML = translations[lang].featuredProTitle;
  projectLan[4].innerHTML = translations[lang].featuredProDetail;
  projectLan[5].innerHTML = translations[lang].featuredTextInfo;
  projectLan[6].innerHTML = translations[lang].featuredTextYear;
  projectLan[7].innerHTML = translations[lang].featuredTextRole;
  projectLan[8].innerHTML = translations[lang].featuredTextFront;
  projectLan[9].innerHTML = translations[lang].featuredTextLive;
  projectLan[10].innerHTML = translations[lang].featuredTextSee;
  
  // second Project

  secondProLan[0].innerHTML = translations[lang].secondProStatus;
  secondProLan[1].innerHTML = translations[lang].secondProTitle;
  secondProLan[2].innerHTML = translations[lang].secondProDetail;
  secondProLan[3].innerHTML = translations[lang].featuredTextInfo;
  secondProLan[4].innerHTML = translations[lang].featuredTextYear;
  secondProLan[5].innerHTML = translations[lang].featuredTextRole;
  secondProLan[6].innerHTML = translations[lang].featuredTextFront;
  secondProLan[7].innerHTML = translations[lang].featuredTextLive;
  secondProLan[8].innerHTML = translations[lang].featuredTextSee;

  // third Project

  thirdProLan[0].innerHTML = translations[lang].thirdProStatus;
  thirdProLan[1].innerHTML = translations[lang].thirdProTitle;
  thirdProLan[2].innerHTML = translations[lang].thirdProDetail;
  thirdProLan[3].innerHTML = translations[lang].featuredTextInfo;
  thirdProLan[4].innerHTML = translations[lang].featuredTextYear;
  thirdProLan[5].innerHTML = translations[lang].featuredTextRole;
  thirdProLan[6].innerHTML = translations[lang].featuredTextFront;
  thirdProLan[7].innerHTML = translations[lang].featuredTextLive;
  thirdProLan[8].innerHTML = translations[lang].featuredTextSee;
  
  // Connect Section

  connectLan[0].innerHTML = translations[lang].connectIntro;
  connectLan[1].innerHTML = translations[lang].connectText;
  connectLan[2].innerHTML = translations[lang].connectInfoText;
  connectLan[3].innerHTML = translations[lang].connectTextName;
  connectLan[4].innerHTML = translations[lang].connectTextEmail;
  connectLan[6].innerHTML = translations[lang].connectTextMessage;
  connectLan[7].innerHTML = translations[lang].connectTextSubmit;

  

}

languageSelect.addEventListener("change", function () {
  const selectedLang = languageSelect.value;
  changeLanguage(selectedLang);
  languageSelect2.value = selectedLang;
});

languageSelect2.addEventListener("change", function () {
  const selectedLang = languageSelect2.value;
  changeLanguage(selectedLang);
  languageSelect.value = selectedLang;
});
