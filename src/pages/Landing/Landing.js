/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import Selfie from "../../images/selfie-test.JPG";
import LookingForWork from "../../components/LookingForWork";
import { landingAnimate } from "./landingAnimate.js";
import gsap from "gsap";

export default function Landing(props) {
  let heading = useRef(null);
  let byline = useRef(null);
  let description = useRef(null);
  let tl = useRef(gsap.timeline());

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
        fontFamily: "main",
        letterSpacing: "2px",
        color: "#333",
        padding: "2rem",
      }}
    >
      <h1
        className="heading"
        ref={(el) => (heading = el)}
        sx={{
          visibility: "hidden",
          fontSize: "4rem",
          gridArea: "2 / 2 / 4 / 9",
          padding: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          fontWeight: "600",
        }}
      >
        Hi, I'm Rob.
      </h1>
      {/* <div
        sx={{
          gridArea: "3 / 8/ 5 / 14",
          display: "flex",
          justifyCenter: "center",
          alignItems: "center",
          padding: "2.5rem",
        }}
      >
        <svg
          viewBox="0 0 152 35"
          width="80%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            path: {
              strokeDasharray: "163",
              strokeDashoffset: "-163",
              animation: "dash 1.5s linear forwards",
            },
            "@keyframes dash": {
              to: {
                strokeDashoffset: "0",
              },
            },
          }}
        >
          <path
            d="M136 17h-7c-9 0-12 8-18 0-7-8-13-8-19 0s-12 8-18 0-12-8-18 0-12 8-18 0-12-8-18 0-12 8-18 0"
            stroke="#4C75F2"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M133 3l15 15-15 14"
            stroke="#4C75F2"
            strokeWidth="7"
            strokeLinecap="round"
          />
        </svg>
      </div> */}
      <h2
        ref={(el) => (byline = el)}
        sx={{
          visibility: "hidden",
          fontSize: "2.5rem",
          padding: 0,
          margin: 0,
          gridArea: "4/ 2 / 5 / 11",
          fontWeight: "600",
        }}
      >
        <span sx={{ fontSize: "3rem" }}>I make things</span> <br />
        on the internet.
      </h2>
      {/* <div
        sx={{
          gridArea: "3 / 13 / 5 / 16",
        }}
      >
        <img src={Selfie} alt="Rob" sx={{ width: "100%" }} />
      </div> */}
      <div
        ref={(el) => (description = el)}
        sx={{
          visibility: "hidden",
          gridArea: "5 / 2 / 8 / 10 ",
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        <p>
          I'm a Junior Developer living in Brisbane specializing in MERN based
          applications with a particular interest in front end development.
        </p>
      </div>
      {/* <LookingForWork gridArea="6 / 13 / 8 / 16 " /> */}
    </div>
  );
}
