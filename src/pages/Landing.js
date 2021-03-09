/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

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
        letterSpacing: "4px",
        color: "#333",
        padding: "2rem",
      }}
    >
      <h1
        sx={{
          fontSize: "3rem",
          gridArea: "3 / 2 / 4 / 8",
          padding: 0,
          margin: 0,
          my: "auto",
        }}
      >
        Hi I'm Rob
      </h1>
      <div
        sx={{
          gridArea: "3 / 8 / 4 / 12",
          display: "flex",
          alignItems: "center",
        }}
      >
        <svg
          viewBox="0 0 152 35"
          width="90%"
          height="90%"
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
          fontSize: "2rem",
          padding: 0,
          margin: 0,
          gridArea: "5 / 2 / 9 / 11",
        }}
      >
        And I make things <br />
        on the internet.
      </h2>
      <div sx={{ gridArea: "2 / 12 / 6 / 16", border: "2px solid #333" }}></div>
      {/* <div
        sx={{ width: "50%", height: "100%", border: "1px solid #999" }}
      ></div>
      <div
        sx={{ width: "50%", height: "100%", border: "1px solid #999" }}
      ></div> */}
    </div>
  );
}
