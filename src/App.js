import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MailReceived from './components/MailReceived'
import NoMatch from './components/NoMatch'
import Work from './components/Work'
import WebDevWork from './components/WebDevWork'
import NonWebDevWork from './components/NonWebDevWork'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <Navbar/>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key ={location.key}>
        
        <Route path ="/" element ={<Home/>} />
        <Route path='about' element = {<About/>} />
        <Route path='contact' element={<Contact/>}/>
        <Route path='mailRecieved' element ={<MailReceived/>}/>

        <Route path='work' element= {<Work/>} >
          <Route index  element={<WebDevWork/>}/>
          <Route index path='webdev' element={<WebDevWork/>}/>
          <Route path='nonwebdev' element={<NonWebDevWork/>}/>
        </Route>

        <Route path='*' element = {<NoMatch/>} />
        
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
