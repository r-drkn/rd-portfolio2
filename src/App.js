import React from "react";
import theme from "./theme";
import { ThemeProvider } from "theme-ui";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <MainContainer>
          <Landing />
          <Projects />
          <About />
        </MainContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
