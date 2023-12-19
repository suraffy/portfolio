import { useState, useEffect } from "react";

const Navbar = ({
  navStyles,
  mainNavStyles,
  showMainNav,
  onNavbarToggle,
  onChangeColor,
  colorMode,
}) => {
  const logoImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;
  const loadingImgUrl = `${process.env.PUBLIC_URL}/img/Rolling-1s-40px.svg`;
  const darkMode = `${process.env.PUBLIC_URL}/img/dark-mode.svg`;
  const lightMode = `${process.env.PUBLIC_URL}/img/light-mode.svg`;

  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = logoImgUrl;

    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [logoImgUrl]);

  return (
    <nav style={navStyles}>
      <div className="container">
        <div className="navbar flex-row">
          <div className="logo-container">
            {isImageLoaded ? (
              <img
                src={logoImgUrl}
                alt=""
                className="navbar-brand"
                id="logo-img"
                onClick={() => window.scrollTo(0, 0)}
              />
            ) : (
              <img src={loadingImgUrl} alt="" />
            )}
          </div>

          <div className="navbar-toggler" onClick={onNavbarToggle}>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </div>

          <ul
            className={`main-nav flex-row ${showMainNav && "show-main-nav"}`}
            style={mainNavStyles}
          >
            <li>
              <a href="#home">Home</a>
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

          <div className="light-dark-mode">
            <div className="colorMode-toggler" onClick={onChangeColor}>
              <img
                src={colorMode === "light" ? lightMode : darkMode}
                alt=""
                width="24px"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
