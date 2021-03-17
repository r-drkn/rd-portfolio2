/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function About() {
  return (
    <div
      id="about"
      sx={{ fontFamily: "primary", height: "100vh", p: "1rem", pt: "10vh" }}
    >
      <h1>ABOUT</h1>
      <div
        sx={{
          width: "100%",
          pl: "2rem",
          fontSize: "1.5rem",
        }}
      >
        <p>
          I’m interested in balancing the myriad opportunities of web user
          interface creativity with the importance of building functional and
          accessible experiences.
        </p>
        <p>
          I’m currently in the process of building out my portfolio with small
          jobs and personal projects. My goal throughout this is to not only
          showcase my current skills but to learn new skills while strengthening
          any weaknesses.
        </p>
        <p>
          Tech I’ve worked with includes: <br />
          React, Node, Express, MongoDB, SQL, Ruby/Rails, GSAP, TailwindCSS,
          MaterialUI, ThemeUI,
        </p>
        <p>
          Tech I’m actively incorporating into my skill set: <br />
          Next.JS, Typescript, A11y
        </p>
        <p>
          When I’m away from the keyboard I enjoy cooking elaborate meals for
          friends, electronic music and watching the Chicago Bulls fail to meet
          my expectations despite years of my love and devotion.
        </p>
      </div>
    </div>
  );
}
