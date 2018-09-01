import React from "react";
import tictactoe from "./images/tic-tac-toe.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Tictactoe() {
  return <div>
      <div className="tictactoe-app">
        <div className="app-body">
          <div className="description">
            <h2>Description:</h2>
            <p>
              A classic Tic Tac Toe game based on Javascript and DOM
              manipulation.
            </p>
            <h2>Tech:</h2>
            <p>node.js, express, css, google maps api</p>
          </div>
          <div className="links">
            <a href="" target="_blank">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="" target="_blank">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src={tictactoe} alt="tictactoe" className="tictactoe-image" />
        </div>
      </div>
    </div>;
}

export default Tictactoe;
