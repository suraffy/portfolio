const Navbar = ({
  navStyles,
  mainNavStyles,
  showMainNav,
  onNavbarToggle,
  onChangeColor,
  colorMode,
}) => {
  const logoImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;
  const darkMode = `${process.env.PUBLIC_URL}/img/dark-mode.svg`;
  const lightMode = `${process.env.PUBLIC_URL}/img/light-mode.svg`;

  return (
    <nav style={navStyles}>
      <div className="container">
        <div className="navbar flex-row">
          <div className="logo-container">
            <img
              src={logoImgUrl}
              className="navbar-brand"
              id="logo-img"
              alt="web development"
              onClick={() => window.scrollTo(0, 0)}
            />
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

          <div className="light-dark-mode">
            <div className="colorMode-toggler" onClick={onChangeColor}>
              <img
                src={colorMode === "light" ? lightMode : darkMode}
                width="28px"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
