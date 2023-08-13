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
        <NavLink className="project-link" to="/setekPocitadlo">
          Projekt Počítadlo
        </NavLink>
    </div>
  )
}

export default Aside