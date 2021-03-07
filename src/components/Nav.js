/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function Nav() {
  return (
    <nav sx={{ position: "fixed", top: 0, right: 0 }}>
      <ul
        sx={{
          listStyle: "none",
          letterSpacing: "4px",
          padding: "0.5rem 3rem",
          textAlign: "right",
        }}
      >
        <li>ABOUT </li>
        <li>PROJECTS</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
}
