/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function MainContainer({ children }) {
  return (
    <main
      sx={{
        width: "100%",
        maxWidth: "900px",
        paddingTop: "10vh",
        // borderLeft: "2px solid #777",
        // borderRight: "2px solid #777",
        mx: "auto",
        // overflowX: "hidden",
      }}
    >
      {children}
    </main>
  );
}
