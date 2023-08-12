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
import AppHooks from "./components/Setek/AppHooks/AppHooks";
import AppTask from "./components/Setek/AppTask/AppTask";

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
          <Route path="/setekBooks" element={<AppBooks />} />
          <Route path="/setekHooks" element={<AppHooks />} />
          <Route path="/setekTaskApp" element={<AppTask />} />
          <Route path="/reactIII" element={<Projects />} />
        </Routes>
      </main>

      <footer>&copy; Foďo 2023</footer>
    </div>
  );
};

export default App;
