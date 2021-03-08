/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function Header() {
  return (
    <header
      sx={{
        fontFamily: "main",
        width: "100%",
        padding: "3rem",
        paddingBottom: 0,
        margin: 0,
      }}
    >
      <h1 sx={{ fontWeight: "300", padding: 0, margin: 0 }}>
        ROBERT DIRKEN // Web Developer Portfolio
      </h1>
    </header>
  );
}
