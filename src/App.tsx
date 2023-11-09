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
import AppApi from "./components/Setek/AppAPI/AppApi";
import AppMultipleReturns from "./components/Setek/AppMultipleReturns/AppMultipleReturns";
import AppShowHide from "./components/Setek/AppShowHide/AppShowHide";
import AppNetflix2 from "./components/Setek/AppNetflix2/AppNetflix2";
import AppFAQ from "./components/Setek/AppFAQ/AppFAQ";
import AppSlider from "./components/Setek/AppSlider/AppSlider";
import AppPokrocilySlider from "./components/Setek/AppPokrocilySlider/AppPokrocilySlider";
import AppForm from "./components/Setek/AppForm/AppForm";
import AppAdvancedForm from "./components/Setek/AppAdvancedForm/AppAdvancedForm";
import AppGeneretorLorem from "./components/Setek/AppGeneretorLorem/AppGeneretorLorem";
import AppHooksUseRef from "./components/Setek/AppHooksUseRef/AppHooksUseRef";
import AppMenu from './components/Setek/AppMenu/AppMenu'
import AppHooksUseReducer from "./components/Setek/AppHooksUseReducer/AppHooksUseReducer";
import AppProps1 from "./components/Setek/AppProps1/AppProps1";
import AppUseContext from "./components/Setek/AppUseContext/AppUseContext";
import AppCustomHook from "./components/Setek/AppCustomHook/AppCustomHook";
import AppPropsValidation from "./components/Setek/AppPropsValidation/AppPropsValidation";
import AppSearch from "./components/Setek/AppSearch/AppSearch";

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
          <Route
            path="/setekAppApi"
            element={
              <Project
                title="Projekt API"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="65. - 68. + 69. - 72."
              >
                <AppApi />
              </Project>
            }
          />
          <Route
            path="/setekAppMultipleReturns"
            element={
              <Project
                title="Projekt Multiple Returns"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="73. - 79."
              >
                <AppMultipleReturns />
              </Project>
            }
          />
          <Route
            path="/setekAppShowHide"
            element={
              <Project
                title="Projekt Ukáž / Skry"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="80."
              >
                <AppShowHide />
              </Project>
            }
          />
          <Route
            path="/setekNetflix2"
            element={
              <Project
                title="Projekt preklikavanie filmov"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="81. - 87."
              >
                <AppNetflix2 />
              </Project>
            }
          />
          <Route
            path="/setekFAQ"
            element={
              <Project
                title="Projekt FAQ"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="88. - 93."
              >
                <AppFAQ />
              </Project>
            }
          />
          <Route
            path="/setekSlider"
            element={
              <Project
                title="Projekt Slider"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="95. - 101."
              >
                <AppSlider />
              </Project>
            }
          />
          <Route
            path="/setekPokrocilySlider"
            element={
              <Project
                title="Projekt Pokročilý Slider"
                link="https://www.youtube.com/watch?v=RdDzoVJOxX4&list=PLQ8x_VWW6Akua8I5spV8nHIWlG6_tX6dx"
                lessons="102. - 111."
              >
                <AppPokrocilySlider />
              </Project>
            }
          />
          <Route
            path="/setekFormular"
            element={
              <Project
                title="Projekt Formulár"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="1. - 8."
              >
                <AppForm />
              </Project>
            }
          />
          <Route
            path="/setekPokrocilyFormular"
            element={
              <Project
                title="Projekt Pokročilý Formulár"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="11. - 20."
              >
                <AppAdvancedForm />
              </Project>
            }
          />
          <Route
            path="/setekGeneretorLorem"
            element={
              <Project
                title="Generátor Lorem Ipsum"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="21. - 28."
              >
                <AppGeneretorLorem />
              </Project>
            }
          />
          <Route
            path="/setekHooksUseRef"
            element={
              <Project
                title="Projekt Hooks (useRef)"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="30."
              >
                <AppHooksUseRef />
              </Project>
            }
          />
          <Route
            path="/setekMenu"
            element={
              <Project
                title="Projekt Menu - Opraviť - vyhadzuje chybu v prehliadači - treba naštudovať modules, zatiaľ
                       vyriešené vložením obrázku do adresára public a vložením cesty k nemu"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="31. - 37."
              >
                <AppMenu />
              </Project>
            }
          />
          <Route
            path="/setekHooksUseReducer"
            element={
              <Project
                title="Projekt Hooks (useReducer) - spravené bez TS - doštudovať a prerobiť"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="38. - 51."
              >
                <AppHooksUseReducer />
              </Project>
            }
          />
          <Route
            path="/setekPropDrilling"
            element={
              <Project
                title="Projekt Props - Prop Drilling"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="52. - 53."
              >
                <AppProps1 />
              </Project>
            }
          />
          <Route
            path="/setekHooksUseContext"
            element={
              <Project
                title="Projekt Hooks (useContext)"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="54. - 57."
              >
                <AppUseContext />
              </Project>
            }
          />
          <Route
            path="/setekCustomHooks"
            element={
              <Project
                title="Projekt vlastný Hook"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="58. - 62."
              >
                <AppCustomHook />
              </Project>
            }
          />
          <Route
            path="/setekPropsValidation"
            element={
              <Project
                title="Projekt validácia Props - naštudovať modules > pozri Projekt Menu"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="63. - 66."
              >
                <AppPropsValidation />
              </Project>
            }
          />
          <Route
            path="/setekSearch"
            element={
              <Project
                title="Projekt vyhľadávanie"
                link="https://www.youtube.com/watch?v=NYf9hNqADYs&list=PLQ8x_VWW6Aktmp_v1eYcCBbO5GovP_sHl"
                lessons="67. - 72."
              >
                <AppSearch />
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
