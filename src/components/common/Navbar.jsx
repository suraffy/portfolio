import { useState } from "react";

const Navbar = ({ navStyles, mainNavStyles, showMainNav, onNavbarToggle }) => {
  const logoImgUrl = `${process.env.PUBLIC_URL}/img/surafel.jpg`;
  const [colorMode, setColorMode] = useState("dark");

  const lightBodyBg = "#fff";
  const lightBoxBg = "#000";
  const lightTextColor = "#333";
  const lightLightShadow = "#ccc";
  const lightShadow = "#888";
  const lightHardShasow = "#666";
  const lightFooterBg = "#f4f4f4";

  const changeColor = () => {
    // Get the root element
    var root = document.documentElement;

    // Change the value of the CSS variable
    if (colorMode === "dark") {
      root.style.cssText =
        "--deafult-white: #000; --body-bg: #111;--box-bg: #333;--text-color: #f6f6f6;--light-shadow: #333;--shadow: #222;--hard-shadow: #111;--footer-bg: #333;";

      return;
    }

    root.style.cssText =
      "--body-bg: #fff;--box-bg: #f6f6f6;--text-color: #333;--light-shadow: #ccc;--shadow: #888;--hard-shadow: #666;--footer-bg: #f4f4f4;";
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
              DarkMode
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
