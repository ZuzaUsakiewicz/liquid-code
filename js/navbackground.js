const backgroundOnScroll = () => {
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".nav");
    if (window.scrollY >= 80) {
      navbar.classList.add("active");
    } else {
      navbar.classList = "nav";
    }
  });
};
backgroundOnScroll();
