import React, {useState} from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  const [navMenu, setNavMenu] = useState(false);
  const handleNavMenu = () => setNavMenu(!navMenu);
  return (
    <div>
      <Navbar navMenu={navMenu} handleNavMenu={handleNavMenu}  />
      <Home navMenu={navMenu} />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
