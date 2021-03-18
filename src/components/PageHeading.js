import React, { useEffect, useRef } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import theme from "../theme";

export default function PageHeading(props) {
  const { pageTitle } = props;
  let heading = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  let tl = useRef(gsap.timeline());
  const { text, background } = theme.colors;

  useEffect(() => {
    heading.style.visibility = "visible";
    tl.current.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "start 50%",
        end: "+=150px 50%",
        scrub: true,
        markers: true,
      },
      backgroundImage: `linear-gradient(0deg, ${background} -200%, ${text} 100%, ${background} 100%)`,
      ease: "none",
      duration: 5,
      autoAlpha: 1,
    });
  }, [background, text]);

  return (
    <div>
      <h1
        ref={(el) => (heading = el)}
        sx={{
          visibility: "hidden",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "5rem",
          letterSpacing: "2rem",
          backgroundImage: `linear-gradient(45deg, ${background} -200%, ${text} -100%, ${background} 0%)`,
          backgroundClip: "text",
          textFillColor: "transparent",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {pageTitle}
      </h1>
    </div>
  );
}
