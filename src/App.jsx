import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "../public/css/index.css";
import BasicSpeedDial from "./component/BasicSpeedDial"; // Import the SpeedDial component
import Bottom from "./component/Bottom";
import CustomCursor from "./component/CustomCursor";
import ThreeBackground from "./component/ThreeBackground";
import About from "./files/About";
import Contact from "./files/Contact";
import Project from "./files/Project";
import Resume from "./files/Resume";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(time);
  }, []);
  useEffect(() => {
    window.addEventListener('load', () => {
      document.getElementById('preloader').classList.add('preloaded');
    });
  }, []);
  return (
    <Router>
      {isLoading ? (
        <div id="preloader">
          <div className="loader_line"></div>
        </div>
      ) : (
        <>
          <CustomCursor />
          <ThreeBackground />
          <Bottom />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>

          <BasicSpeedDial />
        </>
      )}
    </Router>
  );
}

export default App;
