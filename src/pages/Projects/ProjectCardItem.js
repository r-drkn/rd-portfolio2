/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { jsx } from "theme-ui";
import { projectsAnimate } from "./projectsAnimate.js";
import gsap from "gsap";
import theme from "../../theme";
import rob from "../../images/rob.svg";

export default function ProjectCardItem(props) {
  const { project, alt } = props;
  let tl = useRef(gsap.timeline());
  let title = useRef(null);
  let image = useRef(null);
  let description = useRef(null);
  let tech = useRef(null);

  let { primary, text, white } = theme.colors;
  const { projectsReady } = props;
  console.log(projectsReady);

  useEffect(() => {
    // remove spaces to give each item unique trigger from classname
    projectsAnimate.natural.scrollTrigger.trigger =
      "." + project.title.replace(/\s+/g, "");
    projectsAnimate.alt.scrollTrigger.trigger =
      "." + project.title.replace(/\s+/g, "");

    title.style.visibility = "visible";
    image.style.visibility = "visible";

    tl.current
      .from(
        title,
        alt ? projectsAnimate.alt : projectsAnimate.natural,
        "forwards"
      )
      .from(image, alt ? projectsAnimate.alt : projectsAnimate.natural)
      .from(description, alt ? projectsAnimate.natural : projectsAnimate.alt)
      .from(tech, alt ? projectsAnimate.natural : projectsAnimate.alt);
  }, [project.title, alt, projectsReady]);

  return (
    <div
      className={project.title.replace(/\s+/g, "")}
      sx={{
        height: "75vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        my: "3rem",
        p: "1rem",
      }}
    >
      <div
        sx={{
          fontFamily: "primary",
          width: "100%",
          display: "grid",
          gridTemplate: "repeat(10,2.5rem) / repeat(10,1fr)",
        }}
      >
        <div
          sx={{
            gridArea: "1 / 1 / 2 / 11",
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
              letterSpacing: "2px",
            }}
          >
            {project.title}
          </h1>
          <div
            sx={{ border: `0.5px dashed ${white}`, width: "30%", ml: "2rem" }}
          ></div>
        </div>
        <div
          ref={(el) => (image = el)}
          sx={{
            gridArea: alt ? "2 / 1 / 11 / 7" : "2 / 5 / 10 / 12",
            px: "1rem",
          }}
        >
          {project.image && (
            <img
              src={project.image}
              alt="Catalog Website Preview"
              sx={{
                boxSizing: "border-box",
                width: "100%",
                height: "100%",
                border: `2px solid ${primary}`,
                borderRadius: "1rem",
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
              p: "1rem",
              fontWeight: 300,
              backgroundColor: "primary",
              color: "white",
              textAlign: "justify",
              fontSize: "1.2rem",
              borderRadius: "1rem",
              // border: "0.5px solid #EEE",
              // boxShadow: "0px 2px 5px 2px #BBB",
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
            fontFamily: "code",
            fontSize: "0.8rem",
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
            gridArea: alt ? "11 / 7 / 12 / 11" : "10 / 6 / 11 / 11",
          }}
        >
          <div
            sx={{
              border: `0.5px dashed ${white}`,
              width: "100%",
              ml: "2rem",
            }}
          ></div>
          <div>
            <a href="#" sx={{ pl: "0.5rem", color: "text" }}>
              WebLink
            </a>
            <a href="#" sx={{ pl: "0.5rem", color: "text" }}>
              GitLink
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
