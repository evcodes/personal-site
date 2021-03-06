import React from "react";
import { Switch, Route } from "react-router-dom";

//pages
import About from "../../pages/About/";
import Home from "../../pages/Home/";
import Contact from "../../pages/Contact/";
import Blog from "../../pages/Blog/";

export default function RouteSwitcher({ match }) {
  console.log(match);
  return (
    <Switch className="switch">
      <Route path="/about">
        <About />
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}
