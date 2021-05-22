let loader = document.querySelector(".loader");

export const closeLoading = () => {
  loader.style.display = "none";
};
window.addEventListener("load", closeLoading);
