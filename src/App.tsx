import { Route, Routes } from "react-router-dom";

// štýly
import "./App.scss";

// views
import Main from "./Views/Main";
import Projects from "./Views/Projects";
import Links from "./Views/Links";

// komponenty
import Navigation from "./components/Navigation";
import AppBooks from "./components/Setek/AppBooks/AppBooks";
import Buttons from "./components/Setek/AppHooks/Buttons";
import AllTasks from "./components/Setek/AppTask/AllTasks";
import Project from "./components/Project";
import AppPocitadlo from "./components/Setek/AppPocitadlo/AppPocitadlo";
import Movie from "./components/Setek/AppNetflix/Movie";
import AppUseEffect1 from "./components/Setek/AppUseEffect/AppUseEffect1";
import AppUseEffect2 from "./components/Setek/AppUseEffect/AppUseEffect2";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/links" element={<Links />} />
          <Route
            path="/setekBooks"
            element={
              <Project
                title="Projekt Books"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="8. - 17."
              >
                <AppBooks />
              </Project>
            }
          />
          <Route
            path="/setekHooks"
            element={
              <Project
                title="Projekt Hooks"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="18. - 26."
              >
                <Buttons />
              </Project>
            }
          />
          <Route
            path="/setekTaskApp"
            element={
              <Project
                title="Projekt Task App"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="27. - 36."
              >
                <AllTasks />
              </Project>
            }
          />
          <Route
            path="/setekPocitadlo"
            element={
              <Project
                title="Projekt Počítadlo"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="37. - 43."
              >
                <AppPocitadlo />
              </Project>
            }
          />
          <Route
            path="/setekNetflix"
            element={
              <Project
                title="Projekt Netflix"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="44. - 53."
              >
                <Movie />
              </Project>
            }
          />
          <Route
            path="/setekAppUseEffect1"
            element={
              <Project
                title="Projekt useEffect 1"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="54. - 61."
              >
                <AppUseEffect1 />
              </Project>
            }
          />
          <Route
            path="/setekAppUseEffect2"
            element={
              <Project
                title="Projekt useEffect 2"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="62. - 64."
              >
                <AppUseEffect2 />
              </Project>
            }
          />
        </Routes>
      </main>

      <footer>&copy; Foďo 2023</footer>
    </div>
  );
};

export default App;
