const scrollToTopBtn = document.querySelector(".btn-to-top");

window.addEventListener("scroll", () => {
  if (scrollY > 80) {
    scrollToTopBtn.classList.add("active");
  } else if (scrollY < 80) {
    scrollToTopBtn.classList.remove("active");
  }
});

scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
