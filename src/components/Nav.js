/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { Link } from "react-router-dom";
import { jsx } from "theme-ui";

export default function Nav() {
  return (
    <nav sx={{ position: "fixed", top: 0, right: 100 }}>
      <ul sx={{ listStyle: "none" }}>
        <li>about </li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}
