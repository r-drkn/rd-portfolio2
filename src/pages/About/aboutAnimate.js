import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const aboutAnimate = {
  aboutHeading: {
    scrollTrigger: {
        
    },
    xPercent: -20,
    autoAlpha: 0,
    duration: 1,
    ease: "ease",
  },
};
