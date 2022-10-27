import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <section className="about-me" id="about-me" data-aos="fade">
      <div className="container">
        <h2 className="heading-2">Hi! Welcome to my website</h2>
        <div className="about-me__container">
          <div
            className="about-me__item"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src="./img/about-me-1.png" alt="" />
            <p>
              Before getting into web development I studied and worked as
              Graphic Designer and Illustrator as freelancer.
            </p>
          </div>

          <div
            className="about-me__item"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src="./img/about-me-2.png" alt="" />
            <p>
              In 2019 I moved to Spain (I'm from Ecuador) to study mobile and
              web development.
            </p>
          </div>

          <div
            className="about-me__item"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <img src="./img/about-me-3.png" alt="" />
            <p>
              I'm currently working on personal projects, improving my skills in
              Front-End (React, JavaScript) and Back-End (Java, Spring Boot).
            </p>
          </div>

          <div
            className="about-me__item"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
          >
            <a href="./pdf/Santiago_Torres_Ayala_Resume.pdf" target="_blank">
              <img
                src="./img/about-me-4.png"
                alt=""
                className="download-icon"
              />
            </a>
            <div>
              <p>
                Now, I'm looking for an opportunity to get my first IT job. I
                really want to put my knowledge into practice and keep learning.
              </p>
              <span className="about-me__cv">
                Clic on the icon to download my CV :)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
