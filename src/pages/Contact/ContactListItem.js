/** @jsxRuntime classic */
/** @jsx jsx */
// eslint-disable-next-line
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Heading, jsx } from "theme-ui";
import theme from "../../theme";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function ContactListItem(props) {
  const { url, item, image, download, container } = props;
  const [hover, setHover] = useState(false);
  let icon = useRef(null);

  useEffect(() => {
    hover
      ? gsap.to(icon, {
          color: theme.colors.secondary,
          duration: 0.5,
        })
      : gsap.to(icon, {
          color: theme.colors.text,
          duration: 0.2,
        });
  }, [hover]);

  return (
    <li className="listItem" key={item}>
      <a href={url} target="_blank" rel="noreferrer" download={download}>
        <div
          className="icons"
          ref={(el) => (icon = el)}
          sx={{
            color: theme.colors.text,
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "code",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img sx={{ width: "3rem" }} src={image} alt={item} />
          <h3>{item}</h3>
        </div>
      </a>
    </li>
  );
}
