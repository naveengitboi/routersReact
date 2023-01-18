import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
import { divVariants, pageVariants } from './Home'
function Contact() {
  const constraintsRef = useRef(null)
    let navigate = useNavigate()
    let [msg,setMsg] = React.useState('Get In Touch')
    let handler = (event) => {
                event.preventDefault()
                setMsg((prevState) => prevState = 'Submitted')
                
                navigate('/mailRecieved')
            }
  return (
    <motion.section variants={pageVariants} exit= 'exit'>
        <motion.form action="submit" variants={divVariants} initial='hidden' animate= 'visible'>
            <div className="nameSection">
                <label htmlFor="name">Sweet Name</label>
                <input type="text" id='name' />
            </div>

              <div className="emailSection">
                <label htmlFor="name">Email</label>
                <input type="email" id='name' />
            </div>
            
            <button type='submit' onClick={handler} >{msg}</button>
        </motion.form>
            <motion.div className="refContainer" ref={constraintsRef}>
              <motion.div className="styleBox1" drag dragConstraints={constraintsRef} >drag Me</motion.div>
            </motion.div>
        <motion.div drag whileDrag={{scale:1.5}} dragConstraints={{top:100, bottom:100,right:100,left:100}} className="styleBox2"></motion.div>

    </motion.section>
  )
}

export default Contact