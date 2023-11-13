import projectsList from "../services/projectsList";

const Projects = () => {
  console.log(projectsList);

  return (
    <section id="projects">
      <div className="container">
        <div className="flex-column">
          <h2 className="h2-underline">Let's See My Work</h2>

          <div className="project-header flex-column">
            <div className="filter-project flex-row">
              <h4>Filter</h4>
              <ul className="filter-list flex-row">
                <li className="filter-item" data-filter-item="All">
                  All
                </li>
                <li className="filter-item" data-filter-item="Full-Stack">
                  Full-Stack
                </li>
                <li className="filter-item" data-filter-item="Front-End">
                  Front-End
                </li>
                <li className="filter-item" data-filter-item="Plain-JavaScript">
                  Plain JavaScript
                </li>
                <li className="filter-item" data-filter-item="CSS-Animation">
                  CSS Animation
                </li>
              </ul>
            </div>

            <div className="filter-info">
              <p className="filtered-results">All projects, 7 results</p>
            </div>
          </div>

          <div className="projects-container flex-column"></div>

          <div className="project-footer">
            <ul className="pagination flex-row"></ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
