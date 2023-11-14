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

import profilePic from "../img/surafel.jpg";

const Footer = () => {
  const imgUrlProfile = profilePic;

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
              src={imgUrlProfile}
              alt="Surafel Araya"
              className="footer-about-me-img"
            />
            <div className="footer-about-me-text">
              <h4>Surafel Araya</h4>
              <p>
                Software developer and web designer. Passionate about making
                living easier through programming.
              </p>
            </div>
          </div>

          <div className="footer-courses-codes flex-row">
            <div className="footer-courses">
              <h4>Courses</h4>
              <ul className="footer-courses-list">
                <li>
                  <a href={youtubeAccountUrl} target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="lg" />
                    YouTube
                  </a>
                </li>

                <li>
                  <a href={mediumAccountUrl} target="_blank">
                    <FontAwesomeIcon icon={faMedium} size="lg" />
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-codes">
              <h4>Codes</h4>
              <ul className="footer-codes-list">
                <li>
                  <a href={githubAccountUrl} target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                    GitHub
                  </a>
                </li>

                <li>
                  <a href={codepenAccountUrl} target="_blank">
                    <FontAwesomeIcon icon={faCodepen} size="lg" />
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
                <a href={linkedinAccountUrl} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  LinkedIn
                </a>
              </li>

              <li>
                <a href={twitterAccountUrl} target="_blank">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  Twitter
                </a>
              </li>

              <li>
                <a href={stackoverflowAccountUrl} target="_blank">
                  <FontAwesomeIcon icon={faReddit} size="lg" />
                  Stackoverflow
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <p className="web-developer-name flex-column">
          Designed and Developed by&nbsp;<a href="#about-me">Surafel Araya</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
