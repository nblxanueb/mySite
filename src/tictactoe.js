import React from "react";
import tictactoe from "./images/tic-tac-toe.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Tictactoe() {
  return <div>
      <div className="tictactoe-app">
        <div className="app-body">
          <div className="description">
            <h2 className="app-name">Tic Tac Toe</h2>
            <h2>Description:</h2>
            <p>
              This is a classic two-player Tic Tac Toe game built using
              Javascript and DOM manipulation.
            </p>
            <h2>Tech:</h2>
            <p>HTML || CSS || Javascript || jQuery</p>
          </div>
          <div className="links">
            <a href="https://nblxanueb.github.io/tic-tac-toe/" target="_blank" rel="noopener noreferrer">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/tic-tac-toe" target="_blank" rel="noopener noreferrer">
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
