/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let aboutHeader = useRef(null);

  useEffect(() => {
    gsap.from(document.querySelectorAll("p"), {
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
      sx={{ fontFamily: "primary", height: "100vh", p: "1rem", pt: "10vh" }}
    >
      <div ref={(el) => (aboutHeader = el)}>
        <PageHeading pageTitle="ABOUT" />
      </div>
      <div
        sx={{
          width: "100%",
          p: "2rem",
          fontSize: "1.2rem",
          textAlign: "justify",
        }}
      >
        <p>
          I’m interested in balancing the opportunities of web user interface
          creation with the importance of building highly functional and
          accessible experiences.
        </p>
        <p>
          I’m currently in the process of building out my portfolio with small
          jobs and personal projects. My goal throughout this is to not only
          showcase my current skills but to learn new skills while strengthening
          any weaknesses.
        </p>
        <p>
          When I’m away from the keyboard I enjoy cooking elaborate meals for
          friends, electronic music and watching the Chicago Bulls fail to meet
          my expectations despite years of my love and devotion.
        </p>
        <p>
          Tech I’ve worked with includes: <br />
          React, Node, Express, MongoDB, SQL, Ruby/Rails, GSAP, TailwindCSS,
          MaterialUI, ThemeUI,
        </p>
        <p>
          Tech I’m actively incorporating into my skill set: <br />
          Next.JS, Typescript, A11y
        </p>
      </div>
    </div>
  );
}
