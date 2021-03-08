/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function MainContainer({ children }) {
  return (
    <div
      style={{
        width: "92.5vw",
        height: "80vh",
        // padding: "0 3rem 1rem 3rem",
        margin: "0 3rem",
      }}
    >
      {children}
    </div>
  );
}
