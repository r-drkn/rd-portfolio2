/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";

export default function Contact() {
  return (
    <div id="contact" sx={{ height: "100vh", pt: "10vh", px: "1rem" }}>
      <PageHeading pageTitle="Contact" />
      <form
        sx={{
          p: "2rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          fontSize: "1.5rem",
          fontFamily: "secondary",
          label: {
            p: "1rem",
          },
          input: {
            p: "0.5rem",
          },
        }}
      >
        <label for="name">
          Name:
          <input type="text" name="name"></input>
        </label>
        <label for="email">
          Email:
          <input type="email" name="email"></input>
        </label>
        <label for="message" sx={{ display: "flex" }}>
          Message:
          <textarea name="message" rows="5"></textarea>
        </label>
        <label for="submit">
          <input type="submit" name="submit" value="Send"></input>
        </label>
      </form>
    </div>
  );
}
