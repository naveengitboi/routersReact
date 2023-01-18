import React from 'react'
import {motion} from 'framer-motion'
import { divVariants, pageVariants } from './Home'
function About() {
  return (
    <motion.section variants={pageVariants} exit='exit' className='About'>
      <motion.div variants={divVariants} initial = 'hidden' animate = 'visible'>
        <h1 className='mainHeading'>About Section</h1>
        <p className='para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, eius exercitationem animi enim quaerat ab fugit labore minus culpa nihil quae rerum, aperiam necessitatibus facilis delectus in voluptatem unde atque a. Repellendus dicta, modi sint voluptate praesentium dignissimos veritatis excepturi magni aliquam. Beatae commodi sint omnis officiis distinctio recusandae labore?</p>
        </motion.div>
    </motion.section>
  )
}

export default About