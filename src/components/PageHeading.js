import React, { useEffect, useRef } from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import theme from "../theme";

export default function PageHeading(props) {
  const { pageTitle } = props;
  let heading = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  let tl = useRef(gsap.timeline());
  const { text, background } = theme.colors;
  const { secondary } = theme.fonts;

  useEffect(() => {
    tl.current.from(heading, {
      scrollTrigger: {
        trigger: heading,
        start: "start 80%",
        end: "bottom 80%",
        scrub: 1,
        markers: true,
      },
      ease: "ease",
      duration: 1,
      autoAlpha: 0,
      xPercent: 100,
    });
  }, [background, text, pageTitle]);

  return (
    <div
      sx={{
        display: "flex",
        position: "relative",
        // justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        ref={(el) => (heading = el)}
        sx={{
          fontFamily: secondary,
          fontSize: "4rem",
          fontWeight: 800,
          letterSpacing: "1rem",
          pl: "0.5rem",
          color: "secondary",
          m: 0,
          mt: "0.5rem",
        }}
      >
        {pageTitle.toUpperCase()}
      </h1>
      <svg
        width="485"
        height="36"
        viewBox="0 0 485 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.55542 18.0131C24.5554 -1.98688 34.5554 -1.98688 32.5554 18.0131C30.5554 38.0131 40.5554 38.0131 62.5554 18.0131C84.5554 -1.98688 94.5554 -1.98688 92.5554 18.0131C90.5554 38.0131 100.555 38.0131 122.555 18.0131C144.555 -1.98688 154.555 -1.98688 152.555 18.0131C150.555 38.0131 160.555 38.0131 182.555 18.0131C204.555 -1.98688 214.555 -1.98688 212.555 18.0131C210.555 38.0131 220.555 38.0131 242.555 18.0131C264.555 -1.98688 274.555 -1.98688 272.555 18.0131C270.555 38.0131 280.555 38.0131 302.555 18.0131C324.555 -1.98688 334.555 -1.98688 332.555 18.0131C330.555 38.0131 340.555 38.0131 362.555 18.0131C384.555 -1.98688 394.555 -1.98688 392.555 18.0131C390.555 38.0131 400.555 38.0131 422.555 18.0131C444.555 -1.98688 454.555 -1.98688 452.555 18.0131C450.555 38.0131 460.555 38.0131 482.555 18.0131"
          stroke="#4C75F2"
          stroke-width="5"
        />
      </svg>

      {/* <svg
        sx={{ position: "absolute", top: -50, left: "20%", zIndex: "-1" }}
        width="462"
        height="197"
        viewBox="0 0 462 197"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.90538 109.651C65.9655 63.769 79.7356 62.3458 45.2155 105.381C10.6955 148.416 24.4656 146.993 86.5257 101.111C148.586 55.2296 254.02 -25.0353 219.5 18C184.98 61.0353 107.086 138.454 169.146 92.572C231.206 46.6902 192.02 96.4647 157.5 139.5C122.98 182.535 217.94 100.026 280 54.1446C342.06 8.26287 214.02 139.465 179.5 182.5C144.98 225.535 267.94 108.566 330 62.684C392.06 16.8023 350.52 84.4647 316 127.5C281.48 170.535 253.94 211.382 316 165.5C378.06 119.618 458.317 62.684 458.317 62.684"
          stroke="#4C75F2"
          stroke-width="5"
        />
      </svg> */}
    </div>
  );
}
