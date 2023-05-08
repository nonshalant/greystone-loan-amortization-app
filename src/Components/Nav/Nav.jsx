import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
  return (
    <header>
        <nav className='nav-bar'>
          <div className="logo">
            <h1>GS Loan Amortization</h1>
          </div>
          <ul className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/loan-amortization-table'>Loans</Link>
            <Link to='/loan-share'>Loans-Share</Link>
          </ul>
        </nav>
    </header>
  )
}

export default Nav