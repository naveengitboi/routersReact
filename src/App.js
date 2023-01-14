import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MailReceived from './components/MailReceived'
import NoMatch from './components/NoMatch'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path ="/" element ={<Home/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/mailRecieved' element ={<MailReceived/>}/>




        <Route path='*' element = {<NoMatch/>} />
      </Routes>
    </div>
  );
}

export default App;
