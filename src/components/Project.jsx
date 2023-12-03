import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Project = ({ project }) => {
  return (
    <motion.div layout key={project.title} className="project-box flex-column">
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
    </motion.div>
  );
};

export default Project;
