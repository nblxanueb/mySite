import React from "react";
import llama1 from "./images/llama1.png";
import llama2 from "./images/llama2.png";
import llama3 from "./images/llama3.png";
import git_logo from "./images/git-logo.png";
// import www from "./images/www.png";

function Llama() {
  return (
    <div>
      <div className="app-image">
        <img src={llama3} alt="llama3" className="llama3-image" />
      </div>
      <div className="llama-app">
        <div className="app-image">
          <img src={llama1} alt="llama1" className="llama1-image" />
        </div>
        <div className="llama-body">
          <div className="description">
            <h2 className="app-name">LLAMA</h2>
            <h3>Description:</h3>
            <p>
              Team project for{" "}
              <a
                href="https://www.genequality.org/hackathon/"
                className="flickr"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                genEquality Hackathon.
              </a>{" "}
              "LLAMA" is a geosocial app that can be used whenever someone
              feels unsafe and allows you to find nearby allies in real time
              using one's location. "LLAMA" uses push notifications to inform other users around. Integrated with Google Maps API, our app let's you see their position on the map as well as general details.
            </p>
            <h3>Role:</h3>
            <p>Front-End Developer</p>
            <h3>Tech:</h3>
            <p>React Native || Javascript || Cocoapods || Google Maps API</p>
          </div>
          <div className="links">
            <a
              href="https://github.com/nblxanueb/Llama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={git_logo} alt="github" className="git-logo" />
            </a>
          </div>
        </div>
        <div className="app-image">
          <img src={llama2} alt="llama2" className="llama2-image" />
        </div>
      </div>
    </div>
  );
}

export default Llama;
