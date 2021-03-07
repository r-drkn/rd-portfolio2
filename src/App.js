import React from "react";
import theme from "./theme";
import { ThemeProvider } from "theme-ui";
import Landing from "./components/Landing";
// import { BrowseRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Landing />
      </ThemeProvider>
    </div>
  );
}

export default App;
