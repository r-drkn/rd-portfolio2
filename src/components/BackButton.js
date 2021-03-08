/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import BackArrow from "../icons/back-arrow.png";
import { jsx } from "theme-ui";
import { Redirect } from "react-router-dom";

export default function BackButton({ setShowProject }) {
  const [redirect, setRedirect] = useState(false);
  return (
    <>
      {redirect && <Redirect to="/projects" />}
      <button
        sx={{
          fontFamily: "main",
          boxSizing: "border-box",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5rem 0.5rem",
          fontSize: "1rem",
          cursor: "pointer",
          ":hover": {
            border: "1px solid #333",
            boxShadow: "0px 1px 1px 0px",
          },
        }}
        onClick={() => {
          setRedirect(true);
          setShowProject("");
        }}
      >
        <img
          src={BackArrow}
          alt="go back"
          sx={{ height: "1rem", width: "3rem", marginRight: "1rem" }}
        ></img>
        <span>BACK</span>
      </button>
    </>
  );
}
