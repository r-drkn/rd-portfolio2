/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";

export default function Contact() {
  return (
    <div
      id="contact"
      sx={{
        height: "100vh",
        maxWidth: "900px",
        width: "100%",
        pt: "10vh",
        px: "1rem",
      }}
    >
      <PageHeading pageTitle="Get in touch!" />
    </div>
  );
}
