import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [color, setColor] = useState(false);
  const [navVisible, setNavVisible] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const toggleNav = () => {
    setNavVisible(!navVisible);
  };

  const closeResponsiveNav = () => {
    if (navVisible) {
      console.log("cerrando");
      setNavVisible(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <nav className={color ? "nav nav__bg" : "nav"}>
      <div className="logo">
        <Link to="/">#st</Link>
      </div>

      <div className="nav__toggle" onClick={toggleNav}>
        {!navVisible && (
          <img
            src="./img/skills/hamburger-menu.svg"
            alt="CSS icon"
            className="skills__icon"
          />
        )}
        {navVisible && (
          <img
            src="./img/skills/close.svg"
            alt="CSS icon"
            className="skills__icon"
          />
        )}
      </div>

      <ul className={navVisible ? "nav__items visible" : "nav__items"}>
        <li className="nav__item">
          <HashLink to="/#about-me" onClick={closeResponsiveNav}>
            About me
          </HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="/#work" onClick={closeResponsiveNav}>
            My Work
          </HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="/#skills" onClick={closeResponsiveNav}>
            My Skills
          </HashLink>
        </li>
        <li className="nav__item">
          <HashLink to="/#contact" onClick={closeResponsiveNav}>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
