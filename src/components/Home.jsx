import { useState, useEffect } from "react";

<<<<<<< HEAD
import Navbar from "./common/Navbar";
import Hero from "./common/Hero";

const Home = () => {
=======
import Navbar from "./Navbar";
import Hero from "./Hero";

const Home = ({ colorMode, onChangeColor }) => {
>>>>>>> suraffy/main
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
<<<<<<< HEAD
    navStyles.backgroundColor = "#f8f8f8";
    navStyles.boxShadow = "0 1px 2px #ccc";
=======
    navStyles.backgroundColor = "var(--navbar-bg)";
    navStyles.boxShadow = "0 1px 2px var(--border-soft)";
>>>>>>> suraffy/main

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
<<<<<<< HEAD
      />

      <div className="container">
        <Hero />
=======
        onChangeColor={onChangeColor}
        colorMode={colorMode}
      />

      <div className="container">
        <Hero colorMode={colorMode} />
>>>>>>> suraffy/main
      </div>
    </header>
  );
};

export default Home;
