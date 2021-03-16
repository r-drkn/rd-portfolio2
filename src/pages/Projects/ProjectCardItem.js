/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import { projectsAnimate } from "./projectsAnimate.js";
import gsap from "gsap";

export default function ProjectCardItem(props) {
  const { project, alt } = props;
  let tl = useRef(gsap.timeline());
  let title = useRef(null);
  let image = useRef(null);
  let description = useRef(null);
  let tech = useRef(null);

  useEffect(() => {
    // give each item unique trigger from classname
    projectsAnimate.title.scrollTrigger.trigger =
      "." + project.title.replace(/\s+/g, "");
    projectsAnimate.altTitle.scrollTrigger.trigger =
      "." + project.title.replace(/\s+/g, "");

    title.style.visibility = "visible";
    image.style.visibility = "visible";

    tl.current
      .from(
        title,
        alt ? projectsAnimate.altTitle : projectsAnimate.title,
        "forwards"
      )
      .from(image, alt ? projectsAnimate.altTitle : projectsAnimate.title)
      .from(description, alt ? projectsAnimate.title : projectsAnimate.altTitle)
      .from(tech, alt ? projectsAnimate.title : projectsAnimate.altTitle);
  }, [project.title, alt]);

  return (
    <div
      className={project.title.replace(/\s+/g, "")}
      sx={{
        my: "50vh",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          fontFamily: "main",
          width: "100%",
          display: "grid",
          gridTemplate: "repeat(10,2.5rem) / repeat(10,5rem)",
          padding: "2rem",
        }}
      >
        <div sx={{ gridArea: "2 / 1 / 3 / 10" }}>
          <h1
            ref={(el) => (title = el)}
            sx={{
              visibility: "hidden",
              margin: 0,
              padding: 0,
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "1.5rem",
            }}
          >
            {project.title}
          </h1>
        </div>

        <div
          ref={(el) => (image = el)}
          sx={{
            gridArea: alt ? "3 / 1 / 11 / 7" : "3 / 5 / 11 / 11",
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt="Catalog Website Preview"
              sx={{ width: "100%" }}
            ></img>
          )}
        </div>
        <div
          ref={(el) => (description = el)}
          sx={{
            gridArea: alt ? "4 / 6 / 8 / 11" : "4 / 1 / 8 / 6",
            textAlign: "justify",
            fontSize: "1.2rem",
            backgroundColor: "blue",
            padding: "0.5rem",
          }}
        >
          {project.description}
        </div>
        <div
          ref={(el) => (tech = el)}
          sx={{
            gridArea: alt ? "8 / 7 / 9 / 11" : "8 / 1 / 9 / 5",
            display: "flex",
            justifyContent: "space-evenly",
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
    </div>
  );
}
