/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { jsx } from "theme-ui";
import theme from "../theme.js";
import gsap from "gsap";

const NavItem = (props) => {
  const { item, current, setCurrent } = props;
  const { primary, secondary, white } = theme.colors;
  let domElement = useRef(null);

  return (
    <li>
      <a
        ref={(el) => (domElement = el)}
        href={`/#${item === "home" ? "" : item}`}
        sx={{
          display: "block",
          m: "0.5rem 1rem",
          textDecoration: "none",
          color: white,
        }}
        onClick={() => setCurrent(item)}
        onMouseEnter={() => {
          gsap.to(".line", {
            x: domElement.offsetLeft,
            width: domElement.clientWidth,
            autoAlpha: 1,
          });
          gsap.to(domElement, {
            color: secondary,
          });
        }}
        onMouseLeave={() => {
          if (item !== current) {
            gsap.to(".line", {
              autoAlpha: 0,
            });
          }
          gsap.to(domElement, {
            color: white,
          });
        }}
      >
        {item.toUpperCase()}
      </a>
    </li>
  );
};

export default function Nav() {
  const [current, setCurrent] = useState("home");
  const { primary } = theme.colors;
  const navItems = ["home", "about", "projects", "contact"];

  return (
    <nav
      sx={{
        fontFamily: "secondary",
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
          p: "1rem 1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(003, 025, 038, 0.7)",
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
        <div>
          <ul
            sx={{
              m: 0,
              p: 0,
              listStyle: "none",
              letterSpacing: "4px",
              color: "text",
              display: "flex",
              position: "relative",
            }}
          >
            {navItems.map((navItem) => {
              return (
                <NavItem
                  item={navItem}
                  current={current}
                  setCurrent={setCurrent}
                  key={navItem}
                />
              );
            })}
          </ul>
          <div
            className="line"
            sx={{
              opacity: "0",
              width: "100%",
              border: `2px solid ${primary}`,
            }}
          ></div>
        </div>
      </div>
    </nav>
  );
}
