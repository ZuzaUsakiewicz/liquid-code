const navbar = document.querySelector(".nav");

const backgroundOnScroll = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 80) {
      navbar.classList.add("active");
    } else {
      navbar.classList = "nav";
    }
  });
};
backgroundOnScroll();
