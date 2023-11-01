import { NavLink } from "react-router-dom";

// štýly
import "./Aside.scss";
import { CollapsibleMenu } from "./CollapsibleMenu";

const Aside = () => {
  const showHide = (e: React.MouseEvent<HTMLHeadingElement>) => {
    const target = e.target as HTMLHeadingElement;
    const sibling = target.nextSibling as Element;

    if (sibling.classList.contains("hide")) {
      sibling.classList.remove("hide");
      target.textContent =
        target.textContent?.replace("⤵", "⤴") || target.textContent;
    } else {
      sibling.classList.add("hide");
      target.textContent =
        target.textContent?.replace("⤴", "⤵") || target.textContent;
    }
  };

  return (
    <div className="aside">
      <h2 onClick={showHide}>Dávid Šetek ⤴</h2>
      <div className="david-setek">
        <CollapsibleMenu title="React I" isOpenDefault={false}>
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
            Projekt Hooks (useEffect 1)
          </NavLink>
          <NavLink className="project-link" to="/setekAppUseEffect2">
            Projekt Hooks (useEffect 2 (cleanUp function))
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
        </CollapsibleMenu>

        <CollapsibleMenu title="React II">
          <NavLink className="project-link" to="/setekFormular">
            Formulár
          </NavLink>
          <NavLink className="project-link" to="/setekPokrocilyFormular">
            Pokročilý formulár
          </NavLink>
          <NavLink className="project-link" to="/setekGeneretorLorem">
            Generátor Lorem Ipsum
          </NavLink>
          <NavLink className="project-link" to="/setekHooksUseRef">
            Projekt Hooks (useRef)
          </NavLink>
          <NavLink className="project-link" to="/setekMenu">
            Projekt Menu<span style={{color:"red"}}> - DOROBIŤ</span>
          </NavLink>
          <NavLink className="project-link" to="/setekHooksUseReducer">
            Projekt Hooks (useReducer)<span style={{color:"red"}}> - DOROBIŤ</span>
          </NavLink>
        </CollapsibleMenu>

        <CollapsibleMenu title="React III" isOpenDefault={false} >
        <h5>doplniť</h5>
        </CollapsibleMenu>

        
      </div>
    </div>
  );
};

export default Aside;
