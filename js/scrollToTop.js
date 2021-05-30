const scrollToTopBtn = document.querySelector(".btn-to-top");

const navbarOnScroll = () => {
  window.addEventListener("scroll", () => {
    if (scrollY > 80) {
      scrollToTopBtn.classList.add("active");
    } else if (scrollY < 80) {
      scrollToTopBtn.classList.remove("active");
    }
  });
};

const scrollToTop = () => {
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo(0, 0);
  });
};

navbarOnScroll();
scrollToTop();
