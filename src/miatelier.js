import React from "react";
import miatelier from "./images/miatelier.png";
import www from "./images/www.png";

function Miatelier() {
  return (
    <div>
      <div className="miatelier-app">
        <div className="app-image">
          <img
            src={miatelier}
            alt="Mark Ingram Atelier"
            className="miatelier-image"
          />
        </div>
        <div className="miatelier-body">
          <div className="description">
            <h2 className="app-name">Mark Ingram Atelier</h2>
            <h3>Description:</h3>
            <p>
              Mark Ingram Atelier is a premier bridal boutique for upscale,
              sophisticated brides in NYC. As the site's admin I am in charge of
              providing support and updating content, assist in developing
              newsletters and communications, as well as overall aesthetics and
              design.
            </p>
            <h3>Role:</h3>
            <p>WP Admin/Content Manager</p>
            <h3>Tech:</h3>
            <p>Wordpress || CSS || Javascript || PHP || Mailchimp</p>
          </div>
          <div className="links">
            <a
              href="http://markingramatelier.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={www} alt="website" className="website-logo" />
            </a>
            <a
              href="https://github.com/nblxanueb/sunny-forecast"
              target="_blank"
              rel="noopener noreferrer"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Miatelier;
