/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import gsap from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";
import theme from "../../theme";

export default function MenuIcon(props) {
  const { showMenu, setShowMenu } = props;
  const { white } = theme.colors;
  let tl = useRef(gsap.timeline());

  useEffect(() => {
    showMenu
      ? tl.current
          .to("#topLine", {
            rotation: 45,
            duration: 0.5,
            attr: { d: "M1.5 1.5H43" },
          })
          .to("#middleLine", { duration: 0.5, attr: { d: "M16 16H16" } }, "<")
          .to(
            "#bottomLine",
            { rotation: -45, duration: 0.5, attr: { d: "M42 30.5H1.5" } },
            "<"
          )
      : tl.current
          .to("#topLine", {
            rotation: 0,
            duration: 0.5,
            attr: { d: "M32 1.5H1.5" },
          })
          .to("#middleLine", { duration: 0.5, attr: { d: "M1.5 16H32" } }, "<")
          .to(
            "#bottomLine",
            { rotation: 0, duration: 0.5, attr: { d: "M1.5 30.5H32" } },
            "<"
          );
  }, [showMenu]);

  return (
    <button
      sx={{
        border: "none",
        backgroundColor: "inherit",
      }}
      onClick={() => setShowMenu(!showMenu)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 36 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path id="topLine" d="M1.5 1.5H32" stroke={white} strokeWidth="3.5" />
        <path id="middleLine" d="M1.5 16H32" stroke={white} strokeWidth="3.5" />
        <path
          id="bottomLine"
          d="M32 30.5H1.5"
          stroke={white}
          strokeWidth="3.5"
        />
      </svg>
    </button>
  );
}
