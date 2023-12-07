import React, { createContext, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Navigation from "./components/Navigation";
import { Home } from "./components/Home";
import { About } from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './global.scss'

interface NavigationContextState {
  isNavVisible: boolean;
  toggleNav: () => void;
}

const defaultState: NavigationContextState = {
  isNavVisible: false,
  toggleNav: () => {},
};

export const NavigationContext =
  createContext<NavigationContextState>(defaultState);

const App = () => {
  const [isNavVisible, setNavVisible] = useState(false);
  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <NavigationContext.Provider value={{ isNavVisible, toggleNav }}>
      <div className="dark-mode">
        <Navbar />
        <Home />
        <About />
        <Skills/>
        <Projects/>
        <Contact/>
        <Navigation />
      </div>
    </NavigationContext.Provider>
  );
};

export default App;
