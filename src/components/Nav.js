/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const { item } = props;
  return (
    <li>
      <a
        href={`/#${item}`}
        sx={{
          color: "text",
          cursor: "pointer",
          paddingLeft: "1rem",
          margin: "0.5rem",
          backgroundColor: "none",
          ":hover": {
            backgroundColor: "#333",
            color: "#EEE",
          },
        }}
      >
        {item.toUpperCase()}{" "}
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
          px: "1rem",
          py: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(220, 220, 220, 0.7)",
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
