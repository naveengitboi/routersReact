import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
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
        <div className="styleBox"></div>
        <div className="styleBox2"></div>
    </section>
  )
}

export default Contact