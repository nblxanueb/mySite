import React from "react";
import dategrub from "./images/dategrub.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Dategrub() {
  return <div>
      <div className="dategrub-app">
        <div className="app-image">
          <img src={dategrub} alt="dategrub" className="dategrub-image" />
        </div>

        <div className="dategrub-body">
          <div className="description">
            <h2>Description:</h2>
            <p>
              An app to find the perfect spot for a date. Powered by Yelp
              Fusion and Google Maps API.
            </p>
            <h2>Tech:</h2>
            <p>node.js, express, css, yelp fusion api, google maps api</p>
          </div>
          <div className="links">
            <a href="http://date-grub.herokuapp.com/" target="_blank">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/date-Grub" target="_blank">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>;
}

export default Dategrub;
