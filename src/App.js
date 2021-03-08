import React from "react";
import theme from "./theme";
import { ThemeProvider } from "theme-ui";
import Landing from "./pages/Landing";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import MainContainer from "./components/MainContainer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Nav />
          <MainContainer>
            <Route exact path="/" component={Landing} />
            <Route path="/projects" component={Projects} />
          </MainContainer>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
