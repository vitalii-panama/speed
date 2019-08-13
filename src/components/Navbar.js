import React from 'react'
import logo from '../logo.png'
import MenuTop from './MenuTop'

function Navbar () {
  return (
    <nav>
      <div className='leftNav'>
        <img src={logo} alt='' />
        <span>Ecom Experts</span>
      </div>
      <MenuTop />
    </nav>
  )
}

export default Navbar
