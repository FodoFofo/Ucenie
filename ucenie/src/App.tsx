import React from 'react';
import {Route, Routes} from 'react-router-dom'

//styles
import './App.scss';

// views
import Main from './Views/Main';
import Projects from './Views/Projects';
import Links from './Views/Links';

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
        </Routes>
      </main>
      

      <footer>&copy; Foďo 2023</footer>
    </div>
  );
}

export default App;
