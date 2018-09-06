import React from "react";
import farmchoir from "./images/farm-choir.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Farmchoir() {
  return <div>
      <div className="app">
        <div className="app-body">
          <div className="description">
            <h2 className="app-name">Farm Choir</h2>
            <h3>Description:</h3>
            <p>
              "Farm Choir" is an interactive sound match memory game for kids.
              After hearing a 'song' by the animals at the farm, users need to
              play it back in the right order. The number of animals in the
              choir increases with each round. Built using JavaScript jQuery,
              and DOM manipulation.
            </p>
            <h3>Tech:</h3>
            <p>HTML, CSS, Javascript, jQuery, Flexbox, Pixelmator</p>
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
