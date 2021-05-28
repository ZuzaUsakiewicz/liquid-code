import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
} from "swiper/core";

SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);

const swiper = new Swiper(".projectsSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
    draggable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
