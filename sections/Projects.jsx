import React from "react";
import Project from "../components/Project";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects_content">
        <h2 className="projects_content__title">
          Explore some of my recent projects.
        </h2>
        <p className="projects_content__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices
          magna commodo.
        </p>
      </div>

      <Project />
    </section>
  );
};

export default Projects;
