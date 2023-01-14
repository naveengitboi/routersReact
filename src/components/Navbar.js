import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  let addStyles = ({isActive}) => {
   return{
    color: isActive? 'red' : 'grey',
    fontWeight: isActive? '600' : 'normal'
   }
  }
  return (
    <div className='navBar'>

        <h1 className='logo'>Routes</h1>
        <ul className='links'>
            <li><NavLink style={addStyles} to="/">Home</NavLink></li>
            <li><NavLink style={addStyles} to="/about">About</NavLink></li>
            <li><NavLink style={addStyles} to="/contact">Contact</NavLink></li>
        </ul>

    </div>
  )
}

export default Navbar