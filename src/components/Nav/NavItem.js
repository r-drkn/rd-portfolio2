/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { jsx } from "theme-ui";
import theme from "../../theme.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";

gsap.registerPlugin(ScrollTrigger);

export default function NavItem(props) {
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
          fontSize: "0.8rem",
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
}
