/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line
import React from "react";
import theme from "../theme";

export default function CustomButton(props) {
  const { showProject, setShowProject } = props;
  const { white } = theme.colors;

  return (
    <button
      sx={{
        color: "text",
        backgroundColor: "background",
        border: `2px solid ${white}`,
        p: [" 0.5rem 1rem", " 0.5rem 1rem"],
        m: 0,
        "&: hover": {
          backgroundColor: theme.colors.secondary,
        },
      }}
      onClick={() => setShowProject(!showProject)}
    >
      {showProject ? "hide" : "show"}
    </button>
  );
}
