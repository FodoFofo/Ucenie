// komponenty
import Aside from "../../Aside";
import AllTasks from "./AllTasks";

// štýly
import "./AppTask.scss";

const AppTask = () => {
  return (
    <div className="app-task">
      <Aside />
      <div className="all-tasks">
        <header>
          <h1>Projekt Task App</h1>
        </header>
        <main>
          <AllTasks />
        </main>
        <footer>
          Vytvorené podľa kurzu od Davida Šeteka na{" "}
          <a href="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx">
            youtube
          </a>{" "}
          lekcie 27.-36. - prerobené do TypeScript
        </footer>
      </div>
    </div>
  );
};

export default AppTask;
