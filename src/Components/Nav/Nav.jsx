import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <header>
        <nav className='nav-bar'>
            <ul className='nav-links'>
                <Link to='/'>Home</Link>
                <Link to='/create-user'>SignUp</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Nav