/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import LookingForWork from "./LookingForWork";
import Projects from "./Projects";

export default function Landing(props) {
  return (
    <div sx={{ height: "100vh", width: "100vw", padding: "3rem" }}>
      <header sx={{ width: "100%" }}>
        <h1 sx={{ fontWeight: "300", padding: 0, margin: 0 }}>
          ROBERT DIRKEN // Web Developer Portfolio
        </h1>
      </header>
      {/* <LookingForWork />     */}
      <div sx={{ border: "2px solid black", height: "100%", padding: "1rem" }}>
        <Projects />
      </div>
    </div>
  );
}
