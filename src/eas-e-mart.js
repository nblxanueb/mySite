import React from "react";
import easemart from "./images/eas-e-mart.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Easemart() {
  return <div>
      <div className="easemart-app">
        <div className="app-image">
          <img src={easemart} alt="eas-e-mart" className="easemart-image" />
        </div>
        <div className="app-body">
          <div className="description">
            <h2 className="app-name">eas-E-mart</h2>
            <h3>Description:</h3>
            <p>
              "eas-E-mart" is a full CRUD online classified advertisements app
              with items for sale listed by users. The app features user
              authentication and displays user location on an interactive map.
              Responsive Web Design makes this app especially easy for use on
              the go.
            </p>
            <h3>Tech:</h3>
            <p>Node.js, Express server, postgreSQL, Google Maps API</p>
          </div>
          <div className="links">
            <a href="http://eas-e-mart.herokuapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/eas-e-mart" target="_blank" rel="noopener noreferrer">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>;
}

export default Easemart;
