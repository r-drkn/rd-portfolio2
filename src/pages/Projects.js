/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { jsx } from "theme-ui";
import BackButton from "../components/BackButton";

export default function Projects() {
  const [showProject, setShowProject] = useState("");

  useEffect(() => {
    setShowProject("");
  }, []);

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
        <BackButton setShowProject={setShowProject} />
      </div>

      <ul
        sx={{
          fontFamily: "main",
          margin: "0",
          fontSize: "1.5rem",
          padding: "0rem 2.5rem",
          li: {
            padding: "1rem 0",
            cursor: "pointer",
            listStyle: "none",
          },
        }}
      >
        {(showProject === "" || showProject === "catalog") && (
          <li
            onClick={() => {
              setShowProject("catalog");
            }}
          >
            catalogmusic.co //{" "}
            <em>
              online shop for a vinyl record store in Brisbane built in MERN
            </em>
          </li>
        )}
        {(showProject === "" || showProject === "portfolio2") && (
          <li
            onClick={() => {
              setShowProject("portfolio2");
            }}
          >
            Portfolio v2 //{" "}
            <em>current portfolio built in React with Theme UI</em>
          </li>
        )}
        {(showProject === "" || showProject === "portfolio1") && (
          <li
            onClick={() => {
              setShowProject("portfolio1");
            }}
          >
            Portfolio v1 //{" "}
            <em>
              built in html and css, my original portfolio before learning
              JS/React
            </em>
          </li>
        )}
      </ul>
    </div>
  );
}
