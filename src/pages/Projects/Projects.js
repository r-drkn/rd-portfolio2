/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import ProjectCardItem from "./ProjectCardItem";

export default function Projects() {
  const projects = [
    {
      title: "catalogmusic",
      description:
        "Building the Catalog Music website was the capstone project in completion of my Bootcamp. It is a fully functional web store for a vinyl record store in Brisbane's Fortitude Valley, built in MERN.",
      techStack: ["MERN, Material UI, Discogs API, Square"],
    },
    {
      title: "catalogmusic 2",
      description:
        "Building the Catalog Music website was the capstone project in completion of my Bootcamp. It is a fully functional web store for a vinyl record store in Brisbane's Fortitude Valley, built in MERN.",
      techStack: ["MERN, Material UI, Discogs API, Square"],
    },
  ];

  return (
    <div id="projects" sx={{ paddingTop: "10vh" }}>
      {projects.map((project, index) => {
        const alt = (index + 1) % 2 === 0;
        console.log(alt);
        return (
          <ProjectCardItem project={project} alt={alt} key={project.title} />
        );
      })}
    </div>
  );
}
