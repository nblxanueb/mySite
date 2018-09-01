import React from "react";
import adobecs from "./images/adobecs.png";
import css3 from "./images/css3.png";
import git from "./images/git.png";
import github from "./images/github.png";
import heroku from "./images/heroku.png";
import html5 from "./images/html5.png";
import javascript from "./images/javascript.png";
import jquery from "./images/jquery.png";
import nodeexpress from "./images/node_express.png";
import postgresql from "./images/postgresql.png";
import reactjs from "./images/reactjs.png";
import responsivedesign from "./images/responsive_design.png";
import ruby from "./images/ruby.png";
import ruby_on_rails from "./images/ruby_on_rails.png";
import sketch from "./images/sketch.png";

function Skills() {
  return (
    <div>
      <h2 className="skills"> Skills: </h2>
      <div className="skills-section">
        <div>
          <img src={adobecs} alt="adobecs" className="skills-icon" />
        </div>
        <div>
          <img src={css3} alt="css3" className="skills-icon" />
        </div>
        <div>
          <img src={git} alt="git" className="skills-icon" />
        </div>
        <div>
          <img src={github} alt="github" className="skills-icon" />
        </div>
        <div>
          <img src={heroku} alt="heroku" className="skills-icon" />
        </div>
        <div>
          <img src={html5} alt="html5" className="skills-icon" />
        </div>
        <div>
          <img src={javascript} alt="javascript" className="skills-icon" />
        </div>
        <div>
          <img src={jquery} alt="jquery" className="skills-icon" />
        </div>
        <div>
          <img src={nodeexpress} alt="nodeexpress" className="skills-icon" />
        </div>
        <div>
          <img src={postgresql} alt="postgresql" className="skills-icon" />
        </div>
        <div>
          <img src={reactjs} alt="reactjs" className="skills-icon" />
        </div>
        <div>
          <img src={responsivedesign} alt="responsivedesign" className="skills-icon"/>
        </div>
        <div>
          <img src={ruby} alt="ruby" className="skills-icon" />
        </div>
        <div>
          <img src={ruby_on_rails} alt="ruby_on_rails" className="skills-icon"/>
        </div>
        <div>
          <img src={sketch} alt="sketch" className="skills-icon" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
