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
    tl.current.to(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "start 50%",
        end: "bottom 50%",
        scrub: true,
      },
      backgroundImage: `linear-gradient(45deg, ${background} -20%, ${text} 50%, ${background} 100%)`,
      ease: "none",
      duration: 1,
    });
  }, [background, text]);

  return (
    <div sx={{ display: "flex" }}>
      <h1
        ref={(el) => (heading = el)}
        sx={{
          fontSize: "5rem",
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
