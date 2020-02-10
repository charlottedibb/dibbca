import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Media from "react-media";
import Home from "./components/Home.js";
import Resume from "./components/Resume.js";
import "./styles/App.css";
import "./styles/landing.css";
import "./styles/projects.css";
import "./styles/skills.css";
import "./styles/form.css";
import "./styles/resume.css";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/mobile">
            <div>hey i'm mobiiile</div>
          </Route>
          <Route exact path="/">
            <Media query={{ maxWidth: 599 }}>
              {screenIsSmall =>
                screenIsSmall ? <Redirect to="/mobile" /> : <Home />
              }
            </Media>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
