import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Hero = ({ colorMode }) => {
  const profileImgUrl = `${process.env.PUBLIC_URL}/img/profile-compressed.png`;
  const loadingImgUrl = `${process.env.PUBLIC_URL}/img/Spin-1s-200px.svg`;

  const githubAccountUrl = "https://github.com/suraffy";
  const linkedinAccountUrl = "https://www.linkedin.com/in/surafel-araya/";
  const twitterAccountUrl = "https://twitter.com/surafelaraya";

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = profileImgUrl;

    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [profileImgUrl]);

  return (
    <div className="hero-container flex-column">
      <div className="hero-content flex-column">
        <div className="hero-header flex-column">
          <div className="hero-title">
            <span className="small-text">Hello</span>
            <h1 className="hero-heading">
              <span className="thin-text">I'm </span>
              <span>Surafel Araya </span> <br />
              <span>a </span>
              <span className="thin-text">Full-stack Developer</span>
            </h1>
          </div>

          {isImageLoaded ? (
            <div className="hero-image">
              <img src={profileImgUrl} alt="Surafel" />
            </div>
          ) : (
            <div className="animated-loading">
              <img src={loadingImgUrl} alt="Loading..." />
            </div>
          )}
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
              rel="noreferrer"
              className="flex-column"
            >
              <FontAwesomeIcon
                icon={faGithub}
                style={colorMode === "light" ? { color: "#f4f4f4" } : {}}
                size="lg"
              />
            </a>
            <a
              href={linkedinAccountUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-column"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              href={twitterAccountUrl}
              target="_blank"
              rel="noreferrer"
              className="flex-column"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
