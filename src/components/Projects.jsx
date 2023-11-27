import { useState } from "react";

import Project from "./Project";
import Filter from "./common/Filter";

import projectsList from "../services/projectsList";
import filterItems from "../services/filterItems";

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [filterKeyword, setFilterKeyword] = useState(null);

  const handleFilter = (keyword) => {
    const filterItem = filterItems.find((item) => item.keyword === keyword);
    setFilterKeyword(filterItem);

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
              <Filter filterKeyword={filterKeyword} onFilter={handleFilter} />
            </div>

            {filterKeyword && (
              <p className="filter-info">{projects.length} results</p>
            )}
          </div>

          <div className="projects-container">
            {projects.map((project) => (
              <Project key={project.title} project={project} />
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
