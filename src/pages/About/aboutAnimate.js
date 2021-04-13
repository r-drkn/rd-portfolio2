import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const animate = {
  aboutItems: {
    scrollTrigger: {
      trigger: "#about",
      start: "top center",
      end: "center center",
      scrub: true,
      id: "aboutitems",
    },
    autoAlpha: 0,
    y: 50,
    stagger: 0.5,
  },
};
