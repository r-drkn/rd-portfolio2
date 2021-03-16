// import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export let projectsAnimate = {
  title: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 2,
      start: "top bottom",
      end: "bottom bottom",
      id: "natural",
      once: true,
    },
    xPercent: -20,
    autoAlpha: 0,
    ease: "ease",
  },
  altTitle: {
    scrollTrigger: {
      trigger: ".project",
      scrub: 2,
      start: "top bottom",
      end: "bottom bottom",
      id: "alt",
      once: true,
    },
    xPercent: 20,
    autoAlpha: 0,
    ease: "ease",
  },
};