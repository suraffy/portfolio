import { useState, useEffect } from "react";

import Navbar from "./common/Navbar";
import Hero from "./common/Hero";

const Home = () => {
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
        <Hero />
      </div>
    </header>
  );
};

export default Home;
