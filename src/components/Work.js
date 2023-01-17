import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
function Work() {
  return (
    <>
    <section>
        <div className="worksLinks">
            <NavLink to='webdev' >Web Development</NavLink>
            <NavLink to='nonwebdev' >Non-Web work</NavLink>
        </div>
        <div className="outletDiv">
            <Outlet/>
        </div>
    </section>
    
    </>
  )
}

export default Work