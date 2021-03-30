/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { jsx } from "theme-ui";
import theme from "../../theme.js";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState("home");
  const { primary, white } = theme.colors;
  const navItems = ["home", "about", "projects", "contact"];
  let tl = useRef(gsap.timeline());
  let path1 = useRef(null);

  const isMobile = useMediaQuery(theme.mobile);
  const isTablet = useMediaQuery(theme.tablet);

  useEffect(() => {
    showMenu
      ? tl.current
          .to("#topLine", {
            rotation: 45,
            duration: 0.5,
            attr: { d: "M0 1.5H42" },
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
    <nav
      sx={{
        fontFamily: "secondary",
        width: "100%",
        display: "flex",
        position: "fixed",
        zIndex: "9999",
        height: "10vh",
      }}
    >
      <div
        sx={{
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          p: "0.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(003, 025, 038, 0.9)",
        }}
      >
        <button
          sx={{
            fontSize: "2rem",
            backgroundColor: "inherit",
            border: "none",
            color: "white",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          RB:DK
        </button>
        <div>
          {isMobile ? (
            <>
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
                  <path
                    id="topLine"
                    d="M1.5 1.5H32"
                    stroke={white}
                    strokeWidth="3"
                  />
                  <path
                    id="middleLine"
                    d="M1.5 16H32"
                    stroke={white}
                    stroke-width="3"
                  />
                  <path
                    id="bottomLine"
                    d="M32 30.5H1.5"
                    stroke={white}
                    stroke-width="3"
                  />
                </svg>
              </button>
              <NavDrawer showMenu={showMenu} current={current}>
                {navItems.map((navItem) => {
                  return (
                    <NavItem
                      item={navItem}
                      current={current}
                      setCurrent={setCurrent}
                      key={navItem}
                      setShowMenu={setShowMenu}
                    />
                  );
                })}
              </NavDrawer>
            </>
          ) : (
            <>
              <ul
                sx={{
                  m: 0,
                  p: 0,
                  listStyle: "none",
                  letterSpacing: "4px",
                  color: "text",
                  display: "flex",
                  position: "relative",
                  fontSize: "0.8rem",
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
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
