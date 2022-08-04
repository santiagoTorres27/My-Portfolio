import React, { useEffect, useState } from "react";
import { projectList } from "../data/data";
import Project from "./Project";

const Work = () => {
  const [projects, setProjects] = useState(projectList);

  return (
    <section className="work" id="work">
      <h2 className="heading-2" data-aos="fade">
        My Work
      </h2>

      {projects.map(({ id, title, description, imagePreview }) => (
        <Project
          key={id}
          id={id}
          title={title}
          description={description}
          imagePreview={imagePreview}
        />
      ))}
    </section>
  );
};

export default Work;
