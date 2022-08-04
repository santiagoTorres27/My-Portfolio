import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section className="skills" id="skills">
      <h2 className="heading-2 skills__title" data-aos="fade">
        My skills
      </h2>

      <div
        className="skills__container"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="skills__item">
          <img
            src="img/skills/js.svg"
            alt="JavaScript icon"
            className="skills__icon"
          />
          <p className="skills__text">JavaScript</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/angular.svg"
            alt="Angular icon"
            className="skills__icon"
          />
          <p className="skills__text">Angular</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/react.svg"
            alt="React icon"
            className="skills__icon"
          />
          <p className="skills__text">React</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/java.svg"
            alt="Java icon"
            className="skills__icon"
          />
          <p className="skills__text">Java</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/typescript.svg"
            alt="TypeScript icon"
            className="skills__icon"
          />
          <p className="skills__text">TypeScript</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/spring.svg"
            alt="Spring icon"
            className="skills__icon"
          />
          <p className="skills__text">Spring</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/sql.svg"
            alt="SQL icon"
            className="skills__icon"
          />
          <p className="skills__text">SQL</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/html.svg"
            alt="HTML icon"
            className="skills__icon"
          />
          <p className="skills__text">HTML</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/css.svg"
            alt="CSS icon"
            className="skills__icon"
          />
          <p className="skills__text">CSS</p>
        </div>

        <div className="skills__item">
          <img
            src="img/skills/sass.svg"
            alt="SASS icon"
            className="skills__icon"
          />
          <p className="skills__text">SASS</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
