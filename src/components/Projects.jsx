import projectsList from "../services/projectsList";

const Projects = () => {
  console.log(projectsList);

  const filterItems = [
    { keywork: "all", label: "All" },
    { keywork: "front-end", label: "Front-End" },
    { keywork: "full-stack", label: "Back-End" },
    { keywork: "javascript", label: "Plain JavaScript" },
    { keywork: "css-animation", label: "CSS-Animation" },
  ];

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
              <p className="filtered-results">All projects, 7 results</p>
            </div>
          </div>

          <div className="projects-container flex-column">
            {projectsList.map((project) => (
              <div key={project.title} className="project-box flex-row">
                <div className="project-profile-img row">
                  <img src={"/img/web-tech.jpg"} alt="" />
                </div>
                <div className="project-details flex-column">
                  <h2 className="project-title">{project.title}</h2>
                  {/* <span className="project-type">{project.type}</span> */}
                  <p className="project-description">{project.desc}</p>
                  {/* <div className="project-links flex-row">
                    <a href="" target="_blank" className="btn">
                      Live Preview
                    </a>
                    <a href="" target="_blank">
                      Source Code
                    </a>
                  </div> */}
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
