import React from 'react'
import './NoMatch.css'
import image from "./kindpng_844739.png"
function NoMatch() {
  return (
    <section className='bgNoMatch'>
        <div className="notFoundImg">
            <img src={image} alt="" />
        </div>
        <div className="notFoundContent">
            <h1 className='hyperHeading'>
                404
            </h1>
            <p >
                Babe you are in wrong page....
            </p>
        </div>
    </section>
  )
}

export default NoMatch