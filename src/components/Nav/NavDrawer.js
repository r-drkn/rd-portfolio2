/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

export default function NavDrawer({ children }) {
  return (
    <div
      sx={{
        position: "fixed",
        flexDirection: "column",
        top: "10vh",
        left: 0,
        width: "100vh",
        height: "90vh",
        backgroundColor: "gray",
        display: "flex",
      }}
    >
      {children}
    </div>
  );
}
