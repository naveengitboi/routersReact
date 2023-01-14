import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
function Work() {
  return (
    <>
    <section>
        <div className="worksLinks">
            <Link to='webdev' >Web Development</Link>
            <Link to='nonwebdev' >Non-Web work</Link>
        </div>
        <div className="outletDiv">
            <Outlet/>
        </div>
    </section>
    
    </>
  )
}

export default Work