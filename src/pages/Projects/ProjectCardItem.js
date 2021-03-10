/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function ProjectCardItem(props) {
  const project = {
    title: "Some Project Title",
    techStack: ["MongoDB", "Express", "React", "Node"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo cupiditate soluta laudantium inventore eos beatae similique eligendi quasi at consectetur veritatis fugit, earum, laboriosam, incidunt nobis debitis aliquid nihil.",
  };
  return (
    <div
      sx={{
        fontFamily: "main",
        width: "100%",
        border: "2px double #333",
        display: "grid",
        gridTemplate: "3rem 2rem repeat(8,3rem) / repeat(10,1fr)",
      }}
    >
      <div sx={{ gridArea: "2 / 2 / 3 / 10" }}>
        <h1
          sx={{
            margin: 0,
            padding: 0,
            fontWeight: 800,
            textTransform: "uppercase",
            fontSize: "1.5rem",
          }}
        >
          {project.title}
        </h1>
      </div>
      <div sx={{ gridArea: "3 / 5 / 10 / 10", backgroundColor: "#DDD" }}></div>
      <div sx={{ gridArea: "7 / 2 / 10 / 6", border: "2px solid blue" }}>
        {project.description}
      </div>
      <div sx={{ gridArea: "5 / 2 / 6 / 5", border: "2px solid green" }}>
        {project.techStack.map((tech, index) => {
          return (
            <span>
              {tech}
              {index !== project.techStack.length - 1 && ", "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
