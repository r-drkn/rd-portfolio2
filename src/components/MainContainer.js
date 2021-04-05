/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "theme-ui";

export default function MainContainer({ children }) {
  return (
    <main
      sx={{
        // position: "relative",
        width: "100%",
        height: "100%",
        maxWidth: "1280px",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflowX: "hidden",
      }}
    >
      {children}
    </main>
  );
}
