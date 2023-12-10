import { useState, useEffect } from "react";

import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./styles/style.css";
import "./styles/queries.css";

function App() {
  const root = document.documentElement;
  const darkModeColors =
    "--background: #292929; --surface: #121212; --navbar-bg: #1f1f1f; --box-bg: #1f1f1f; --menu-bg: #2d2d2d; --menu-bg-hover: #353535; --btn-bg: #242424; --btn-bg-hover: #1c1c1c; --text-color: #e1e1e1; --text-color-secondary: #a5a5a5; --text-color-bg: #e8e8e8; --border-soft: #333; --border-medium: #777; --border-hard: #999; --error-text: rgb(199, 0, 0);";
  const lightModeColors =
    "--background: #fff; --surface: #f8f8f8; --navbar-bg: #f8f8f8; --box-bg: #f6f6f6; --menu-bg: #f6f6f6; --menu-bg-hover: #f0f0f0; --btn-bg: #efefef; --btn-bg-hover: #e4e4e4; --text-color: #242424; --text-color-secondary: #444; --text-color-bg: #222; --border-soft: #ccc; --border-medium: #888; --border-hard: #666; --error-text: rgb(199, 0, 0);";

  const [colorMode, setColorMode] = useState("dark");

  useEffect(() => {
    const savedColorMode = localStorage.getItem("colorMode")
      ? localStorage.getItem("colorMode")
      : "light";

    if (savedColorMode === "dark") {
      setColorMode("light");
      root.style.cssText = darkModeColors;

      return;
    }

    setColorMode("dark");
    root.style.cssText = lightModeColors;
  }, []);

  const handleChangeColor = () => {
    if (colorMode === "dark") {
      setColorMode("light");
      root.style.cssText = darkModeColors;

      localStorage.setItem("colorMode", "dark");

      return;
    }

    setColorMode("dark");
    root.style.cssText = lightModeColors;

    localStorage.setItem("colorMode", "light");
  };

  return (
    <div>
      <Home colorMode={colorMode} onChangeColor={handleChangeColor} />
      <Skills />
      <Projects />
      <Contact />
      <Footer colorMode={colorMode} />
    </div>
  );
}

export default App;
