// komponenty
import Aside from "../../Aside";
import Buttons from "./Buttons";

// štýly
import "./AppHooks.scss";

const AppHooks = () => {
  return (
    <div className="app-hooks">
      <Aside />
      <div className="hooks">
        <header>
          <h1>Projekt Hooks</h1>
        </header>
        <main>
          <Buttons />
        </main>
        <footer>
          Vytvorené podľa kurzu od Davida Šeteka na{" "}
          <a href="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx">
            youtube
          </a>{" "}
          lekcie 18.-26. - prerobené do TypeScript
        </footer>
      </div>
    </div>
  );
};

export default AppHooks;
