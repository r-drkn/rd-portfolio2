/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";
import BackButton from "../../components/BackButton";
import ProjectListItem from "./ProjectListItem";
import ProjectCardItem from "./ProjectCardItem";

export default function Projects() {
  const [showProject, setShowProject] = useState("");

  return (
    <div id="projects" sx={{ height: "200vh", paddingTop: "10vh" }}>
      <div
        sx={{
          fontFamily: "main",
          width: "100%",
          display: "flex",
          alignItems: "center",
          borderBottom: "2px solid black",
          marginBottom: "1rem",
        }}
      >
        <h1 sx={{ fontWeight: 400, paddingLeft: "1rem" }}>PROJECTS</h1>
        {showProject && <BackButton setShowProject={setShowProject} />}
      </div>

      <ProjectCardItem />

      {/* <ul
        sx={{
          fontFamily: "main",
          margin: "0",
          fontSize: "1.5rem",
        }}
      >
        <ProjectListItem
          project="catalog"
          showProject={showProject}
          setShowProject={setShowProject}
        >
          catalogmusic.co //{" "}
          <em>
            online shop for a vinyl record store in Brisbane built in MERN
          </em>
        </ProjectListItem>

        <ProjectListItem
          project="portfolio2"
          showProject={showProject}
          setShowProject={setShowProject}
        >
          Portfolio v2 //{" "}
          <em>current portfolio built in React with Theme UI</em>
        </ProjectListItem>

        <ProjectListItem
          project="portfolio1"
          showProject={showProject}
          setShowProject={setShowProject}
        >
          Portfolio v1 //{" "}
          <em>
            built in html and css, my original portfolio before learning
            JS/React
          </em>
        </ProjectListItem>
      </ul> */}
      {/* {showProject === "catalog" && (
        <div
          sx={{
            height: "100vh",
            marginTop: "1rem",
            display: "flex",
            // flexDirection: "column",
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <div
            sx={{
              width: "50%",
              textAlign: "justify",
              padding: "1rem",
            }}
          >
            <p>
              Building the Catalog Music website was the capstone project in
              completion of my Bootcamp. It is a fully functional web store for
              a vinyl record store in Brisbane's Fortitude Valley, built in
              MERN. The assignment was set for groups of two with my partner
              focusing mainly on the back end while I focussed on the front.
              While it is not yet live, the website is nearing completion and
              continues to challenge me in learning the ins and outs of React
              and the MERN stack.
            </p>
          </div>
        </div>
      )} */}
    </div>
  );
}
