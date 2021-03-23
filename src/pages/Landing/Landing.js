/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import Selfie from "../../images/selfie-test.JPG";
import LookingForWork from "../../components/LookingForWork";
import { landingAnimate } from "./landingAnimate.js";
import gsap from "gsap";
import rob from "../../images/rob.svg";
import theme from "../../theme.js";

export default function Landing(props) {
  let heading = useRef(null);
  let byline = useRef(null);
  let description = useRef(null);
  let tl = useRef(gsap.timeline());
  const { primary } = theme.colors;

  useEffect(() => {
    heading.style.visibility = "visible";
    byline.style.visibility = "visible";
    description.style.visibility = "visible";
    tl.current
      .from(heading, landingAnimate.heading)
      .from(byline, landingAnimate.byline)
      .from(description, landingAnimate.description);
  }, []);

  return (
    <div
      sx={{
        width: "100%",
        height: "90vh",
        display: "grid",
        gridTemplate: "repeat(9, 1fr) / repeat(16, 1fr)",
        flexDirection: "column",
        fontFamily: "primary",
        letterSpacing: "2px",
        p: "1rem",
        pb: "2rem",
      }}
    >
      <h1
        className="heading"
        ref={(el) => (heading = el)}
        sx={{
          visibility: "hidden",
          fontSize: "5rem",
          gridArea: "2 / 1 / 4 / 10",
          padding: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          fontWeight: "400",
          color: "secondary",
        }}
      >
        HI, I'M ROB.
      </h1>
      <h2
        ref={(el) => (byline = el)}
        sx={{
          visibility: "hidden",
          fontSize: "2.5rem",
          padding: 0,
          gridArea: "4/ 1 / 6 / 11",
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <span sx={{ fontSize: "3rem" }}>I make things</span> <br />
        on the internet.
      </h2>

      <div
        ref={(el) => (description = el)}
        sx={{
          visibility: "hidden",
          gridArea: "6 / 1 / 8 / 9 ",
          fontSize: "1.2rem",
          textAlign: "justify",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p sx={{ padding: "1rem", m: 0 }}>
          I'm a Junior Developer living in Brisbane specializing in MERN based
          applications with a particular interest in front end development.
        </p>
      </div>
      <div sx={{ gridArea: "1 / 10 / 10 / 16 " }}></div>
      {/* <LookingForWork gridArea="6 / 13 / 8 / 16 " /> */}
    </div>
  );
}
