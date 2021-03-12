// import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export let projectsAnimate = {
  title: {
    scrollTrigger: {
      trigger: ".project",
      //   markers: true,
      scrub: 1,
      start: "top bottom",
      end: "75% bottom",
      id: "natural",
    },
    xPercent: -20,
    opacity: 0,
    ease: "ease",
  },
  altTitle: {
    scrollTrigger: {
      trigger: ".project",
      //   markers: true,
      scrub: 1,
      start: "top bottom",
      end: "75% bottom",
      id: "alt",
    },
    xPercent: 20,
    opacity: 0,
    ease: "ease",
  },
};
