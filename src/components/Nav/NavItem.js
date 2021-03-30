/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useRef } from "react";
import { jsx } from "theme-ui";
import theme from "../../theme.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function NavItem(props) {
  const { item, current, setCurrent, setShowMenu } = props;
  const { secondary, white } = theme.colors;
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
        onClick={() => {
          setCurrent(item);
          setShowMenu(false);
        }}
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
