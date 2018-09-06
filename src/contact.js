import React from "react";
import linkedin from "./images/linkedin.png";
import github from "./images/git-logo-w.png";
import flickr from "./images/flickr.png";
import email from "./images/email.png";
import resume from "./images/resume.png";

function Contact() {
  return <div>
      <div className="contact">
        <div>
          <h3> contact information: </h3>
        </div>
        <div className="social-media">
          <div>
            <a href="https://drive.google.com/file/d/1Vl4B94y-i59bvsneqOudh9itTQHr9efN/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <img src={resume} alt="resume" className="contact-icons" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/andrey-pykhantsev/" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="linkedin" className="contact-icons" />
            </a>
          </div>
          <div>
            <a href="https://github.com/nblxanueb" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="github" className="contact-icons" />
            </a>
          </div>
          <div>
            <a href="https://www.flickr.com/photos/pykhantsev/" target="_blank" rel="noopener noreferrer">
              <img src={flickr} alt="flickr" className="contact-icons" />
            </a>
          </div>
          <div>
            <a href="mailto:a.pykhantsev@gmail.com">
              <img src={email} alt="email" className="contact-icons" />
            </a>
          </div>
        </div>
        <div className="made-by">
          <h5> made by A.Pykhantsev © 2018 </h5>
        </div>
      </div>
    </div>;
}

export default Contact;
