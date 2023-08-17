import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// štýly
import "./Aside.scss";

const Aside = () => {
  const reacti = document.querySelector(".reacti");
  useEffect(() => {
    console.log();
  }, []);

  const showHide = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const target = e.target as HTMLHeadingElement;
    const sibling = target.nextSibling as Element;

    if (sibling.classList.contains("hide")) sibling.classList.remove("hide");
    else sibling.classList.add("hide");
  };

  return (
    <div className="aside">
      <h2>Dávid Šetek</h2>
      <div className="david-setek">
        <h3 onClick={showHide}>React I</h3>
        <div className="reacti">
          <NavLink className="project-link" to="/setekBooks">
            Projekt Books
          </NavLink>
          <NavLink className="project-link" to="/setekHooks">
            Projekt Hooks (useState)
          </NavLink>
          <NavLink className="project-link" to="/setekTaskApp">
            Projekt Task App
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
          <NavLink className="project-link" to="/setekNetflix2">
            Projekt preklikavanie filmov
          </NavLink>
          <NavLink className="project-link" to="/setekFAQ">
            Projekt FAQ
          </NavLink>
          <NavLink className="project-link" to="/setekSlider">
            Projekt Slider
          </NavLink>
          <NavLink className="project-link" to="/setekPokrocilySlider">
            Projekt Pokročilý Slider
          </NavLink>
        </div>

        <h3 onClick={showHide}>React II</h3>
        <div className="reactii">
          <h5>ahoj</h5>
          <h5>ahoj</h5>
          <h5>ahoj</h5>
          <h5>ahoj</h5>
          <h5>ahoj</h5>
        </div>

        <h3 onClick={showHide}>React III</h3>
        <div className="reactiii">
          <h5>ahoj</h5>
          <h5>ahoj</h5>
          <h5>ahoj</h5>
          <h5>ahoj</h5>
        </div>
      </div>
    </div>
  );
};

export default Aside;
