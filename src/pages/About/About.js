/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import theme from "../../theme.js";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let aboutHeader = useRef(null);
  const { text } = theme;

  useEffect(() => {
    gsap.from(".aboutItems", {
      scrollTrigger: {
        trigger: aboutHeader,
        start: "bottom 50%",
      },
      duration: 1,
      autoAlpha: 0,
      y: 50,
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      id="about"
      sx={{
        fontFamily: "primary",
        maxWidth: "900px",
        p: "1rem",
        pt: "10vh",
      }}
    >
      <div ref={(el) => (aboutHeader = el)}>
        <PageHeading pageTitle="A bit about me:" />
      </div>
      <div
        sx={{
          width: "100%",
          fontSize: "1.2rem",
          textAlign: "justify",
          padding: [null, "2rem"],
          p: {
            fontWeight: "300",
          },
        }}
      >
        <p className="aboutItems">
          I’m currently in the process of building out my portfolio with small
          jobs and personal projects. My goal throughout this is to not only
          showcase my current skills but to learn new skills while strengthening
          any weaknesses.
        </p>
        <p className="aboutItems">
          Tech I’ve worked with includes: <br />
          React, Node, Express, MongoDB, SQL, Ruby/Rails, GSAP, TailwindCSS,
          MaterialUI, ThemeUI,
        </p>
        <p className="aboutItems">
          Tech I’m actively incorporating into my skill set: <br />
          Next.JS, Typescript, A11y
        </p>
        <p className="aboutItems">
          When I’m away from the keyboard I enjoy cooking elaborate meals for
          friends, electronic music and watching the Chicago Bulls fail to meet
          my expectations despite years of my love and devotion.
        </p>
      </div>
    </div>
  );
}
