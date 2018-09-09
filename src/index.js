import React from "react";
import { render } from "react-dom";
import Header from "./header";
import Skills from "./skills";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "./styles.css";

const App = () => (
  <div>
    <div className="navbar">
      <AnchorLink offset="60" href="#home">
        Home
      </AnchorLink>
      <AnchorLink offset="60" href="#about">
        About
      </AnchorLink>
      <AnchorLink offset="38" href="#skills">
        Skills
      </AnchorLink>
      <AnchorLink offset="60" href="#projects">
        Projects
      </AnchorLink>
      <AnchorLink href="#contact">Contact</AnchorLink>
    </div>
    <div id="home">
      <Header />
    </div>
    <div id="about">
      <About />
    </div>
    <div id="skills">
      <Skills />
    </div>
    <div id="projects">
      <Projects />
    </div>
    <div id="contact">
      <Contact />
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
