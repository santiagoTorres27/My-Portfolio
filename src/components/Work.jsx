import React, { useEffect, useState } from "react";
import { projectList } from "../data/data";
import Project from "./Project";

const Work = () => {
  const [projects, setProjects] = useState(projectList);

  return (
    <section className="work" id="work">
      <div className="container">
        <h2 className="heading-2" data-aos="fade">
          This is my work
        </h2>

        <div className="work__projects-container">
          {projects.map(({ id, title, description, imagePreview }) => (
            <Project
              key={id}
              id={id}
              title={title}
              description={description}
              imagePreview={imagePreview}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
