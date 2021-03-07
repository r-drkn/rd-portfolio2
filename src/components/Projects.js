/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import BackArrow from "./BackArrow.svg";
import { jsx } from "theme-ui";

export default function Projects() {
  return (
    <div>
      <div
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 sx={{ fontWeight: 400 }}>PROJECTS</h1>
      </div>
      <ul sx={{ fontSize: "2rem" }}>
        <li sx={{ padding: "1rem" }}>
          catalogmusic.co //{" "}
          <em>
            online shop for a vinyl record store in Brisbane built in MERN
          </em>
        </li>
        <li sx={{ padding: "1rem" }}>
          Portfolio v 1 //{" "}
          <em>
            built in html and css, my original portfolio before learning
            JS/React
          </em>
        </li>
      </ul>
    </div>
  );
}
