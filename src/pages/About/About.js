/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { useEffect } from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";
import gsap from "gsap";
import { animate } from "./aboutAnimate";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MainContainer from "../../components/MainContainer";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    gsap.from(".aboutItems", animate.aboutItems);
  }, []);

  return (
    <MainContainer>
      <div
        id="about"
        sx={{
          fontFamily: "primary",
          maxWidth: "900px",
          p: "1rem",
          py: "10vh",
        }}
      >
        <PageHeading pageTitle="A bit about me:" />
        <div
          sx={{
            width: "100%",
            fontSize: "1.2rem",
            // textAlign: "justify",
            padding: [null, "2rem"],
            mt: "2rem",
            p: {
              fontWeight: "300",
              lineHeight: "2rem",
              p: ["1rem", "0"],
            },
          }}
        >
          <p className="aboutItems">
            Hi I'm Robert Dirken. I'm a web developer living in Brisbane.
          </p>
          <p className="aboutItems">
            I’m currently working as a React/NextJS developer at GO Digital.
          </p>
          <p className="aboutItems">
            When I’m away from the keyboard I enjoy cooking elaborate meals for
            friends, electronic music and watching the Chicago Bulls fail to
            meet my expectations despite years of my love and devotion.
          </p>
          <p className="aboutItems">
            Tech I’ve worked with includes: <br />
            <div sx={{ pl: "1rem", fontFamily: "code", color: "third" }}>
              React, Typescript, NextJS, Node, Express, MongoDB, Ruby/Rails, GSAP, TailwindCSS
            </div>
          </p>
        </div>
      </div>
    </MainContainer>
  );
}
