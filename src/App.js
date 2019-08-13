import React from 'react'
// import slogo from './slogo.svg'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import './mm.css'

import './App.css'
import './pza.css'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <div className="spaceG" />
      <Main />
      <Footer />
    </div>
  )
}

export default App
