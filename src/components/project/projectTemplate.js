import React from "react";

function ProjectTemplate({ name, tech, description, project_source }) {
  return (
    <>
      <section class="content__section">
        <h2 class="float-left">{name}</h2>
        <div id="first-project-container">
          <div>{description}</div>
          <section class="first-project-card">
            <a href="https://cwyan2483.github.io/astrologica/">
              {" "}
              <img className="project-image" src={project_source} alt="" />
            </a>
          </section>
        </div>
      </section>
    </>
  );
}

export default ProjectTemplate;
