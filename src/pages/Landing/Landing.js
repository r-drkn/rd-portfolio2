/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import { landingAnimate } from "./landingAnimate.js";
import gsap from "gsap";
import theme from "../../theme.js";
import selfie from "../../images/selfie-test.png";
import { useMediaQuery } from "react-responsive";

export default function Landing(props) {
  let heading = useRef(null);
  let byline = useRef(null);
  let description = useRef(null);
  let tl = useRef(gsap.timeline());
  const { primary } = theme.colors;
  const isMobile = useMediaQuery(theme.mobile);

  useEffect(() => {
    heading.style.visibility = "visible";
    byline.style.visibility = "visible";
    description.style.visibility = "visible";
    tl.current
      .from(heading, landingAnimate.heading)
      .from(byline, landingAnimate.byline)
      .from(description, landingAnimate.description)
      .fromTo(".meSVG", { autoAlpha: 0 }, { autoAlpha: 1, duration: 1 });
  }, []);

  return (
    <div
      sx={{
        width: "100%",
        maxWidth: "900px",
        height: "90vh",
        display: "grid",
        gridTemplate: "repeat(9, 1fr) / repeat(16, 1fr)",
        flexDirection: "column",
        fontFamily: "primary",
        letterSpacing: "2px",
        p: "1rem",
        pb: "2rem",
      }}
    >
      <svg
        width="1280"
        height="549"
        viewBox="0 0 1280 549"
        xmlns="http://www.w3.org/2000/svg"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: -9999,
        }}
      >
        <path d="M-5 0H1285V273H-5V0Z" fill={primary} />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 388L15 395C30 401 61 414 91 433C122 452 152 478 183 491C213 503 244 503 274 484C305 465 335 427 366 401C396 375 427 363 457 350C488 337 518 324 549 331C579 337 610 363 640 401C670 439 701 491 731 478C762 465 792 388 823 375C853 363 884 414 914 465C945 516 975 567 1006 542C1036 516 1067 414 1097 388C1128 363 1158 414 1189 433C1219 452 1250 439 1265 433L1280 427V273H1265C1250 273 1219 273 1189 273C1158 273 1128 273 1097 273C1067 273 1036 273 1006 273C975 273 945 273 914 273C884 273 853 273 823 273C792 273 762 273 731 273C701 273 670 273 640 273C610 273 579 273 549 273C518 273 488 273 457 273C427 273 396 273 366 273C335 273 305 273 274 273C244 273 213 273 183 273C152 273 122 273 91 273C61 273 30 273 15 273H0V388Z"
          fill={primary}
        />
      </svg>

      <h1
        className="heading"
        ref={(el) => (heading = el)}
        sx={{
          visibility: "hidden",
          fontSize: ["3rem", "5rem"],
          gridArea: ["1 / 1 / 4 / 12", "1 / 1 / 4 / 10"],
          padding: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          fontWeight: "800",
          color: "secondary",
        }}
      >
        HI, I'M ROB.
      </h1>
      <h2
        ref={(el) => (byline = el)}
        sx={{
          visibility: "hidden",
          fontSize: ["1.5rem", " 2.5rem"],
          padding: 0,
          gridArea: "4/ 1 / 6 / 11",
          fontWeight: "600",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          lineHeight: "4rem",
        }}
      >
        <span sx={{ fontSize: ["2rem", "3rem"] }}>I make things</span> <br />
        on the internet.
      </h2>

      <div
        ref={(el) => (description = el)}
        sx={{
          visibility: "hidden",
          gridArea: ["7 / 1 / 8 / 12 ", "7 / 1 / 8 / 8 "],
          fontSize: "1.2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p
          sx={{
            m: 0,
            color: "third",
            lineHeight: "2rem",
          }}
        >
          I'm a Junior Web Developer living in Brisbane with a particular
          interest in React and Front End development.
        </p>
      </div>
      {!isMobile && (
        <div
          sx={{
            gridArea: "3 / 11 / 7/ 17 ",
            backgroundColor: "secondary",
            padding: "0",
            display: "flex",
            borderRadius: "50%",
            border: "5px solid red",
          }}
        >
          <img
            src={selfie}
            alt="Robert Dirken"
            sx={{
              width: "100%",
              height: "100%",
              p: "-1rem",
              m: 0,
              boxShadow: "0px 2px 2px 2px #F21365",
              borderRadius: "50%",
            }}
          ></img>
        </div>
      )}
      {/* <LookingForWork gridArea="6 / 13 / 8 / 16 " /> */}
    </div>
  );
}
