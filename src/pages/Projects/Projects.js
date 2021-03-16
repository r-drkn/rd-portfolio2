/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import ProjectCardItem from "./ProjectCardItem";
import catalogWebsite from "../../images/catalog-website.png";

export default function Projects() {
  const projects = [
    {
      title: "catalogmusic",
      description:
        "Building the Catalog Music website was the capstone project in completion of my Bootcamp. It is a fully functional web store for a vinyl record store in Brisbane's Fortitude Valley, built in MERN.",
      techStack: ["MERN", "Material UI", "Discogs API", "Square"],
      image: catalogWebsite,
    },
    {
      title: "Portfolio V2",
      description:
        "Current iteration of my portfolio built in React with Theme UI for styling and GSAP for animations.",
      techStack: ["React", "GSAP", "Theme UI"],
      image: "",
    },
    {
      title: "Recipe Book Hackathon",
      description:
        "Three day Hackathon where my partner and I built a user uploaded recipe database accessible via a global map. The idea was for a product where the geographic locality of recipes could be centralized and users could upload their local dishes",
      techStack: ["Javascript", "HTML/SCSS", "Mapbox", "Recipe API's"],
      image: "",
    },
    {
      title: "Portfolio V1",
      description:
        "My original portfolio built as one of my first projects using HTML and CSS. Through-out this project I mastered the foundations of HTML/CSS including positioning, flexbox and grid. On top of this I experimented with SVG Path animation.",
      techStack: ["HTML/CSS", "SVG Animation"],
    },
    {
      title: "VLX Records",
      description:
        "An early attempt at a project in Rails to build out a marketplace for users to buy and sell vinyl records. Here I learned about MVC methodoligies aswell as the intriciacies of auth, validation and test driven development.",
      techStack: ["Ruby", "Rails", "Tailwind CSS"],
    },
    {
      title: "Butterfly Budgeting Terminal App",
      description:
        "A cute little project built in Ruby for Terminal. The app uses user entered data to create a personal budget with a breakdown of savings targets.",
      techStack: ["Ruby", "Command Line"],
    },
  ];

  return (
    <div id="projects" sx={{ paddingTop: "10vh" }}>
      {projects.map((project, index) => {
        const alt = (index + 1) % 2 === 0;

        return (
          <ProjectCardItem project={project} alt={alt} key={project.title} />
        );
      })}
    </div>
  );
}
