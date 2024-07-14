// src/App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import DSATracker from "./Components/dsa-project/dsa-tracker/src/App.js"; //Import the DSATracker
import Footer from "./Components/Footer.js";
import Hero from "./Components/Hero.js";
import Navbar from "./Components/Navbar.js";
import Projects from "./Components/Projects.js";
import PuzzleGame from './Components/puzzle-game/src/App.js'; // Import the Puzzle Game component
import Skills from "./Components/Skills.js";
export default function App() {
  return (
    <Router>
      <div style={{ backgroundColor: "black" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/dsa-tracker" element={<DSATracker />} />
          <Route path="/puzzle-game" element={<PuzzleGame />} />
        </Routes>
      </div>
    </Router>
  );
}
