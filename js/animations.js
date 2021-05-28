gsap.registerPlugin(ScrollTrigger);
const sections = document.querySelectorAll(".animation");

sections.forEach((section) => {
  gsap.fromTo(
    section.children,
    { y: "+=100", opacity: 0 },
    {
      y: 0,
      opacity: 1,
      stagger: 0.1,
      duration: 1,
      ease: "easeInOut",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        toggleActions: "play pause resume reverse",
        anticipatePin: 1,
      },
    }
  );
});
// const playAnimation = () => {};

// playAnimation();
