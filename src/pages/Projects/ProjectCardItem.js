/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function ProjectCardItem(props) {
  // const project = {
  //   title: "Some Project Title",
  //   techStack: ["MongoDB", "Express", "React", "Node"],
  //   description:
  //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quo cupiditate soluta laudantium inventore eos beatae similique eligendi quasi at consectetur veritatis fugit, earum, laboriosam, incidunt nobis debitis aliquid nihil.",
  // };
  const { project, alt } = props;

  return (
    <div
      sx={{
        fontFamily: "main",
        width: "100%",
        display: "grid",
        gridTemplate: "3rem 2rem repeat(8,3rem) / repeat(10,1fr)",
        padding: "3rem",
      }}
    >
      <div sx={{ gridArea: "2 / 1 / 3 / 10" }}>
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

      <div
        sx={{
          gridArea: alt ? "3 / 1 / 11 / 7" : "3 / 5 / 11 / 11",
          backgroundColor: "#DDD",
        }}
      ></div>
      <div
        sx={{
          gridArea: alt ? "4 / 6 / 7 / 11" : "4 / 1 / 7 / 6",
          border: "2px solid blue",
          textAlign: "justify",
          fontSize: "1.2rem",
        }}
      >
        {project.description}
      </div>
      <div
        sx={{
          gridArea: alt ? "8 / 7 / 9 / 11" : "8 / 1 / 9 / 5",
          border: "2px solid green",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {project.techStack.map((tech, index) => {
          return (
            <span key={tech}>
              {tech}
              {index !== project.techStack.length - 1 && ", "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
