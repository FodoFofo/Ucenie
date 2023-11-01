import { useState } from 'react'

// štýly
import './NavBar.scss'

// dáta
import logo  from '../Images/netflix.png' 
import links from '../data'

// ikony
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = () => {
const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='app-menu'>
      <div className='navigation'>
        <div className="nav-header">
          <img src={logo} alt="netflix" />
          <button onClick={() => setShowMenu(!showMenu)}>
            <GiHamburgerMenu className='hamburger-icon'/>
          </button>
        </div>
        <div className={ showMenu ? 'nav-list show' : 'nav-list hide'}>
          <ul>
            {
              links.map( (link) => {
                const { id, text, url } = link
                return <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              })
            }
          </ul>
        </div>
      </div>
      </nav>

  )
}

export default NavBar