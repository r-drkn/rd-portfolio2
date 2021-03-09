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
          backgroundColor: "#eee",

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
      }}
    >
      <div
        sx={{
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "#EEEEEE",
          backgroundColor: "rgba(238, 238, 238, 0.7)",
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
            li: {
              cursor: "pointer",
              paddingLeft: "1rem",
              margin: "0.5rem",
              backgroundColor: "#eee",
            },
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
