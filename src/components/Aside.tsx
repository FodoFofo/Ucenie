import { NavLink } from "react-router-dom";

// štýly
import "./Aside.scss";

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
      <NavLink className="project-link" to="/setekNetflix">
        Projekt Netflix
      </NavLink>
      <NavLink className="project-link" to="/setekAppUseEffect1">
        Projekt useEffect 1
      </NavLink>
      <NavLink className="project-link" to="/setekAppUseEffect2">
        Projekt useEffect 2 (cleanUp function)
      </NavLink>
      <NavLink className="project-link" to="/setekAppApi">
        Projekt API
      </NavLink>
      <NavLink className="project-link" to="/setekAppMultipleReturns">
        Projekt Multiple Returns
      </NavLink>
      <NavLink className="project-link" to="/setekAppShowHide">
      Projekt Ukáž / skry
      </NavLink>
    </div>
  );
};

export default Aside;
