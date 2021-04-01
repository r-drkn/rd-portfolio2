/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React, { useRef } from "react";
import { useState } from "react";
import { jsx } from "theme-ui";
import theme from "../../theme.js";
import { useMediaQuery } from "react-responsive";
import NavDrawer from "./NavDrawer";
import NavItem from "./NavItem";
import MenuIcon from "./MenuIcon.js";
// import useDebouncedCallback from "../../hooks/useDebouncedCallback";
import gsap from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [current, setCurrent] = useState("home");
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [showNav, setShowNav] = useState(true);
  let nav = useRef(null);
  const { primary } = theme.colors;
  const navItems = ["home", "about", "projects", "contact"];

  const isMobile = useMediaQuery(theme.mobile);

  // useEffect(() => {
  //   gsap.to(nav, {
  //     yPercent: -100,
  //     ease: "none",
  //     scrollTrigger: {
  //       start: "center center",
  //       end: "center center",
  //       markers: true,
  //       toggleActions: "play none none reverse",
  //     },
  //   });
  // }, []);

  // const handleScroll = useDebouncedCallback(() => {
  //   const currentScrollPos = window.pageYOffset;
  //   console.log(prevScrollPos - currentScrollPos);
  //   setShowNav(
  //     (prevScrollPos > currentScrollPos &&
  //       prevScrollPos - currentScrollPos > 70) ||
  //       currentScrollPos < 30
  //   );
  //   setPrevScrollPos(currentScrollPos);
  // }, 50);

  // useEffect(() => {
  //   if (isMobile) {
  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }
  // }, [prevScrollPos, showNav, handleScroll, isMobile]);

  // useEffect(() => {
  //   showNav
  //     ? gsap.to(nav, { yPercent: 0, duration: 1 })
  //     : gsap.to(nav, {
  //         yPercent: -101,
  //         duration: 1,
  //       });
  // });

  return (
    // showNav && (
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
    // )
  );
}
