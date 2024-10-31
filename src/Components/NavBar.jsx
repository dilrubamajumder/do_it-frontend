import React from 'react'
import "../Design/Nav.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className='nav-bar'>
      <div className='nav-left'>
        <Link to="/"><button className='do-it-logo'> Do-it </button></Link>
      </div>

      <div className='nav-right'>
        <ul>
          <Link to="/tasks"><button className='nav-right-buttons'> Tasks </button></Link>
        </ul>
      </div>
    </nav>
  )
}
