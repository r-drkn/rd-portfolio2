/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function About() {
  return (
    <div
      id="about"
      sx={{ fontFamily: "main", height: "100vh", paddingTop: "10vh" }}
    >
      <h1>ABOUT</h1>
      <div
        sx={{
          width: "100%",
          border: "2px solid #333",
          height: "50vh",
          p: "2rem",
        }}
      ><h2>Interests:</h2>
      <h2>Tech Skill:</h2>
      <h2>Interests:</h2></div>
    </div>
  );
}
