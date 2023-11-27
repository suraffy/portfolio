import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import projectsList from "../services/projectsList";

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [selectedKeyword, setSelectedKeyword] = useState(null);

  const filterItems = [
    { keywork: "all", label: "All" },
    { keywork: "front-end", label: "Front-End" },
    { keywork: "back-end", label: "Back-End" },
    { keywork: "javascript", label: "Plain JavaScript" },
    { keywork: "css-animation", label: "CSS-Animation" },
  ];

  const handleFilter = (keyword) => {
    const { label } = filterItems.find((item) => item.keywork === keyword);
    setSelectedKeyword(label);
    console.log(label);

    if (keyword === "all") {
      setProjects(projectsList);
      return;
    }

    const filteredProjects = projectsList.filter((p) => p.type === keyword);
    setProjects(filteredProjects);
  };

  return (
    <section id="projects">
      <div className="container">
        <div className="flex-column">
          <h2 className="h2-underline">Let's See My Work</h2>

          <div className="project-header flex-column">
            <div className="filter-project flex-row">
              <h4>Filter</h4>
              <ul className="filter-list flex-row">
                {filterItems.map((f) => (
                  <li
                    onClick={() => handleFilter(f.keywork)}
                    key={f.keywork}
                    className="filter-item"
                    data-filter-item={f.keywork}
                  >
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="filter-info">
              {selectedKeyword && (
                <p className="filtered-results">
                  {selectedKeyword} projects, {projects.length} results
                </p>
              )}
            </div>
          </div>

          <div className="projects-container">
            {projects.map((project) => (
              <div key={project.title} className="project-box flex-column">
                <div className="project-profile-img row">
                  <img src={"/img/web-tech.jpg"} alt="" />
                </div>
                <div className="project-details flex-column">
                  <h2 className="project-title">{project.title}</h2>
                  <div
                    className="flex-row"
                    style={{
                      width: "100%",
                      justifyContent: "space-between",
                    }}
                  >
                    <span className="tech-used">{project.techUsed}</span>
                    <span className="project-links">
                      <a href="#">
                        Live <FontAwesomeIcon icon={faUpRightFromSquare} />
                      </a>
                      &nbsp;
                      <a href="#">
                        <FontAwesomeIcon
                          className="source-code"
                          icon={faGithub}
                          size="lg"
                        />
                      </a>
                    </span>
                  </div>
                  <p className="project-description">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="project-footer">
            <ul className="pagination flex-row"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
