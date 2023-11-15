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
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#my-skills">My Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="" target="_blank">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <div className="container">
        <div className="banner flex-column">
          <div className="banner-img">
            <img src={imgUrlBanner} alt="Banner Image" />
          </div>

          <div className="banner-text">
            <h2>Surafel Araya</h2>
            <p>Software Developer & Web Designer</p>
          </div>
        </div>
      </div> */}

      <div className="container">
        <div className="hero-container flex-row">
          <div className="hero-content">
            <span className="small-text">Hello</span>
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
                  href="githubAccountUrl"
                  target="_blank"
                  className="flex-column"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                  {/* <span>GitHub</span> */}
                </a>
                <a
                  href="githubAccountUrl"
                  target="_blank"
                  className="flex-column"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  {/* <span>LinkedIn</span> */}
                </a>
                <a
                  href="githubAccountUrl"
                  target="_blank"
                  className="flex-column"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                  {/* <span>Twitter</span> */}
                </a>
              </div>
            </div>
          </div>

          <div className="hero-image-container">
            <img
              src={"/img/surafel-transparent.png"}
              width={"300px"}
              alt="Surafel Araya"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
