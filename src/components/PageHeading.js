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
    tl.current.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "start 80%",
        end: "bottom 80%",
        scrub: 1,
      },
      ease: "ease",
      duration: 1,
      autoAlpha: 0,
      xPercent: 100,
    });
  }, [background, text, pageTitle]);

  return (
    <div sx={{ display: "flex" }}>
      <h1
        ref={(el) => (heading = el)}
        sx={{
          fontFamily: "secondary",
          fontSize: "3rem",
          fontWeight: 400,
          letterSpacing: "3px",
          pl: "0.5rem",
          m: 0,
        }}
      >
        {pageTitle.toUpperCase()}
      </h1>
    </div>
  );
}
