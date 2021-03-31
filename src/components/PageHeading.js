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
      xPercent: 100,
    });
    // .from(squiggle, {
    //   ease: "back",
    //   duration: 1,
    //   autoAlpha: 0,
    //   xPercent: 100,
    // });

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
          letterSpacing: ["0.5rem", "1rem"],
          pl: "0.5rem",
          color: "secondary",
          m: 0,
          mt: "0.5rem",
        }}
      >
        {pageTitle.toUpperCase()}
      </h1>
      {/* <svg
        ref={(el) => (squiggle = el)}
        width={isMobile ? "150" : "283"}
        height="28"
        viewBox="0 0 283 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 14C12.3333 0.666667 20.6667 0.666667 29 14C37.3333 27.3333 45.6667 27.3333 54 14C62.3333 0.666667 70.6667 0.666667 79 14C87.3333 27.3333 95.6667 27.3333 104 14C112.333 0.666667 120.667 0.666667 129 14C137.333 27.3333 145.667 27.3333 154 14C162.333 0.666667 170.667 0.666667 179 14C187.333 27.3333 195.667 27.3333 204 14C212.333 0.666667 220.667 0.666667 229 14C237.333 27.3333 245.667 27.3333 254 14C262.333 0.666667 270.667 0.666667 279 14"
          stroke={primary}
          strokeWidth="8"
        />
      </svg> */}
    </div>
  );
}
