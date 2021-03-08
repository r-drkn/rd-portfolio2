/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";
import BackButton from "../components/BackButton";
import Plus from "../icons/plus.png";

export default function Projects() {
  const [showProject, setShowProject] = useState("");

  const ListItem = (props) => {
    const { project, children } = props;
    const [rotate, setRotate] = useState(false);

    return (
      (showProject === "" || showProject === project) && (
        <li
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
          >
            <img
              src={Plus}
              alt="view more"
              sx={{ height: "2rem", transform: showProject && "rotate(45deg)" }}
            />
          </button>
        </li>
      )
    );
  };

  return (
    <div sx={{ height: "100%", padding: "1rem" }}>
      <div
        sx={{
          fontFamily: "main",
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "2px solid black",
          marginBottom: "1rem",
        }}
      >
        <h1 sx={{ fontWeight: 400, paddingLeft: "1rem" }}>PROJECTS</h1>
        {showProject && <BackButton setShowProject={setShowProject} />}
      </div>

      <ul
        sx={{
          fontFamily: "main",
          margin: "0",
          fontSize: "1.5rem",
          padding: "0rem 0rem",
          li: {
            padding: "1rem",
            cursor: "pointer",
            listStyle: "none",
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            borderRadius: "1rem",
            ":hover": {
              backgroundColor: "blue",
            },
          },
        }}
      >
        <ListItem project="catalog">
          catalogmusic.co //{" "}
          <em>
            online shop for a vinyl record store in Brisbane built in MERN
          </em>
        </ListItem>

        <ListItem project="portfolio2">
          Portfolio v2 //{" "}
          <em>current portfolio built in React with Theme UI</em>
        </ListItem>

        <ListItem project="portfolio1">
          Portfolio v1 //{" "}
          <em>
            built in html and css, my original portfolio before learning
            JS/React
          </em>
        </ListItem>
      </ul>
    </div>
  );
}
