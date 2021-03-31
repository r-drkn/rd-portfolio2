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
      <div sx={{ display: "flex", width: "100%" }}>
        <form
          sx={{
            p: "2rem",
            display: "grid",
            width: "50%",
            alignItems: "flex-start",
            fontSize: "1.5rem",
            fontFamily: "secondary",
            label: {
              p: "1rem",
              pl: "0rem",
            },
            input: {
              p: "0.5rem",
            },
            textarea: {
              p: "0.5rem",
            },
          }}
        >
          <label for="name">Name:</label>
          <input type="text" name="name"></input>

          <label for="email" sx={{ gridColumn: "1" }}>
            Email:
          </label>
          <input type="email" name="email"></input>

          <label for="message" sx={{ display: "flex" }}>
            Message:
          </label>
          <textarea name="message" rows="5"></textarea>

          <label for="submit">
            <input type="submit" name="submit" value="Send"></input>
          </label>
        </form>
        <div sx={{ width: "50%" }}></div>
      </div>
    </div>
  );
}
