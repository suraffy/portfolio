import { useState, useEffect } from "react";

import Navbar from "./common/Navbar";
import Hero from "./common/Hero";

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMainNav, setShowMainNav] = useState(false);
  const [colorMode, setColorMode] = useState("dark");

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
    navStyles.backgroundColor = "var(--navbar-bg)";
    navStyles.boxShadow = "0 1px 2px var(--border-soft)";

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

  const handleChangeColor = () => {
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
    <header id="main-header">
      <Navbar
        navStyles={navStyles}
        mainNavStyles={mainNavStyles}
        showMainNav={showMainNav}
        onNavbarToggle={handleNavbarToggler}
        onChangeColor={handleChangeColor}
      />

      <div className="container">
        <Hero />
      </div>
    </header>
  );
};

export default Home;
