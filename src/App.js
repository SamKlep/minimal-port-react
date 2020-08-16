import React from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/portfolio'>
            <Portfolio />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>

          <Route to='/' component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
