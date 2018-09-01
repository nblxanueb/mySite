import React from "react";
import { render } from "react-dom";
import Header from "./header";
import Skills from "./skills";
import Ibeen from "./ibeen";
import Easemart from "./eas-e-mart";
import Dategrub from "./dategrub";
import Farmchoir from "./farm-choir";
import Tictactoe from "./tictactoe";
import About from "./about";
import { SocialIcon } from "react-social-icons";
import "./styles.css";

const App = () => (
  <div>
    <div className="wrapper">
      <Header />
      <About />
      <Skills />
      <p />
    </div>
    <h2 className="projects"> Projects: </h2>

    <Dategrub />
    <Ibeen />
    <Easemart />
    <Farmchoir />
    <Tictactoe />

    <div className="contact">
      <div>
        <h3> contact information: </h3>
      </div>
      <div>
        <SocialIcon url={`https://www.linkedin.com/in/andrey-pykhantsev/`} />
        <SocialIcon className="icon" url={`https://github.com/nblxanueb`} />
        <SocialIcon
          className="icon"
          url={`https://www.flickr.com/photos/pykhantsev/`}
        />
        <SocialIcon className="icon" url={`https://codepen.io/pykhantsev/`} />
        <SocialIcon className="icon" url={`mailto:a.e.pykhantsev@gmail.com`} />
      </div>
      <div>
        <h6> made by A.Pykhantsev © 2018 </h6>
      </div>
    </div>
  </div>
);

render(<App />, document.getElementById("root"));
