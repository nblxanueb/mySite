import React from "react";
import easemart from "./images/eas-e-mart.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Easemart() {
  return (
    <div>
      <div className="easemart-app">
        <div className="app-image">
          <img src={easemart} alt="eas-e-mart" className="easemart-image" />
        </div>

        <div className="app-body">
          <div className="description">
            <h2>Description:</h2>
            <p>
              An online classified advertisements website with items for sale.
              A group project using Express/React and Google Maps API.
            </p>
            <h2>Tech:</h2>
            <p>node.js, express/react, css, google maps api</p>
          </div>
          <div className="links">
            <a href="http://eas-e-mart.herokuapp.com/" target="_blank">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/eas-e-mart" target="_blank">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
      </div>
  </div>);
}

export default Easemart;
