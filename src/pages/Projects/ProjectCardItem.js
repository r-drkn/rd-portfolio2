/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import { projectsAnimate } from "./projectsAnimate.js";
import gsap from "gsap";
import theme from "../../theme";

export default function ProjectCardItem(props) {
  const { project, alt, hidden } = props;
  const [showProject, setShowProject] = useState(hidden);
  const { white } = theme.colors;
  let tl = useRef(gsap.timeline());
  let title = useRef(null);
  let image = useRef(null);
  let description = useRef(null);
  let tech = useRef(null);

  useEffect(() => {
    // remove spaces to give each item unique trigger from classname
    projectsAnimate.natural.scrollTrigger.trigger =
      "." + project.title.replace(/\s+/g, "");
    projectsAnimate.alt.scrollTrigger.trigger =
      "." + project.title.replace(/\s+/g, "");

    if (showProject) {
      title.style.visibility = "visible";
      image.style.visibility = "visible";

      tl.current
        .from(title, projectsAnimate.title, "forwards")
        .from(image, alt ? projectsAnimate.alt : projectsAnimate.natural)
        .from(description, alt ? projectsAnimate.natural : projectsAnimate.alt)
        .from(tech, alt ? projectsAnimate.natural : projectsAnimate.alt);
    } else {
      tl.current.from(title, projectsAnimate.title, "forwards");
    }
  }, [project.title, alt, showProject]);

  return (
    <div
      className={project.title.replace(/\s+/g, "")}
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        mt: "2rem",
        mb: ["6rem", "2rem"],
        p: "1rem",
      }}
    >
      {showProject ? (
        <>
          <div
            sx={{
              p: "1rem",
              borderRadius: "0.5rem",
              fontFamily: "primary",
              width: "100%",
              display: "grid",
              gridTemplate: [
                "repeat(15,2rem) / repeat(10,1fr)",
                "4rem repeat(9,2rem) / repeat(10,1fr)",
              ],
            }}
          >
            <div
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                visibility: "hidden",
                gridArea: "1 / 1 / 2 / 11",
              }}
              ref={(el) => (title = el)}
            >
              <h1
                sx={{
                  margin: 0,
                  padding: 0,
                  fontWeight: 400,
                  textTransform: "uppercase",
                  fontSize: ["2rem", "2rem"],
                  letterSpacing: "2px",
                }}
              >
                {project.title}
              </h1>
              <button
                sx={{
                  color: "text",
                  backgroundColor: "background",
                  border: `2px solid ${white}`,
                  p: " 0.5rem 1rem",
                }}
                onClick={() => setShowProject(!showProject)}
              >
                {showProject ? "hide" : "show"}
              </button>
            </div>
            <div
              ref={(el) => (tech = el)}
              sx={{
                gridArea: alt
                  ? ["2 / 1 / 3 / 10", "3 / 7 / 4 / 11"]
                  : ["2 / 2 / 3 / 11", "3 / 1 / 4 / 5"],
                display: "flex",
                alignItems: "center",
                fontFamily: "code",
                fontSize: "0.8rem",
              }}
            >
              {project.techStack.map((tech, index) => {
                return (
                  <span key={tech} sx={{ pr: "0.2rem" }}>
                    {tech}
                    {index !== project.techStack.length - 1 && ","}
                  </span>
                );
              })}
            </div>
            <div
              ref={(el) => (image = el)}
              sx={{
                gridArea: alt
                  ? ["3 / 1 / 10 / 11", "2 / 1 / 11 / 7"]
                  : ["3 / 1 / 10 / 11", "2 / 5 / 10 / 12"],
                pl: alt ? "0rem" : "1rem",
                pr: alt ? "1rem" : "0rem",
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
                  }}
                ></img>
              )}
            </div>
            <div
              ref={(el) => (description = el)}
              sx={{
                gridArea: alt
                  ? ["11 / 1 / 17 / 10", "4 / 7 / 8 / 11"]
                  : ["11 / 2 / 17 / 11", "4 / 1 / 11 / 5"],
              }}
            >
              <p
                sx={{
                  m: 0,
                  p: "1rem",
                  fontWeight: 300,
                  backgroundColor: "primary",
                  color: "white",
                  textAlign: "justify",
                  fontSize: ["1rem", "1.2rem"],
                }}
              >
                {project.description}
              </p>
              <div
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pt: "1rem",
                }}
              >
                <span sx={{ pl: "0.5rem", color: "text" }}>WebLink</span>
                <span sx={{ pl: "0.5rem", color: "text" }}>GitLink</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            visibility: "hidden",
            pr: "1rem",
            pl: "1rem",
            pt: "2rem",
          }}
          ref={(el) => (title = el)}
        >
          <h1
            sx={{
              margin: 0,
              padding: 0,
              fontWeight: 400,
              textTransform: "uppercase",
              fontSize: ["2rem", "2rem"],
              letterSpacing: "2px",
              fontFamily: "primary",
            }}
          >
            {project.title}
          </h1>
          <button
            sx={{
              color: "text",
              backgroundColor: "background",
              border: `2px solid ${white}`,
              p: [" 0.5rem 1rem", " 0.5rem 1rem"],
              m: 0,
            }}
            onClick={() => setShowProject(!showProject)}
          >
            {showProject ? "hide" : "show"}
          </button>
        </div>
      )}
    </div>
  );
}
