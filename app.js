let navbarBtn = document.querySelector('.navbar__icon');
let dropdownLinks = document.querySelector('.links__dropdown');

navbarBtn.addEventListener("click", () => {
  dropdownLinks.classList.toggle("links__dropdown--active");
});




