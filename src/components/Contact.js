import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {motion} from 'framer-motion'
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
    <section>
        <form action="submit">
            <div className="nameSection">
                <label htmlFor="name">Sweet Name</label>
                <input type="text" id='name' />
            </div>

              <div className="emailSection">
                <label htmlFor="name">Email</label>
                <input type="email" id='name' />
            </div>
            
            <button type='submit' onClick={handler} >{msg}</button>
        </form>
            <motion.div className="refContainer" ref={constraintsRef}>
              <motion.div className="styleBox1" drag dragConstraints={constraintsRef} >drag Me</motion.div>
            </motion.div>
        <div className="styleBox2"></div>

    </section>
  )
}

export default Contact