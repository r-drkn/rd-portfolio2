/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

const NavItem = (props) => {
  const { item } = props;
  return (
    <li>
      <a
        href={`/#${item}`}
        sx={{
          color: "text",
          m: "0.5rem 0.5rem",
          // ml: "1rem",
          ":hover": {
            backgroundColor: "blue",
            color: "#EEE",
          },
        }}
      >
        {item.toUpperCase()}
      </a>
    </li>
  );
};

export default function Nav() {
  return (
    <nav
      sx={{
        fontFamily: "main",
        width: "100%",
        display: "flex",
        position: "fixed",
        zIndex: "9999",
      }}
    >
      <div
        sx={{
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          p: "0.5rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "rgba(220, 220, 220, 0.7)",
        }}
      >
        <div
          sx={{ fontSize: "2rem" }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          RB:DK
        </div>
        <ul
          sx={{
            listStyle: "none",
            letterSpacing: "4px",
            textAlign: "right",
            color: "text",
            display: "flex",
            backgroundColor: "none",
          }}
        >
          <NavItem item="about" />
          <NavItem item="projects" />
          <NavItem item="contact" />
        </ul>
      </div>
    </nav>
  );
}
