/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function LookingForWork(props) {
  return (
    <div
      sx={{
        backgroundColor: "blue",
        height: "10rem",
        width: "10rem",
        borderRadius: "50%",
        color: "#EEE",
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        gridArea: props.gridArea,
        fontFamily: "main",
      }}
    >
      <svg
        viewBox="0 0 150 150"
        sx={{
          position: "absolute",
          circle: {
            strokeDasharray: "15",
            strokeDashoffset: "160",
            animation: "spin 30s linear infinite",
            "@keyframes spin": {
              to: {
                strokeDashoffset: "0",
              },
            },
          },
          "&:hover": {
            border: "3px solid #EEE",
            padding: "0.5rem",
            borderRadius: "50%",
          },
        }}
        height="160"
        width="160"
      >
        <circle
          cx="76"
          cy="76"
          r="65"
          stroke="#EEE"
          strokeWidth="5"
          // strokeDasharray="10"
          fill="none"
        />
      </svg>
      <p
        style={{
          textAlign: "center",
          backgroundColor: "none",
          padding: "1rem",
        }}
      >
        Currently Looking For Work.
      </p>
    </div>
  );
}
