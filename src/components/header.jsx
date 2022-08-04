import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="heading-1">
          <span>SANTIAGO</span>
          <span>TORRES</span>
        </h1>

        <p className="header__position">Front-End Developer</p>

        <div className="header__links">
          <a
            className="header__link header__link--1 header__link--light"
            href="https://github.com/santiagoTorres27"
            target="_blank"
          >
            <img src="img/skills/github.svg" alt="GitHub icon" />
            <p>Github</p>
          </a>

          <a
            className="header__link header__link--2 header__link--light"
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

export default Header;
