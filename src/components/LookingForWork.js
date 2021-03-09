/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";

export default function LookingForWork(props) {
  return (
    <div
      style={{
        backgroundColor: "blue",
        height: "10rem",
        width: "10rem",
        borderRadius: "50%",
        color: "#EEE",
        display: "flex",
        flexDirection: "center",
        alignItems: "center",
        padding: "1rem",
        gridArea: props.gridArea,
        position: "relative",
      }}
    >
      <svg
        viewBox="0 0 200 200"
        sx={{
          position: "absolute",
          circle: {
            strokeDasharray: "15",
            strokeDashoffset: "160",
            animation: "spin 0s linear infinite",
            "@keyframes spin": {
              to: {
                strokeDashoffset: "0",
              },
            },
          },
        }}
        height="200"
        width="200"
      >
        <circle
          cx="65"
          cy="100"
          r="70"
          stroke="#EEE"
          stroke-width="5"
          // strokeDasharray="10"
          fill="none"
        />
      </svg>
      <p style={{ textAlign: "center", backgroundColor: "none" }}>
        Currently Looking For Work
      </p>
    </div>
  );
}
