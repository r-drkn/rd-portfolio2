/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { NavLink } from "react-router-dom";

const NavItem = (props) => {
  const { item } = props;
  return (
    <li>
      <NavLink
        to={`/${item}`}
        sx={{
          color: "text",
          margin: "1rem",
          ":hover": {
            backgroundColor: "#333",
            color: "#EEE",
          },
        }}
      >
        {item.toUpperCase()}{" "}
      </NavLink>
    </li>
  );
};

export default function Nav() {
  return (
    <nav sx={{ position: "fixed", top: 0, right: 0 }}>
      <ul
        sx={{
          fontFamily: "main",
          listStyle: "none",
          letterSpacing: "4px",
          padding: "0.5rem 3rem",
          textAlign: "right",
          color: "text",
          li: {
            cursor: "pointer",
            paddingLeft: "1rem",
          },
        }}
      >
        <NavItem item="about" />
        <NavItem item="projects" />
        <NavItem item="contact" />
      </ul>
    </nav>
  );
}
