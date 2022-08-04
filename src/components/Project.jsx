import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const Project = ({ id, title, description, imagePreview }) => {
  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div
      className="work__project"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="1000"
    >
      <div className="work__description">
        <h3 className="heading-3">{title}</h3>
        <p>{description}</p>
        <Link to={`/project/${id}`} className="btn btn--outlined">
          View more
        </Link>
      </div>

      <div className="work__image">
        <img src={imagePreview} alt="Project 1" />
      </div>
    </div>
  );
};

export default Project;
