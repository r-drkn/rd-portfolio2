/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import { landingAnimate } from "./landingAnimate.js";
import gsap from "gsap";
import theme from "../../theme.js";
import MainContainer from "../../components/MainContainer.js";
// import selfie from "../../images/selfie-test.png";
// import { useMediaQuery } from "react-responsive";

export default function Landing(props) {
  let heading = useRef(null);
  let byline = useRef(null);
  let description = useRef(null);
  let tl = useRef(gsap.timeline());
  const { primary } = theme.colors;
  // const isMobile = useMediaQuery(theme.mobile);

  useEffect(() => {
    heading.style.visibility = "visible";
    byline.style.visibility = "visible";
    description.style.visibility = "visible";
    tl.current
      .from(heading, landingAnimate.heading)
      .from(byline, landingAnimate.byline)
      .from(description, landingAnimate.description);
  }, []);

  return (
    <MainContainer>
      <div
        sx={{
          width: "100%",

          position: "relative",
          maxWidth: "900px",
          mx: "auto",
          display: "grid",
          gridTemplate: "repeat(10, 9vh) / repeat(16, 1fr)",
          fontFamily: "primary",
          letterSpacing: "2px",
          p: "2rem",
          pt: "5rem",
          pb: "2rem",
          overflowX: "hidden",
        }}
      >
        <h1
          className="heading"
          ref={(el) => (heading = el)}
          sx={{
            visibility: "hidden",
            fontSize: ["3rem", "5rem"],
            gridArea: ["1 / 1 / 4 / 16", "1 / 1 / 4 / 16"],
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
            gridArea: ["4/ 1 / 5 / 16", "5 / 1 / 6 / 16"],
            fontWeight: "600",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            lineHeight: "4rem",
          }}
        >
          <span sx={{ fontSize: ["2rem", "3rem"] }}>I make things</span>
          on the internet.
        </h2>

        <div
          ref={(el) => (description = el)}
          sx={{
            visibility: "hidden",
            gridArea: ["6 / 1 / 9 / 16 ", "7 / 1 / 10 / 9 "],
            fontSize: ["3vh", "3vh"],
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p
            sx={{
              m: 0,
              color: "third",
              lineHeight: ["1.5rem", "2rem"],
            }}
          >
            I'm a Junior Web Developer living in Brisbane with a particular
            interest in React and Front End development.
          </p>
        </div>
        {/* {!isMobile && (
        <div
          sx={{
            gridArea: "3 / 11 / 8/ 17 ",
            backgroundColor: "inherit",
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
              m: 0,
              boxShadow: "0px 2px 2px 2px #F21365",
              borderRadius: "50%",
            }}
          ></img>
        </div>
      )} */}
        {/* <LookingForWork gridArea="6 / 13 / 8 / 16 " /> */}
      </div>
    </MainContainer>
  );
}
