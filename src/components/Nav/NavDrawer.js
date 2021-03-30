/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import React, { useEffect } from "react";
import gsap from "gsap";

export default function NavDrawer(props) {
  const { children, showMenu } = props;

  useEffect(() => {
    showMenu
      ? gsap.to(".navDrawer", { x: "100%", ease: "ease" })
      : gsap.to(".navDrawer", { x: "-100%", ease: "ease" });
  }, [showMenu]);

  return (
    <div
      className="navDrawer"
      sx={{
        boxSizing: "border-box",
        position: "fixed",
        top: "10vh",
        left: "-100vw",
        width: "100vw",
        height: "90vh",
        backgroundColor: "rgba(003, 025, 038, 0.9)",
      }}
    >
      <ul
        sx={{
          m: 0,
          p: 0,
          pt: "1rem",
          listStyle: "none",
          letterSpacing: "4px",
          color: "text",
          position: "relative",
          fontSize: "2.5rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {children}
      </ul>
    </div>
  );
}
