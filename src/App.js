import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import "./styles/App.css";
import "./styles/landing.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/form.css";
import "./styles/resume.css"

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
