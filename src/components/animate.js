// import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const landingHeading = (elem) => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    duration: 2,
    ease: "ease",
  });
};