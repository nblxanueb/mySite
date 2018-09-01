import React from "react";
import farmchoir from "./images/farm-choir.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Farmchoir() {
  return <div>
      <div className="app">
        <div className="app-body">
          <div className="description">
            <h2>Description:</h2>
            <p>
              An interactive sound match memory game for kids based on jQuery
              and DOM manipulation.
            </p>
            <h2>Tech:</h2>
            <p>jQuery, js, html, css</p>
          </div>
          <div className="links">
            <a href="http://peaceful-pasteur-af9ae7.netlify.com/" target="_blank">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/farm-choir" target="_blank">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src={farmchoir} alt="farmchoir" className="farmchoir-image" />
        </div>
      </div>
    </div>;
}

export default Farmchoir;
