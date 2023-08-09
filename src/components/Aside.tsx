import { NavLink } from "react-router-dom";

// štýly
import './Aside.scss'

const Aside = () => {
  return (
    <div className="aside">
        <NavLink className="project-link" to="/setekBooks">
          Projekt Books (Dávid Šetek)
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
    </div>
  )
}

export default Aside