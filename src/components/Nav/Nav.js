/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { jsx } from "theme-ui";
import theme from "../../theme.js";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";
import MenuIcon from "./MenuIcon.js";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState("home");
  let nav = useRef(null);
  const { primary } = theme.colors;
  const navItems = ["home", "about", "projects", "contact"];

  const isMobile = useMediaQuery(theme.mobile);
  const isTablet = useMediaQuery(theme.tablet);

  useEffect(() => {
    const showNav = gsap
      .from(nav, {
        yPercent: -100,
        paused: true,
        duration: 0.4,
        ease: "ease",
        autoAlpha: 0,
      })
      .progress(1);
    ScrollTrigger.create({
      start: "top top",
      end: 99999,
      onUpdate: (self) => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });
  }, []);

  return (
    <nav
      ref={(el) => (nav = el)}
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
          backgroundColor: ["backgroundOpaque"],
        }}
      >
        <button
          sx={{
            fontSize: "2rem",
            backgroundColor: "rgba(003, 025, 038, 0)",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          RB:DK
        </button>
        <div>
          {isMobile || isTablet ? (
            <>
              <MenuIcon showMenu={showMenu} setShowMenu={setShowMenu} />
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
                      setShowMenu={setShowMenu}
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
