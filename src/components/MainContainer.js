/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function MainContainer({ children }) {
  return (
    <main
      sx={{
        width: "100%",
        maxWidth: "1280px",
        paddingTop: "10vh",
        mx: "auto",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </main>
  );
}
