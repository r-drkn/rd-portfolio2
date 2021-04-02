// import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export let projectsAnimate = {
  natural: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 1,
      start: "top bottom",
      end: "bottom bottom",
      id: "natural",
    },
    xPercent: -20,
    autoAlpha: 0,
    ease: "ease",
  },
  alt: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 1,
      start: "top bottom",
      end: "bottom bottom",
      id: "alt",
    },
    xPercent: 20,
    autoAlpha: 0,
    ease: "ease",
  },
  title: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 1,
      start: "top bottom",
      end: "bottom bottom",
      id: "alt",
    },
    autoAlpha: 0,
    ease: "ease",
  },
};
