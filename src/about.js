import React from "react";
import Typing from "react-typing-animation";

function About() {
  return (
    <div>
      <div className="about">
        <Typing>
          <h2 className="typing">Hi, I'm Andrey!</h2>
        </Typing>
        <p>
          I'm a full stack web developer with a passion for design and
          visualization as well as creating user-friendly and interactive
          interfaces. I was previously a Hospital Corpsman in the US Navy and
          was stationed in DC and Guam. After returning to NYC I decided to
          transition my career to IT field and got my BSc in Computer Science at
          CUNY John Jay College of Criminal Justice in 2017.
        </p>
        <p>
          I love technology and always love to get to the bottom of everything,
          see how everything works. I also love foreign languages and think of
          coding as speaking in a foreign language, sort of… I love to code
          because it allows me create cool stuff that can be shared with others
          around the world!
        </p>
        <p>
          My favorite framework right now is React.js on the frontend and Ruby
          on Rails on the backend. I am also very interested in data
          visualization and currently trying to learn D3. I have also worked
          with Flexbox, Node.js, Express, jQuery, PostgreSQL, CSS, and C++.{" "}
        </p>
        <p>
          In my spare time I like to cook or hang out with my friends or just
          stay at home and play video games or watch documentaries on Netflix. I
          love to travel and try to go somewhere new whenever I get a chance, if
          only for a weekend. My favorite hobby is scuba diving. I’m also a big
          fan of underwater photography, especially macro; you can check out
          some of my photos{" "}
          <a
            href="https://www.flickr.com/photos/pykhantsev/"
            className="flickr"
          >
            here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default About;
