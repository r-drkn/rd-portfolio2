/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import React from "react";
import { jsx } from "theme-ui";
import PageHeading from "../../components/PageHeading";
import codepen from "../../icons/codepen.svg";
import github from "../../icons/github.svg";
import linkedin from "../../icons/linkedin.svg";
import mail from "../../icons/mail.svg";
import resume from "../../icons/resume.svg";
import resumeFile from "../../images/RobertDirkenResumé.pdf";

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
  return (
    <div
      id="contact"
      sx={{
        height: "100vh",
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
    </div>
  );
}
