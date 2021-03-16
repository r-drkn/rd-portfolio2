import React from "react";
import theme from "./theme";
import { ThemeProvider } from "theme-ui";
import Landing from "./pages/Landing/Landing";
import Nav from "./components/Nav";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import MainContainer from "./components/MainContainer";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Nav />
        <MainContainer>
          <Landing />
          <About />
          <Projects />
          <Contact />
        </MainContainer>
      </ThemeProvider>
    </div>
  );
}

export default App;
