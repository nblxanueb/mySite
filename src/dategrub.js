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
            <h2 className="app-name">date Grub</h2>
            <h3>Description:</h3>
            <p>
              Finding a perfect spot for your date doesn't have to be hard.
              "date Grub" is powered by Yelp and will recommend the best places
              nearby so you can feel confident about your choice. Sleek design
              and user-friendly experience will help you decide where to go in
              no time and once you do, you can share your choice on social
              media.
            </p>
            <h3>Tech:</h3>
            <p>
              React, Express Server, NPM, Yelp Fusion API, Google Maps API
            </p>
          </div>
          <div className="links">
            <a href="http://date-grub.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/date-Grub" target="_blank" rel="noopener noreferrer">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>;
}

export default Dategrub;
