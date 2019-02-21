import React from "react";
import adobecs from "./images/adobecc.svg";
import aws from "./images/aws.svg";
import cpp from "./images/cpp.svg";
import css3 from "./images/css3.svg";
import git from "./images/git.svg";
import github from "./images/github.svg";
import heroku from "./images/heroku.svg";
import html5 from "./images/html5.svg";
import javascript from "./images/javascript.svg";
import jquery from "./images/jquery.svg";
import nodeexpress from "./images/node_express.svg";
import postgresql from "./images/postgresql.svg";
import reactjs from "./images/reactjs.svg";
import responsivedesign from "./images/responsive_design.svg";
import ruby from "./images/ruby.svg";
import ruby_on_rails from "./images/ruby_on_rails.svg";
import sketch from "./images/sketch.svg";
import xml from "./images/xml.svg";
import confluence from "./images/confluence.svg";



function Skills() {
  return <div>
      <div className="skills-section">
        <h2 className="skills">Skills:</h2>
        <div>
          <img src={aws} alt="aws" className="skills-icon" title="Amazon Web Services" />
        </div>
        <div>
          <img src={adobecs} alt="adobecs" className="skills-icon" title="Adobe Creative Cloud" />
        </div>
        <div>
          <img src={confluence} alt="confluence" className="skills-icon" title="Confluence" />
        </div>
        <div>
          <img src={cpp} alt="cpp" className="skills-icon" title="C++" />
        </div>
        <div>
          <img src={css3} alt="css3" className="skills-icon" title="CSS 3" />
        </div>
        <div>
          <img src={git} alt="git" className="skills-icon" title="Git Version Control" />
        </div>
        <div>
          <img src={github} alt="github" className="skills-icon" title="GitHub" />
        </div>
        <div>
          <img src={heroku} alt="heroku" className="skills-icon" title="Heroku" />
        </div>
        <div>
          <img src={html5} alt="html5" className="skills-icon" title="HTML 5" />
        </div>
        <div>
          <img src={javascript} alt="javascript" className="skills-icon" title="JavaScript ES6" />
        </div>
        <div>
          <img src={jquery} alt="jquery" className="skills-icon" title="jQuery" />
        </div>
        <div>
          <img src={nodeexpress} alt="nodeexpress" className="skills-icon" title="Node.js/Express" />
        </div>
        <div>
          <img src={postgresql} alt="postgresql" className="skills-icon" title="PostgreSQL" />
        </div>
        <div>
          <img src={reactjs} alt="reactjs" className="skills-icon" title="React.js" />
        </div>
        <div>
          <img src={responsivedesign} alt="responsivedesign" className="skills-icon" title="Responsive Web Design" />
        </div>
        <div>
          <img src={ruby} alt="ruby" className="skills-icon" title="Ruby" />
        </div>
        <div>
          <img src={ruby_on_rails} alt="ruby_on_rails" className="skills-icon" title="Rails" />
        </div>
        <div>
          <img src={sketch} alt="sketch" className="skills-icon" title="Sketch" />
        </div>
        <div>
          <img src={xml} alt="xml" className="skills-icon" title="XML" />
        </div>
      </div>
    </div>;
}

export default Skills;
