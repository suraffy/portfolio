import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import profilePic from "../img/surafel.jpg";
import webLogo from "../img/web-dev-logo-colored.svg";
import bannerImg from "../img/laptop.png";

const Home = () => {
  const imgUrlLogo = webLogo;
  const imgUrlBanner = bannerImg;
  const imgUrlProfile = profilePic;

  const githubAccountUrl = "https://github.com/suraffy";
  const linkedinAccountUrl = "https://www.linkedin.com/in/surafel-araya/";
  const twitterAccountUrl = "https://twitter.com/surafelaraya";

  return (
    <header id="main-header">
      <nav>
        <div className="container">
          <div className="navbar flex-row">
            <div className="logo-container">
              <img
                src={imgUrlLogo}
                className="navbar-brand"
                id="logo-img"
                alt="web development"
              />
            </div>

            <div className="navbar-toggler">
              <span className="toggler-bar"></span>
              <span className="toggler-bar"></span>
              <span className="toggler-bar"></span>
            </div>

            <ul className="main-nav flex-row">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#my-skills">My Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="hero-container flex-column">
          <div className="hero-image-container">
            <img src={"/img/surafel-transparent.png"} alt="Surafel Araya" />
          </div>

          <div className="hero-content">
            <span className="small-text">Hello,</span>
            <h1 className="hero-title">
              <span className="thin-text">I'm </span>
              <span>Surafel Araya </span> <br />
              <span>a </span>
              <span className="thin-text">Full-stack Developer</span>
            </h1>

            <div className="hero-detail">
              <p className="hero-desc">
                Expertise in developing single-page applications using React.js
                and Vue.js, building back-end services with Node.js and
                Express.js.
              </p>
              <div className="hero-contact flex-row">
                <a
                  href={githubAccountUrl}
                  target="_blank"
                  className="flex-column"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a
                  href={linkedinAccountUrl}
                  target="_blank"
                  className="flex-column"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
                <a
                  href={twitterAccountUrl}
                  target="_blank"
                  className="flex-column"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
