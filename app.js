let navbarBtn = document.querySelector(".navbar__icon");
let dropdownLinks = document.querySelector(".links__dropdown");
let elForm = document.querySelector("#user__details");
let elName = document.querySelector("#userName");
let elEmail = document.querySelector("#userEmail");
let elNumber = document.querySelector("#userPhone");
let userMessage = document.querySelector("#userMessage");


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

