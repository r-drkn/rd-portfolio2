/** @jsxRuntime classic */
/** @jsx jsx */
import gsap from "gsap";
// eslint-disable-next-line
import React, { useEffect, useRef } from "react";
import { jsx } from "theme-ui";
import MainContainer from "../../components/MainContainer";
import PageHeading from "../../components/PageHeading";
import codepen from "../../icons/codepen.svg";
import github from "../../icons/github.svg";
import linkedin from "../../icons/linkedin.svg";
import mail from "../../icons/mail.svg";
import resume from "../../icons/resume.svg";
import resumeFile from "../../images/RobertDirkenResumé.pdf";
import theme from "../../theme";
import ContactListItem from "./ContactListItem";

const contactListItems = [
  { item: "Mail", url: "mailto:robert.dirken@gmail.com", image: mail },
  {
    item: "LinkedIn",
    url: "https://www.linkedin.com/in/robert-dirken-5796711a5/",
    image: linkedin,
  },
  { item: "Github", url: "https://github.com/r-drkn", image: github },
  { item: "Resumé", image: resume, url: resumeFile },
  {
    item: "CodePen",
    url: "https://codepen.io/r_drkn",
    image: codepen,
  },
];

export default function Contact() {
  const { secondary } = theme.colors;
  let header = useRef(null);

  useEffect(() => {
    gsap.from(".icons", {
      scrollTrigger: {
        trigger: header,
        start: "top 50%",
        end: "bottom 50%",
      },
      yPercent: 100,
      autoAlpha: 0,
    });
  }, []);

  return (
    <MainContainer>
      <div
        id="contact"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "900px",
          width: "100%",
          px: "1rem",
          py: "10vh",
        }}
      >
        <div ref={(el) => (header = el)}>
          <PageHeading pageTitle="Get in touch!" />
        </div>
        <ul
          className="icons"
          sx={{
            pt: "10vh",
            width: "100%",
            listStyle: "none",
            display: "flex",
            flexDirection: ["column", "row"],
            justifyContent: "space-evenly",
            a: { textDecoration: "none", color: "text" },
          }}
        >
          {contactListItems.map((listItem) => {
            return (
              <ContactListItem
                url={listItem.url}
                item={listItem.item}
                image={listItem.image}
                download={listItem.item === "Resumé"}
              />
            );
          })}
        </ul>

        <div>
          <p sx={{ fontSize: "2rem", textAlign: "center", py: "3vh" }}>
            Currently looking for entry level web developer opportunities!
          </p>
        </div>
        <svg
          width="283"
          height="28"
          viewBox="0 0 283 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 14C12.3333 0.666667 20.6667 0.666667 29 14C37.3333 27.3333 45.6667 27.3333 54 14C62.3333 0.666667 70.6667 0.666667 79 14C87.3333 27.3333 95.6667 27.3333 104 14C112.333 0.666667 120.667 0.666667 129 14C137.333 27.3333 145.667 27.3333 154 14C162.333 0.666667 170.667 0.666667 179 14C187.333 27.3333 195.667 27.3333 204 14C212.333 0.666667 220.667 0.666667 229 14C237.333 27.3333 245.667 27.3333 254 14C262.333 0.666667 270.667 0.666667 279 14"
            stroke={secondary}
            strokeWidth="8"
          />
        </svg>
        <h4 sx={{ fontFamily: "code", fontWeight: 200 }}>
          Copyright© Robert Dirken 2021
        </h4>
      </div>
    </MainContainer>
  );
}
