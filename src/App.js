import React, { useEffect } from "react";
import "./App.css";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    const progress = document.getElementById("progressBar");
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function () {
      const progressHeight = window.pageYOffset / totalHeight + 100;
      progress.style.height = progressHeight + "%";
    };
    return () => {};
  }, []);
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
