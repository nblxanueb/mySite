import React from "react";
import linkedin from "./images/linkedin.png";
import github from "./images/git-logo-w.png";
import flickr from "./images/flickr.png";
import { SocialIcon } from "react-social-icons";

function Contact() {
  return <div>
      <div className="contact">
        <div>
          <h3> contact information: </h3>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/andrey-pykhantsev/">
            <img src={linkedin} alt="linkedin" className="contact-icons" />
          </a>
          <a href="https://github.com/nblxanueb">
            <img src={github} alt="github" className="contact-icons" />
          </a>
          <a href="https://www.flickr.com/photos/pykhantsev/">
            <img src={flickr} alt="flickr" className="contact-icons" />
          </a>
          <SocialIcon className="icon" url={`mailto:a.e.pykhantsev@gmail.com`} />
        </div>
        <div>
          <h6> made by A.Pykhantsev © 2018 </h6>
        </div>
      </div>
    </div>;
}

export default Contact;
