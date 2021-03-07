/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import Nav from "./Nav";

export default function Landing(props) {
  return (
    <div style={{ height: "100vh", width: "100vw" }} sx={{}}>
      <h1>Landing Page</h1>
      <Nav />
    </div>
  );
}
