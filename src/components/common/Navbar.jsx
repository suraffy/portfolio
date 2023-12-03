const Navbar = ({ navStyles, mainNavStyles, showMainNav, onNavbarToggle }) => {
  const logoImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;

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
              style={{ borderRadius: "50%" }}
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
