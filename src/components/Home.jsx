import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Navbar from "./common/Navbar";

const Home = () => {
  const imgUrlLogo = "/img/surafel.jpg";

  const githubAccountUrl = "https://github.com/suraffy";
  const linkedinAccountUrl = "https://www.linkedin.com/in/surafel-araya/";
  const twitterAccountUrl = "https://twitter.com/surafelaraya";

  const [scrolling, setScrolling] = useState(false);
  const [showMainNav, setShowMainNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      setScrolling(scrollTop > 80);
      setShowMainNav(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navStyles = {};
  const mainNavStyles = {};

  if (scrolling) {
    navStyles.padding = "4px 0px";
    navStyles.backgroundColor = "#f8f8f8";
    navStyles.boxShadow = "0 1px 2px #ccc";

    mainNavStyles.top = "48px";
  } else {
    navStyles.padding = "25px 0px";
    navStyles.backgroundColor = "transparent";
    navStyles.boxShadow = "none";

    mainNavStyles.top = "70px";
  }

  const handleNavbarToggler = () => {
    setShowMainNav((prev) => !prev);
  };

  return (
    <header id="main-header">
      <Navbar
        navStyles={navStyles}
        mainNavStyles={mainNavStyles}
        showMainNav={showMainNav}
        onNavbarToggle={handleNavbarToggler}
      />

      <div className="container">
        <div className="hero-container flex-column">
          <div className="hero-content flex-column">
            <div className="hero-header flex-column">
              <div className="hero-image">
                <img src={imgUrlLogo} alt="Surafel" />
              </div>
              <div className="hero-title">
                <span className="small-text">Hello</span>
                <h1 className="hero-heading">
                  <span className="thin-text">I'm </span>
                  <span>Surafel Araya </span> <br />
                  <span>a </span>
                  <span className="thin-text">Full-stack Developer</span>
                </h1>
              </div>
            </div>

            <div className="hero-details">
              <p className="hero-desc">
                Expertise in developing single-page applications using React and
                Vue, building back-end services with Node and Express.
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
