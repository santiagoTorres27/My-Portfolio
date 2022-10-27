import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="container landing__container">
        <h1 className="heading-1 name">Santiago Torres</h1>
        <h2 className="heading-1 position">Web Developer</h2>

        <div className="landing__links">
          <a
            className="btn btn--outlined btn--icon link-1"
            href="https://github.com/santiagoTorres27"
            target="_blank"
          >
            <img src="img/skills/github.svg" alt="GitHub icon" />
            <p>Github</p>
          </a>

          <a
            className="btn btn--outlined btn--icon link-2"
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
