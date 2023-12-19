import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
  faYoutube,
  faMedium,
  faReddit,
} from "@fortawesome/free-brands-svg-icons";

<<<<<<< HEAD
import profilePic from "../img/surafel.jpg";

const Footer = () => {
  const imgUrlProfile = profilePic;
=======
const Footer = ({ colorMode }) => {
  const profileImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;
>>>>>>> suraffy/main

  const twitterAccountUrl = "https://twitter.com/surafelaraya";
  const linkedinAccountUrl = "https://www.linkedin.com/in/surafel-araya/";
  const githubAccountUrl = "https://github.com/suraffy";
  const codepenAccountUrl = "https://codepen.io/suraffy";
  const youtubeAccountUrl = "https://www.youtube.com/@suraffy";
  const mediumAccountUrl = "https://medium.com/@suraffy";
  const stackoverflowAccountUrl =
    "https://stackoverflow.com/users/12912584/sura";

  return (
    <footer>
      <div className="container">
        <div className="footer-profile flex-column">
          <div className="footer-about-me flex-row">
            <img
<<<<<<< HEAD
              src={imgUrlProfile}
=======
              src={profileImgUrl}
>>>>>>> suraffy/main
              alt="Surafel Araya"
              className="footer-about-me-img"
            />
            <div className="footer-about-me-text">
              <h4>Surafel Araya</h4>
              <p>
<<<<<<< HEAD
                Software developer and web designer. Passionate about making
                living easier through programming.
=======
                Full-stack software developer and web designer. Passionate about
                innovative solutions.
>>>>>>> suraffy/main
              </p>
            </div>
          </div>

          <div className="footer-courses-codes flex-row">
            <div className="footer-courses">
              <h4>Courses</h4>
              <ul className="footer-courses-list">
                <li>
                  <a href={youtubeAccountUrl} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                    YouTube
                  </a>
                </li>

                <li>
                  <a href={mediumAccountUrl} target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <FontAwesomeIcon icon={faMedium} size="lg" />
=======
                    <FontAwesomeIcon
                      icon={faMedium}
                      style={colorMode === "light" ? { color: "#f4f4f4" } : {}}
                      size="lg"
                    />
>>>>>>> suraffy/main
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-codes">
              <h4>Codes</h4>
              <ul className="footer-codes-list">
                <li>
                  <a href={githubAccountUrl} target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <FontAwesomeIcon icon={faGithub} size="lg" />
=======
                    <FontAwesomeIcon
                      icon={faGithub}
                      style={colorMode === "light" ? { color: "#f4f4f4" } : {}}
                      size="lg"
                    />
>>>>>>> suraffy/main
                    GitHub
                  </a>
                </li>

                <li>
                  <a href={codepenAccountUrl} target="_blank" rel="noreferrer">
<<<<<<< HEAD
                    <FontAwesomeIcon icon={faCodepen} size="lg" />
=======
                    <FontAwesomeIcon
                      icon={faCodepen}
                      style={colorMode === "light" ? { color: "#f4f4f4" } : {}}
                      size="lg"
                    />
>>>>>>> suraffy/main
                    CodePen
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-active-on">
            <h4>Active on</h4>
            <ul className="footer-active-on-list">
              <li>
                <a href={linkedinAccountUrl} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a href={twitterAccountUrl} target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  Twitter
                </a>
              </li>

              <li>
                <a
                  href={stackoverflowAccountUrl}
                  target="_blank"
                  rel="noreferrer"
                >
<<<<<<< HEAD
                  <FontAwesomeIcon icon={faReddit} size="lg" />
=======
                  <FontAwesomeIcon
                    icon={faReddit}
                    style={colorMode === "light" ? { color: "#f4f4f4" } : {}}
                    size="lg"
                  />
>>>>>>> suraffy/main
                  Stackoverflow
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="web-developer-name flex-column">
<<<<<<< HEAD
          Designed and Developed by&nbsp;<a href="#">Surafel Araya</a>
=======
          Designed and Developed by&nbsp;
          <a href="/">Surafel Araya</a>
>>>>>>> suraffy/main
        </p>
      </div>
    </footer>
  );
};

export default Footer;
