import React from "react";
import ibeen from "./images/ibeen.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Ibeen() {
  return <div>
      <div className="ibeen-app">
        <div className="app-body">
          <div className="description">
            <h2>Description:</h2>
            <p>
              A place for all your travel memories; full stack CRUD
              application using Node and Express and Google Maps API.
            </p>
            <h2>Tech:</h2>
            <p>node.js, express, css, google maps api</p>
          </div>
          <div className="links">
            <a href="http://ibeen.herokuapp.com/" target="_blank">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/ibeen" target="_blank">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src={ibeen} alt="ibeen" className="ibeen-image" />
        </div>
      </div>
    </div>;
}

export default Ibeen;
