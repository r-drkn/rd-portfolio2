/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { useEffect, useRef } from "react";
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
  const { secondary } = theme.fonts;

  useEffect(() => {
    tl.current.from(heading, {
      ease: "ease",
      duration: 1,
      autoAlpha: 0,
      yPercent: 100,
    });
    ScrollTrigger.create({
      trigger: heading,
      animation: tl.current,
      start: "start 80%",
      end: "bottom 80%",
      scrub: 1,
    });
  }, [background, text, pageTitle]);

  return (
    <div
      sx={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
        px: "0.5rem",
      }}
    >
      <h1
        ref={(el) => (heading = el)}
        sx={{
          fontFamily: secondary,
          fontSize: ["2.5rem", "2rem"],
          fontWeight: 800,
          letterSpacing: ["0.3rem", "1rem"],
          pl: "0.5rem",
          color: "secondary",
          m: 0,
          mt: "0.5rem",
        }}
      >
        {pageTitle.toUpperCase()}
      </h1>
    </div>
  );
}
