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
        height: "75vh",
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
        <div
          sx={{
            gridArea: "2 / 1 / 3 / 11",
            display: "flex",
            alignItems: "center",
            visibility: "hidden",
          }}
          ref={(el) => (title = el)}
        >
          <h1
            sx={{
              margin: 0,
              padding: 0,
              fontWeight: 600,
              textTransform: "uppercase",
              fontSize: "2rem",
            }}
          >
            {project.title}
          </h1>
          <div
            sx={{ border: "0.5px dashed blue", width: "30%", ml: "2rem" }}
          ></div>
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
              sx={{
                width: "100%",
                border: "2px solid #DDD",
                boxShadow: "0px 2px 5px 2px #BBB",
              }}
            ></img>
          )}
        </div>
        <div
          ref={(el) => (description = el)}
          sx={{ gridArea: alt ? "4 / 6 / 8 / 11" : "4 / 1 / 8 / 6" }}
        >
          <p
            sx={{
              m: 0,
              p: 1,
              fontWeight: 300,
              backgroundColor: "primary",
              color: "white",
              textAlign: "justify",
              fontSize: "1.2rem",
              border: "0.5px solid #EEE",
              boxShadow: "0px 2px 5px 2px #BBB",
            }}
          >
            {project.description}
          </p>
        </div>
        <div
          ref={(el) => (tech = el)}
          sx={{
            gridArea: alt ? "3 / 7 / 4 / 11" : "3 / 1 / 4 / 5",
            display: "flex",
            alignItems: "center",
            fontFamily: "secondary",
            fontSize: "0.8rem",
            // color: "secondary",
          }}
        >
          {project.techStack.map((tech, index) => {
            return (
              <span key={tech} sx={{ pr: "0.5rem" }}>
                {tech}
                {index !== project.techStack.length - 1 && ","}
              </span>
            );
          })}
        </div>
        <div
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            gridArea: alt ? "9 / 7 / 10 / 11" : "9 / 6 / 10 / 11",
          }}
        >
          <div
            sx={{ border: "0.5px dashed blue", width: "100%", ml: "2rem" }}
          ></div>
          <div>
            <a href="#" sx={{ pl: "0.5rem" }}>
              WebLink
            </a>
            <a href="#" sx={{ pl: "0.5rem" }}>
              GitLink
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
