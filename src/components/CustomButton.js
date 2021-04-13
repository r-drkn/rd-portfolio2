/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
// eslint-disable-next-line
import React, { useEffect, useRef, useState } from "react";
import theme from "../theme";
import gsap from "gsap";

export default function CustomButton(props) {
  const { showProject, setShowProject } = props;
  const [hover, setHover] = useState(false);
  const { white } = theme.colors;
  let button = useRef(null);

  useEffect(() => {
    hover
      ? gsap.to(button, {
          backgroundColor: theme.colors.secondary,
          duration: 0.3,
        })
      : gsap.to(button, {
          backgroundColor: theme.colors.background,
          duration: 0.2,
        });
  }, [hover]);

  return (
    <button
      ref={(el) => (button = el)}
      sx={{
        color: "text",
        border: `2px solid ${white}`,
        p: [" 0.5rem 1rem", " 0.5rem 1rem"],
        m: 0,
      }}
      onClick={() => setShowProject(!showProject)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {showProject ? "HIDE" : "SHOW"}
    </button>
  );
}
