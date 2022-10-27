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
      <div className="work__image">
        <img src={imagePreview} alt={title} />
      </div>

      <div className="work__description">
        <h3 className="heading-3">{title}</h3>
        <p>{description}</p>
      </div>

      <Link
        className="btn btn--outlined btn--outlined--small btn--icon "
        to={`/project/${id}`}
      >
        View more
      </Link>
    </div>
  );
};

export default Project;
