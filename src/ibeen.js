import React from "react";
import ibeen from "./images/ibeen.png";
import ibeen_cell from "./images/ibeen-cell.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Ibeen() {
  return <div>
      <div className="ibeen-app">
        <div className="app-body">
          <div className="description">
            <h2 className="app-name">iBeen</h2>
            <h3>Description:</h3>
            <p>
              "iBeen" is a place for all your travel memories. A full CRUD app
              built using Node.js and Express server, it uses postgreSQL
              database to store your trips' details. Google Maps API allows
              users to save the location of their trip as well.
            </p>
            <h3>Tech:</h3>
            <p>Node.js, Express server, postgreSQL, NPM, Google Maps API</p>
          </div>
          <div className="links">
            <a href="http://ibeen.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/ibeen" target="_blank" rel="noopener noreferrer">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src={ibeen} alt="ibeen" className="ibeen-image" />
          <img src={ibeen_cell} alt="ibeen" className="ibeen-cell" />
        </div>
      </div>
    </div>;
}

export default Ibeen;
