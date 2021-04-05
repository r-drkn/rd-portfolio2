/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
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

function ContactListItem(props) {
  const { url, item, image, download } = props;
  return (
    <li className="listItem" key={item}>
      <a href={url} target="_blank" rel="noreferrer" download={download}>
        <div
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "code",
          }}
        >
          <img sx={{ width: "3rem" }} src={image} alt={item} />
          <h3>{item}</h3>
        </div>
      </a>
    </li>
  );
}

export default function Contact() {
  const { secondary } = theme.colors;

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
          pt: "10vh",
          px: "1rem",
        }}
      >
        <PageHeading pageTitle="Get in touch!" />
        <ul
          sx={{
            p: "2rem",
            pt: "5rem",
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
          <p sx={{ fontSize: "2rem", textAlign: "center", pb: "2rem" }}>
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
            stroke-width="8"
          />
        </svg>
        <h4 sx={{ fontFamily: "code", fontWeight: 200, py: "4rem" }}>
          Copyright© Robert Dirken 2021
        </h4>
      </div>
    </MainContainer>
  );
}
