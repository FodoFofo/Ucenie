import { NavLink } from "react-router-dom";

// štýly
import './Aside.scss'

const Aside = () => {
  return (
    <div className="aside">
        <NavLink className="project-link" to="/setekBooks">
          Projekt Books (Dávid Šetek)
        </NavLink>
        <NavLink className="project-link" to="/setekHooks">
          Projekt Hooks (useState) (Dávid Šetek)
        </NavLink>
        <NavLink className="project-link" to="/setekTaskApp">
          Projekt Task App (Dávid Šetek)
        </NavLink>
        <NavLink className="project-link" to="/reactIII">
          React 3 posuňme své znalosti ještě dál
        </NavLink>
    </div>
  )
}

export default Aside