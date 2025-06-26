let navbarBtn = document.querySelector(".navbar__icon");
let dropdownLinks = document.querySelector(".links__dropdown");
let elForm = document.querySelector("#user__details");
let elName = document.querySelector("#userName");
let elEmail = document.querySelector("#userEmail");
let elNumber = document.querySelector("#userPhone");
let userMessage = document.querySelector("#userMessage");
let toTop = document.querySelector(".toTop");
let isShowedImage = true;

let dropdownCertificateEng = document.querySelector(".dropdownCertificateEng");
let dropdownCertificateFront1 = document.querySelector(
  ".dropdownCertificateFront1"
);
let dropdownCertificateFront2 = document.querySelector(
  ".dropdownCertificateFront2"
);

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

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY < lastScrollY) {
    toTop.style.bottom = "50px";
  } else if (currentScrollY > lastScrollY) {
    toTop.style.bottom = "-100px";
  }

  if (currentScrollY === 0) {
    toTop.style.bottom = "-100px";
  }

  lastScrollY = currentScrollY;
});

toTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });

  const scrollCheck = setInterval(() => {
    if (window.scrollY === 0) {
      toTop.style.bottom = "-100px";
      clearInterval(scrollCheck);
    }
  }, 50);
});

let certificateDropdown = document.querySelector("#certificateDropdown");
let singleCloseBtn = document.querySelector("#singleCloseBtn");
let certificateImage = document.querySelector("#certificateImage");
let coverTheArea = document.querySelector(".coverTheArea");

function doCertificateDrop(imgPath) {
  if (!isShowedImage) {
    coverTheArea.style.display = "inline-block";
    certificateDropdown.style.display = "inline-block";
    certificateImage.setAttribute('src', imgPath);
    isShowedImage = true;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
  } else {
    coverTheArea.style.display = "none";
    certificateDropdown.style.display = "none";
    certificateImage.setAttribute('src', '');
    isShowedImage = false;
    document.body.style.overflowY = 'scroll';
    document.documentElement.style.overflowY = 'scroll';
  }
}

["click", "touchend"].forEach(evt =>
  window.addEventListener(evt, (e) => {
    const isCoverArea = e.target.classList.contains('coverTheArea');
    const isCloseBtn = e.target.closest('#singleCloseBtn');

    if (isCoverArea || isCloseBtn) {
      doCertificateDrop('');
    }
  })
);

// Dropdown buttons
dropdownCertificateEng.addEventListener('click', () => {
  isShowedImage = false;
  doCertificateDrop("./assets/image.png");
});

dropdownCertificateFront1.addEventListener('click', () => {
  isShowedImage = false;
  doCertificateDrop("./assets/image2.png");
});

dropdownCertificateFront2.addEventListener('click', () => {
  isShowedImage = false;
  doCertificateDrop("./assets/image3.png");
});
