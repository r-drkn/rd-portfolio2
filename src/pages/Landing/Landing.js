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
import { useMediaQuery } from "react-responsive";
import LandingImage from "./LandingImage.js";

export default function Landing(props) {
  let heading = useRef(null);
  let byline = useRef(null);
  let description = useRef(null);
  let squiggle = useRef(null);
  let tl = useRef(gsap.timeline());
  const isMobile = useMediaQuery(theme.mobile);

  useEffect(() => {
    heading.style.visibility = "visible";
    byline.style.visibility = "visible";
    description.style.visibility = "visible";
    tl.current
      .from(heading, landingAnimate.heading)
      .from(squiggle, landingAnimate.squiggle)
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
            I'm a Web Developer living in Brisbane.
          </p>
        </div>
        {!isMobile && (
          <div
            sx={{
              gridArea: "2 / 9 / 9 / 17 ",
              backgroundColor: "inherit",
              padding: "0",
              display: "flex",
              borderRadius: "50%",
            }}
          >
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 783 712"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                ref={(el) => (squiggle = el)}
                d="M332.774 98.6651C570.526 56.0106 572.955 66.7239 340.063 130.805C38.5531 212.098 40.9827 222.812 347.352 162.945C654.077 104.648 656.507 115.361 354.641 195.085C127.535 256.464 129.964 267.178 361.93 227.225C593.595 185.95 596.025 196.664 369.219 259.365C45.5536 346.424 47.9833 357.138 376.507 291.505C705.548 228.147 707.977 238.86 383.796 323.645C3.02484 422.242 5.45447 432.956 391.085 355.784C776.927 279.545 779.357 290.258 398.374 387.924C96.2575 466.542 98.6872 477.256 405.663 420.064C712.388 361.767 714.818 372.481 412.952 452.204C187.866 513.088 190.296 523.801 420.241 484.344C649.878 443.53 652.307 454.243 427.53 516.484C27.2042 622.912 29.6339 633.625 434.819 548.624C840.947 467.784 843.377 478.497 442.108 580.764C113.65 665.499 116.079 676.213 449.396 612.904"
                stroke="#F2F2F2"
                strokeWidth="50"
                strokeLinecap="round"
              />
              <LandingImage />
            </svg>
          </div>
        )}
      </div>
    </MainContainer>
  );
}
