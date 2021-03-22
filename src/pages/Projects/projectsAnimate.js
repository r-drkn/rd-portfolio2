// import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export let projectsAnimate = {
  natural: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 2,
      start: "top 80%",
      end: "bottom 80%",
      id: "natural",
      once: true,
    },
    xPercent: -20,
    autoAlpha: 0,
    ease: "ease",
  },
  alt: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 2,
      start: "top 80%",
      end: "bottom 80%",
      id: "alt",
      once: true,
    },
    xPercent: 20,
    autoAlpha: 0,
    ease: "ease",
  },
};
