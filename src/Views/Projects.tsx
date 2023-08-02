import { Routes, Route, NavLink } from "react-router-dom";

// styles
import "./Projects.scss";

// ------
import Pokusny from "../components/Pokusny";

const Projects = () => {
  return (
    <div className="projects">
      <header>
        <NavLink className="project-link" to="/react">
          React
        </NavLink>
        <NavLink className="project-link" to="/reactI">
          React I - 
        </NavLink>
        <NavLink className="project-link" to="/reactII">
          React 2 pojďme vyvíjet pokročilejší aplikace
        </NavLink>
        <NavLink className="project-link" to="/reactIII">
          React 3 posuňme své znalosti ještě dál
        </NavLink>
      </header>
    </div>
  );
};

export default Projects;
