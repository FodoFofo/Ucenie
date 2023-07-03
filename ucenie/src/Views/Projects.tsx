import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

// style
import './Projects.scss'

const Projects = () => {
  return (
    <div className='projects'>
      <header>
          <NavLink className='project-link' to='/'>React</NavLink>
          <NavLink className='project-link' to='/'>React posuňte své webové aplikace na nový level</NavLink>
          <NavLink className='project-link' to='/'>React 2 pojďme vyvíjet pokročilejší aplikace</NavLink>
          <NavLink className='project-link' to='/'>React 3 posuňme své znalosti ještě dál</NavLink>
      </header>
        <Routes>
          <Route path='/react' element={} />
          <Route path='/reactI' element={} />
          <Route path='/reactII' element={} />
          <Route path='/reactIII' element={} />
        </Routes> 
        
    </div>
  )
}

export default Projects