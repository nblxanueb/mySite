import React from "react";
import sunny from "./images/sunny.png";
import git_logo from "./images/git-logo.png";
import www from "./images/www.png";

function Sunny() {
  return <div>
      <div className="sunny-app">
        <div className="app-image">
          <img src={sunny} alt="eas-e-mart" className="sunny-image" />
        </div>
        <div className="sunny-body">
          <div className="description">
            <h2 className="app-name">sunny Forecast</h2>
            <h3>Description:</h3>
            <p>
              "sunny Forecast" is a fast way to check the weather in your
              location, or anywhere in the US. Based on Openweather API, users
              can check current weather by providing their Zip-code. Google
              Maps API also allows the users to see their location.
            </p>
            <h3>Tech:</h3>
            <p>
              HTML, CSS, Javascript, jQuery, AJAX, Openweather API Google Maps
              API
            </p>
          </div>
          <div className="links">
            <a href="https://nblxanueb.github.io/sunny-forecast/" target="_blank" rel="noopener noreferrer">
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a href="https://github.com/nblxanueb/sunny-forecast" target="_blank" rel="noopener noreferrer">
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
      </div>
    </div>;
}

export default Sunny;
