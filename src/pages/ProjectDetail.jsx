import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "../components/ImageSlider";
import { projectList } from "../data/data";
import Aos from "aos";
import "aos/dist/aos.css";

const ProjectDetail = () => {
  useEffect(() => {
    Aos.init({});
  }, []);

  const { projectId } = useParams();

  const project = projectList.filter((project) => project.id === projectId);

  const {
    title,
    descriptionLarge,
    features,
    technologyUsed,
    imageMain,
    images,
    links,
  } = project[0];

  return (
    <div className="container project">
      {/* - Slider */}
      <div
        className="project__slider"
        data-aos="fade-right"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <ImageSlider slides={images} img={imageMain} />
      </div>

      {/* -Description */}
      <div
        className="project__description"
        data-aos="fade-left"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        <div className="project__header">
          <h3 className="heading-2 project__title-name">{title}</h3>
          <div className="project__links">
            {links.map(({ name, link, icon }) => (
              <a
                key={link}
                className="btn btn--outlined btn--icon"
                href={link}
                target="_blank"
              >
                <img src={icon} alt="" />
                <p>{name}</p>
              </a>
            ))}
          </div>
        </div>

        <p className="project_description">{descriptionLarge}</p>

        <h4 className="heading-4">Technology Used</h4>

        <div className="project__stack">
          {technologyUsed.map(({ name, icon }) => (
            <div className="project__stack-item" key={name}>
              <img
                src={icon}
                alt="CSS icon"
                className="skills__icon skills__icon--sm"
              />
              <p className="skills__text">{name}</p>
            </div>
          ))}
        </div>

        <div>
          <h4 className="heading-4">Features</h4>
          <ul>
            {features.map(({ feature }) => (
              <li key={feature}>- {feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
