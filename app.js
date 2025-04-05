let navbarBtn = document.querySelector('.navbar__icon');
let dropdownLinks = document.querySelector('.links__dropdown');

navbarBtn.addEventListener("click", () => {
  dropdownLinks.classList.toggle("links__dropdown--active");
});




window.addEventListener("load", function() {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";  
    setTimeout(() => {
        preloader.style.display = "none";
    }, 500); 
});
