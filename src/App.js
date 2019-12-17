import React from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./App.css";
import "./landing.css";
import "./projects.css";
// import waves from "./waves.mp4";
import ocean from "./ocean_tall.mp4";
import { FaAngleDoubleDown } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <Parallax pages={5} style={{ background: "#fda4ff" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="hero-vid-container">
            <video
              className="hero-vid"
              autoPlay
              loop
              muted
              // style={{ width: "100vw" }}
              // style={{ height: "100%" }}
            >
              <source src={ocean} type="video/mp4" />
            </video>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={1}>
          <div className="container">
            <h1 className="glowOn">Hey</h1>
            <FaAngleDoubleDown className="bounce" size={30} color="white" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={0}>
          <video
            className="upside-down"
            autoPlay
            loop
            muted
            style={{ width: "100vw" }}
          >
            <source src={ocean} type="video/mp4" />
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.3}>
          <div className="angle">
            <h2>
              I'm Charlotte. I'm a full stack web developer based in Vancouver,
              BC.
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="info">
            <p className="summary">
              I recently graduated from the Web Development Bootcamp at
              Lighthouse Labs. My background is in Human Resources and I have a
              BA in Psychology from McGill University.
            </p>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={1.5} speed={0.1}>
          <div className="angle-baby">
          </div>
        </ParallaxLayer> */}
        {/* <ParallaxLayer offset={1.5} speed={1}>
          <h2>Skills</h2>
          <table>
            <tr>
              <th>LANGUAGES</th>
              <th>
                LIBRARIES <br></br>& FRAMEWORKS
              </th>
              <th>
                DATABASES <br></br>& VERSION CONTROL
              </th>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td>NodeJs</td>
              <td>PostgresQL</td>
            </tr>
            <tr>
              <td>Ruby</td>
              <td>ReactJs</td>
              <td>Git</td>
            </tr>
            <tr>
              <td>HTML</td>
              <td>Ajax</td>
            </tr>
            <tr>
              <td>CSS</td>
              <td>Express</td>
            </tr>
            <tr>
              <td></td>
              <td>jQuery</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Bootstrap</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Webpack Dev Server</td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td>Rails</td>
              <td></td>
            </tr>
          </table>
        </ParallaxLayer> */}
        <ParallaxLayer offset={2.75} speed={0.1}>
          <div className="projects-divider"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={0.2}>
          <div className="projects">
            <h1 className="glowOn">Projects</h1>
            <div className="project-card">
              <div className="project-title-gif">
                <img
                  src={require("./tweet.gif")}
                  alt="gif of creating a tweet"
                />
              </div>
              <div className="project-description">
                <h2>Tweeter</h2>
                <p>
                  Tweeter is a simple, single-page Twitter clone. Front end was
                  built with HTML, CSS, JS, jQuery and AJAX. Back end was built
                  using Node, Express and MongoDB.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-title-gif">
                <img
                  src={require("./edit.gif")}
                  alt="gif of editing a pixel art pattern"
                />
              </div>
              <div className="project-description">
                <h2>XStitch</h2>
                <p>
                  A cross-stitch pattern creating app built as a final project
                  at Lighthouse Labs. Built with React and Rails.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-title-gif">
                <img
                  src={require("./hungry_heroes_checkout.gif")}
                  alt="loading..."
                />
              </div>
              <div className="project-description">
                <h2>Hungry Heroes</h2>
                <p>
                  A food pick-up ordering app built as a midterm project at
                  Lighthouse Labs. Front-end was built using HTML/CSS/Bootstrap,
                  Javascript, AJAX. Back-end was built using Node.js, Express,
                  and PostgreSQL. Twilio API was used for sending text messages.
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-title-gif">
                <img
                  src={require("./jungle_checkout.gif")}
                  alt="git of user checking out"
                />
              </div>
              <div className="project-description">
                <h2>Jungle</h2>
                <p>
                  Jungle is a mini e-commerce application built with Rails 4.2
                </p>
              </div>
            </div>
            <div className="project-card">
              <div className="project-title-gif">
                <img
                  src={require("./editAppt.gif")}
                  alt="git of editing an appointment"
                />
              </div>
              <div className="project-description">
                <h2>Scheduler</h2>
                <p>
                  Scheduler is a single page interview scheduling app built with
                  React. Storybook, Jest tests, and Cypress were used in the
                  development of the project.
                </p>
              </div>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
