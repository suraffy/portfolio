import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  const imgUrl = `${process.env.PUBLIC_URL}/img/projects/`;

  return (
    <motion.div layout key={project.title} className="project-box flex-column">
      <div className="project-profile-img row">
        <img src={imgUrl + project.img} alt="" />
      </div>
      <div className="project-details flex-column">
        <h2 className="project-title">{project.title}</h2>
        <div
          className="flex-row"
          style={{
            width: "100%",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <span className="tech-used">{project.techUsed}</span>
          <span className="project-links flex-row">
            {project.demoLink && (
              <a
                href={project.demoLink || "#projects"}
                target="_blank"
                rel="noreferrer"
                className="flex-row"
                style={{ flexWrap: "nowrap" }}
                title="Show Live Demo"
              >
                <span>Live</span>{" "}
                <FontAwesomeIcon
                  icon={faUpRightFromSquare}
                  size="xs"
                  style={{ paddingLeft: "2px" }}
                />
              </a>
            )}
            &nbsp;
            <a
              href={project.sourceCodeLink}
              target="_blank"
              rel="noreferrer"
              title="View Source Code"
            >
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
    </motion.div>
  );
};

export default Project;
