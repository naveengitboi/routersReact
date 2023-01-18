import React from 'react'
import {  NavLink, Outlet } from 'react-router-dom'
import {motion} from 'framer-motion'
import { AnimatePresence } from 'framer-motion'
import { pageVariants } from './Home'
export const buttonVariants= {
  hidden:{
    scale:0,
    rotate: -180
  },
  visible:{
    scale:1,
    rotate: 0,
    transition:{ type: "spring",
    stiffness: 260,
    damping: 20}
  }
}
function Work() {
  return (
    <>
    <motion.section variants={pageVariants} exit='exit'>
        <div className="worksLinks">
            <NavLink to='webdev' >Web Development</NavLink>
            <NavLink to='nonwebdev' >Non-Web work</NavLink>
        </div>
        <AnimatePresence>
          <motion.div variants={buttonVariants} initial='hidden' animate='visible'
          exit={{y:'-100px'}} className="outletDiv">
            <Outlet/>
        </motion.div>
        </AnimatePresence>
    </motion.section>
    
    </>
  )
}

export default Work


