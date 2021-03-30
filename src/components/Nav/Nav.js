/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef, useState } from "react";
import { jsx } from "theme-ui";
import theme from "../../theme.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";

gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState("home");
  const { primary } = theme.colors;
  const navItems = ["home", "about", "projects", "contact"];
  const isMobile = useMediaQuery(theme.mobile);
  const isTablet = useMediaQuery(theme.tablet);

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
          p: "0.5rem 1rem",
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
            {isMobile ? (
              showMenu ? (
                <>
                  <button
                    sx={{
                      width: "1rem",
                      height: "1rem",
                      border: "3px solid red",
                    }}
                    onClick={() => setShowMenu(false)}
                  ></button>
                  <NavDrawer>
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
                  </NavDrawer>
                </>
              ) : (
                <button
                  sx={{
                    width: "1rem",
                    height: "1rem",
                    border: "3px solid purple",
                  }}
                  onClick={() => setShowMenu(true)}
                ></button>
              )
            ) : (
              navItems.map((navItem) => {
                return (
                  <NavItem
                    item={navItem}
                    current={current}
                    setCurrent={setCurrent}
                    key={navItem}
                  />
                );
              })
            )}
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
