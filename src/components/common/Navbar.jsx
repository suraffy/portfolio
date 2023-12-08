import { useState } from "react";

const Navbar = ({ navStyles, mainNavStyles, showMainNav, onNavbarToggle }) => {
  const logoImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;
  const [colorMode, setColorMode] = useState("dark");

  const changeColor = () => {
    var root = document.documentElement;

    if (colorMode === "dark") {
      setColorMode("light");
      root.style.cssText =
        "--background: #292929; --surface: #121212; --navbar-bg: #292929; --box-bg: #1f1f1f; --menu-bg: #2d2d2d; --menu-bg-hover: #353535; --btn-bg: #242424; --btn-bg-hover: #1c1c1c; --text-color: #e1e1e1; --text-color-secondary: #a5a5a5; --text-color-bg: #e8e8e8; --border-soft: #333; --border-medium: #777; --border-hard: #999; --error-text: rgb(199, 0, 0);";

      return;
    }

    setColorMode("dark");
    root.style.cssText =
      "--background: #fff; --surface: #f8f8f8; --navbar-bg: #f8f8f8; --box-bg: #f6f6f6; --menu-bg: #f6f6f6; --menu-bg-hover: #f0f0f0; --btn-bg: #efefef; --btn-bg-hover: #e4e4e4; --text-color: #242424; --text-color-secondary: #444; --text-color-bg: #222; --border-soft: #ccc; --border-medium: #888; --border-hard: #666; --error-text: rgb(199, 0, 0);";
  };

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

          <div className="light-dark-mode">
            <button className="btn" onClick={changeColor}>
              {colorMode} Mode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
