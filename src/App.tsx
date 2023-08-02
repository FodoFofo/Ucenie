import React from 'react';
import {Route, Routes} from 'react-router-dom'

//styles
import './App.scss';

// views
import Main from './Views/Main';
import Projects from './Views/Projects';
import Links from './Views/Links';
import Pokusny from "./components/Pokusny";

// components
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path='/' element={ <Main /> } />
          <Route path='/projects' element={ <Projects /> } />
          <Route path='/links' element={ <Links /> } />
          <Route path="/react" element={<Pokusny />} />
          <Route path="/reactI" element={<Pokusny />} />
          <Route path="/reactII" element={<Pokusny />} />
          <Route path="/reactIII" element={<Pokusny />} />
        </Routes>
      </main>

      <footer>&copy; Foďo 2023</footer>
    </div>
  );
}

export default App;
