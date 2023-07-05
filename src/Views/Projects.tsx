import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

// styles
import './Projects.scss'

// ------
import Main from './Main'

const Projects = () => {
  return (
    <div className='projects'>
      <header>
          <NavLink className='project-link' to='/'>React</NavLink>
          <NavLink className='project-link' to='/'>React posuňte své webové aplikace na nový level</NavLink>
          <NavLink className='project-link' to='/'>React 2 pojďme vyvíjet pokročilejší aplikace</NavLink>
          <NavLink className='project-link' to='/'>React 3 posuňme své znalosti ještě dál</NavLink>
      </header>
      <main>
        <Routes>
          <Route path='/react' element={<Main />} />
          <Route path='/reactI' element={<Main />} />
          <Route path='/reactII' element={<Main />} />
          <Route path='/reactIII' element={<Main />} />
        </Routes> 
      </main>
        
    </div>
  )
}

export default Projects