import { useState } from "react";

import Project from "./Project";
import Filter from "./common/Filter";
import Pagination from "./common/Pagination";
import { paginate } from "../utils/paginate";

import projectsList from "../services/projectsList";
import filterItems from "../services/filterItems";

const Projects = () => {
  const [projects, setProjects] = useState(projectsList);
  const [filterKeyword, setFilterKeyword] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

  const handleFilter = (keyword) => {
    const filterItem = filterItems.find((item) => item.keyword === keyword);
    setFilterKeyword(filterItem.keyword);
    setCurrentPage(1);

    if (keyword === "all") {
      setProjects(projectsList);
      return;
    }

    const filteredProjects = projectsList.filter((p) => p.type === keyword);
    setProjects(filteredProjects);
  };

  const handlePageChage = (page) => {
    if (currentPage === page) return;

    setCurrentPage(page);
  };

  const itemsCount = projects.length;
  const projectsInPage = paginate(projects, currentPage, pageSize);

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
            {projectsInPage.map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>

          <div className="project-footer">
            <Pagination
              itemsCount={itemsCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
