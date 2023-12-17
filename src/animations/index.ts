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

export const navAnim = () => {
  gsap.fromTo(".logo", { opacity: 0 }, { opacity: 1, duration: 1, delay: 1.5 });
  gsap.fromTo(".btn_nav", { opacity: 0 }, { opacity: 1, delay: 1.5 });
};

export const heroAnim = () => {
  gsap
    .timeline()
    .fromTo(
      ".hero_text-container",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        ease: "Power3.easeOut",
        duration: 2,
        delay: 1,
      }
    )
    .to(".icon_hero", { duration: 0.5, y: -10, repeat: -1, yoyo: true }, "-=2");
};

export const skillsSectionAnim = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".h2_skillsSection",
        start: "top +=500",
        end: "bottom center",
      },
    })
    .fromTo(
      ".h2_skillsSection",
      { opacity: 0, y: -70 },
      { y: 0, opacity: 1, duration: 0.5 }
    )
    .fromTo(
      ".card_skillsSection",
      { opacity: 0, x: -20 },
      { opacity: 1, stagger: 0.2, x: 0 },
      "-=0.5"
    );
};

export const projSectionAnim = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".h2_projSection",
        start: "top +=500",
        end: "bottom center",
      },
    })
    .fromTo(
      ".h2_projSection",
      { opacity: 0, y: -70 },
      { opacity: 1, y: 0, duration: 0.5 }
    )
    .fromTo(
      ".image_projSection",
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0 },
      "-=0.5"
    )
    .fromTo(
      ".text_projSection",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, stagger: 0.2 }
    )
    .fromTo(
      ".btn_github",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0 },
      "-=0.3"
    );
};

export const sertifSectionHeadingAnim = (ref: any) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sertif_section",
        start: "top +=500",
        end: "bottom center",
      },
    })
    .fromTo(
      ref.current,
      { opacity: 0, y: -70 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
      }
    );
};

export const sertifSectionAnim = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sertif_container",
        start: "-=300 +=500",
        end: "bottom center",
      },
    })
    .fromTo(
      ".sertificate",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
};

export const contactsSectionAnim = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".h2_contacts",
        start: "top +=500",
        end: "bottom center",
      },
    })
    .fromTo(".h2_contacts", { opacity: 0, y: -70 }, { opacity: 1, y: 0 })
    .fromTo(
      ".icon_socials",
      { x: -100, y: -100, opacity: 0 },
      {
        x: 0,
        y: 0,
        stagger: 0.2,
        duration: 1,
        opacity: 1,
      }
    );
};

export const footerAnim = () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".footer",
        start: "top +=500",
        end: "bottom center",
      },
    })
    .fromTo(
      ".footer",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
};
