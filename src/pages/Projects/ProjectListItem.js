/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";

export default function ListItem(props) {
  const { project, children, showProject, setShowProject } = props;
  const [rotate, setRotate] = useState(false);

  return (
    (showProject === "" || showProject === project) && (
      <li
        sx={{
          padding: "1rem",
          cursor: "pointer",
          listStyle: "none",
          width: "100%",
          borderRadius: "1rem",
          ":hover": {
            backgroundColor: "yellow",
          },
        }}
        onClick={() => {
          showProject ? setShowProject("") : setShowProject(project);
        }}
      >
        {children}
        <button
          sx={{
            border: "none",
            cursor: "pointer",
            backgroundColor: "inherit",
          }}
        ></button>
      </li>
    )
  );
}
