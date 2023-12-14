/// <reference types="react-scripts" />

declare module "*.mp4" {
  const src: string;
  export default src;
}
declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "gsap/gsap-core";
declare module "gsap/CSSPlugin";
declare module "gsap/ScrollTrigger";
