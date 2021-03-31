/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let aboutHeader = useRef(null);

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
            lineHeight: "2rem",
          },
        }}
      >
        <p className="aboutItems">
          Hi I'm Robert Dirken. I'm a web developer living in Brisbane. I've
          recently finished a bootcamp at Coder Academy. Here I learned full
          stack web development in Ruby on Rails and the MERN stack.
        </p>
        <p className="aboutItems">
          I’m currently in the process of building out my portfolio with small
          jobs and personal projects. My goal throughout this is to not only
          showcase my current skills but to learn new skills and technologies
          along the way.
        </p>
        <p className="aboutItems">
          When I’m away from the keyboard I enjoy cooking elaborate meals for
          friends, electronic music and watching the Chicago Bulls fail to meet
          my expectations despite years of my love and devotion.
        </p>
        <p className="aboutItems">
          Tech I’ve worked with includes: <br />
          <div sx={{ pl: "1rem", fontFamily: "code", color: "third" }}>
            React, Node, Express, MongoDB, SQL, Ruby/Rails, GSAP, TailwindCSS,
            MaterialUI, ThemeUI
          </div>
        </p>
        <p className="aboutItems">
          Tech I’m actively incorporating into my skill set: <br />
          <div sx={{ pl: "1rem", fontFamily: "code", color: "third" }}>
            Next.JS, Typescript, A11y
          </div>
        </p>
      </div>
    </div>
  );
}
