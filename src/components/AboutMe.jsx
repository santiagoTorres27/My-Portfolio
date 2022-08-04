import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const phrase = "Hello I am Santiago | Nice to meet you | "
    .toUpperCase()
    .split("");

  return (
    <section className="about-me" id="about-me" data-aos="fade">
      <h2 className="heading-2" data-text="¡Hola!" data-aos="fade">
        Hi! Welcome to my website!
      </h2>

      {/* ABOUT ME IMAGE */}
      {/* <div
        className="about-me__img"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="about-me__banner">HELLO!</div>
        <div className="about-me__hello">
          {phrase.map((letter, index) => (
            <span
              className="about-me__hello__item"
              key={index}
              style={{
                transform: "rotate(" + index * 9 + "deg)",
              }}
            >
              <p>{letter}</p>
            </span>
          ))}
        </div>
      </div> */}

      {/* ABOUT ME INFO */}

      <div
        className="about-me__text"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <p>Hi! My name is Santiago, I'm a Front-End Developer.</p>

        <p>
          Before getting into web development I studied and worked as a graphic
          designer, but after a couple of years I decided to change my life and
          started learning programming on my own, that's when I discovered that
          coding was what I really like to do. In 2019 I moved to Spain , where
          I currently live (I was born in Ecuador) to study mobile and web
          development.
        </p>

        <p>
          I am currently looking for my first IT job, I would like to be part of
          a team where I can contribute with my knowledge and at the same time
          learn new skills and technologies that allow me to grow
          professionally.
        </p>

        <a
          href="./pdf/santiago_torres_ayala_cv.pdf"
          target="_blank"
          className="btn btn--outlined btn--icon"
        >
          <img src="img/skills/download.svg" alt="LinkedIn icon" />
          Download my CV
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
