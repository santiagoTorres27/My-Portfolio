import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section className="contact" id="contact">
      <h2 className="heading-2" data-aos="fade">
        Contact Me
      </h2>

      <div
        className="contact__container"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <a
          className="skills__item"
          href="https://github.com/santiagoTorres27"
          target="_blank"
        >
          <img
            src="img/skills/github.svg"
            alt="Github icon"
            className="skills__icon"
          />
          <p className="skills__text">Github</p>
        </a>

        <a
          className="skills__item"
          href="https://www.linkedin.com/in/santiago-torres-ayala/"
          target="_blank"
        >
          <img
            src="img/skills/linkedin.svg"
            alt="LinkedIn icon"
            className="skills__icon"
          />
          <p className="skills__text">LinkedIn</p>
        </a>
      </div>

      <div
        className="contact__container--behance"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="1000"
      >
        <p className="behance-intro">
          Before my programming journey I was a graphic designer, I used to make
          a living designing and drawing, if you want to see a few of my
          illustrations you can visit my profile on behance :)
        </p>

        <a
          className="skills__item"
          href="https://www.behance.net/santiagotob397"
          target="_blank"
        >
          <img
            src="img/skills/behance.svg"
            alt="LinkedIn icon"
            className="skills__icon"
          />
          <p className="skills__text">Behance</p>
        </a>
      </div>
    </section>
  );
};

export default Contact;
