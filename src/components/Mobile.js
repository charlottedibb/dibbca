import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyForm from "./myform.js";
import {
  FaAngleDoubleDown,
  FaGitAlt,
  FaLinkedin,
  FaFileAlt
} from "react-icons/fa";

import "../styles/mobile.css";

export default function Mobile() {
  return (
    <div className="App">
      <div className="hero-mobile">
        <img
          className="hero-image"
          src={require("../images/ocean_still.png")}
          alt="blue ocean with pink sun"
        />
        <div className="hero-mobile-container">
          <h1 className="glowOn">Hey</h1>
          <FaAngleDoubleDown className="bounce" size={30} color="white" />
        </div>
      </div>
      <div className="angle-mobile">
        <h2>
          I'm Charlotte. I'm a full stack web developer based in Vancouver, BC.
        </h2>
      </div>
      <div className="info-mobile">
        <p className="summary">
          I’m a McGill University psychology grad with a past life in Human
          Resources. Seeking new and more interesting challenges, I took the
          leap into programming and web development.
          <br />
          <br />
          I love making beautiful, robust UIs for broad audiences, solving
          tricky problems, and seeing my applications come to life.
          <br />
          <br />
          Aside from coding, I enjoy cross stitching, creating 3D images and
          animations in Blender, and reading sci-fi novels.
        </p>
      </div>
      <h2 className="projects-header">Projects</h2>
      <div className="projects-divider">
        <div className="projects">
          <div className="project-card">
            <div className="project-title-gif">
              <img
                src={require("../gifs/edit.gif")}
                alt="gif of editing a pixel art pattern"
              />
            </div>
            <div className="project-description">
              <h2>XStitch</h2>
              <p>
                A cross-stitch pattern creating app with version history. Users
                can create patterns, return to previous saved versions, and
                generate pdfs to print out their patterns. Built with React,
                Ruby on Rails, PostgreSQL, and Axios.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-title-gif">
              <img
                src={require("../gifs/hungry_heroes_checkout.gif")}
                alt="loading..."
              />
            </div>
            <div className="project-description">
              <h2>Hungry Heroes</h2>
              <p>
                A food pick-up ordering app built as a midterm project at
                Lighthouse Labs. Users can place orders, which notifies the
                restaurant via text message. The restaurant can respond with
                estimated wait time and notify the user when the order is ready
                for pickup.
                <br />
                Front-end built using HTML/CSS/Bootstrap, Javascript, AJAX.
                Back-end was built using Node.js, Express, and PostreSQL. Twilio
                API was used for sending text messages.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-title-gif">
              <img
                src={require("../gifs/tweet.gif")}
                alt="gif of creating a tweet"
              />
            </div>
            <div className="project-description">
              <h2>Tweeter</h2>
              <p>
                Tweeter is a simple, single-page Twitter clone. Front end was
                built with HTML, CSS, JS, jQuery and AJAX. Back end was built
                using Node and Express.
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-title-gif">
              <img
                src={require("../gifs/jungle_checkout.gif")}
                alt="git of user checking out"
              />
            </div>
            <div className="project-description">
              <h2>Jungle</h2>
              <p>
                Jungle is a mini e-commerce application built with Rails 4.2,
                PostgreSQL, Stripe, and Bootstrap
              </p>
            </div>
          </div>
          <div className="project-card">
            <div className="project-title-gif">
              <img
                src={require("../gifs/editAppt.gif")}
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
      </div>
      <div className="contact-container">
        <MyForm />
        <div className="social">
          <a
            href="https://github.com/charcharmasonjar"
            rel="noopener noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaGitAlt size={35} />
            <p>Github</p>
          </a>
          <a
            href="https://www.linkedin.com/in/dibb/"
            rel="noopener noreferrer"
            target="_blank"
            className="social-link"
          >
            <FaLinkedin size={35} />
            <p>LinkedIn</p>
          </a>
          <Link to="/resume">
            <FaFileAlt size={30} />
            <p>Resume</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
