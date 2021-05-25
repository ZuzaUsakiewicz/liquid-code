const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("toggle");
  menu.classList.toggle("active");
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkAnimation 0.7s ease forwards ${
        index / 4 + 0.1
      }s`;
    }
  });
});
