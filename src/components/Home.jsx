import webLogo from "../img/web-dev-logo-colored.svg";
import bannerImg from "../img/laptop.png";

const Home = () => {
  const imgUrlLogo = webLogo;
  const imgUrlBanner = bannerImg;

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

      <div className="container">
        <div className="banner flex-column">
          <div className="banner-img">
            <img src={imgUrlBanner} alt="Banner Image" />
          </div>

          <div className="banner-text">
            <h2>Surafel Araya</h2>
            <p>Software Developer & Web Designer</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;
