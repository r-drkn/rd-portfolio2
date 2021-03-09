/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import LookingForWork from "../components/LookingForWork";

export default function Landing(props) {
  return (
    <div
      sx={{
        width: "100%",
        height: "90vh",
        display: "grid",
        gridTemplate: "repeat(9, 1fr) / repeat(16, 1fr)",
        flexDirection: "column",
        fontFamily: "main",
        letterSpacing: "2px",
        color: "#333",
        padding: "2rem",
      }}
    >
      <h1
        sx={{
          fontSize: "4rem",
          gridArea: "2 / 2 / 4 / 9",
          padding: 0,
          margin: 0,
          display: "flex",
          alignItems: "center",
          fontWeight: "600",
        }}
      >
        Hi I'm Rob
      </h1>
      <div
        sx={{
          gridArea: "2 / 8 / 4 / 12",
          display: "flex",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <svg
          viewBox="0 0 152 35"
          width="80%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          sx={{
            path: {
              strokeDasharray: "163",
              strokeDashoffset: "-163",
              animation: "dash 1.5s linear forwards",
            },
            "@keyframes dash": {
              to: {
                strokeDashoffset: "0",
              },
            },
          }}
        >
          <path
            d="M136 17h-7c-9 0-12 8-18 0-7-8-13-8-19 0s-12 8-18 0-12-8-18 0-12 8-18 0-12-8-18 0-12 8-18 0"
            stroke="#4C75F2"
            stroke-width="7"
            stroke-linecap="round"
          />
          <path
            d="M133 3l15 15-15 14"
            stroke="#4C75F2"
            stroke-width="7"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <h2
        sx={{
          fontSize: "2.5rem",
          padding: 0,
          margin: 0,
          gridArea: "4/ 2 / 5 / 11",
          fontWeight: "600",
        }}
      >
        <span sx={{ fontSize: "3rem" }}>And I make things</span> <br />
        on the internet.
      </h2>
      <div
        sx={{
          gridArea: "2 / 11 / 6 / 16",
          border: "2px solid #333",
          margin: "1rem",
        }}
      ></div>
      <div
        sx={{
          gridArea: "5/ 2 / 8 / 10 ",
          fontSize: "1.2rem",
          textAlign: "justify",
          margin: "auto",
        }}
      >
        I'm a Junior Developer based in Brisbane specializing in MERN based
        applications with a particularly interested in the front end side of
        projects.
      </div>
      <LookingForWork gridArea="7 / 13 / 9 / 15 " />
    </div>
  );
}
