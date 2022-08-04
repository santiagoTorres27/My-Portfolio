import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing__content">
        <div className="landing__title">
          <h1 className="heading-1 heading-name">
            <span className="name">Santiago</span>
            <span className="lastname">Torres</span>
          </h1>

          <h2 className="heading-1 heading-position">
            <span className="front">Front-End</span>
            <span className="dev">Developer</span>
          </h2>
        </div>

        <div className="landing__links">
          <a
            className="btn btn--outlined btn--icon"
            href="https://github.com/santiagoTorres27"
            target="_blank"
          >
            <img src="img/skills/github.svg" alt="GitHub icon" />
            <p>Github</p>
          </a>

          <a
            className="btn btn--outlined btn--icon"
            href="https://www.linkedin.com/in/santiago-torres-ayala/"
            target="_blank"
          >
            <img src="img/skills/linkedin.svg" alt="LinkedIn icon" />
            <p>LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
