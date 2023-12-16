import { gsap } from "gsap/gsap-core";

export const hidePreloaderScreen = () => {
  gsap
    .timeline()
    .to(".preloader", {
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
      ease: "Power3.easeOut",
    })
    .to(".preloader", { display: "none" });
};

export const learnMoreAnim = (ref: any) => {
  gsap.to(ref.current, {
    duration: 0.5,
    y: -10,
    repeat: -1,
    yoyo: true,
  });
};

export const skillsSectionAnim = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".h2_skillsSection",
        start: "top bottom",
        end: "bottom center",
      },
    })
    .to(".h2_skillsSection", { y: 0, opacity: 1 })
    .to(".card_skillsSection", { opacity: 1, stagger: 0.2, x: 0 });
};
