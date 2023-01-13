import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navBar'>

        <h1 className='logo'>Routes</h1>
        <ul className='links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>

    </div>
  )
}

export default Navbar