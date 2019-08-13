import React, { useState, useEffect } from 'react'

function MenuTop () {
  const [isMobile, setIsMobile] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const checkWidth = () => {
    if (window.innerWidth > 980) {
      setIsMobile(false)
    } else {
      setIsMobile(true)
    }
  }
  useEffect(() => {
    checkWidth()
    window.addEventListener('resize', checkWidth)
  }, [])
  const trigerMenu = () => {
    let vava = false
    if (isOpen) {
      vava = false
    } else {
      vava = true
    }
    setIsOpen(vava)

    console.log(isOpen)
  }
  const Desktop = () => {
    const hambClass = isOpen ? 'open' : ''
    if (!isMobile) {
      return (
        <ul className='navbar-nav'>
          <li> <a href='https://speedboostr.com/'>HOME</a> </li>
          <li> <a href='https://analyze.speedboostr.com/'>SHOPIFY ANALYZER</a>
          </li>
          <li> <a href='https://speedboostr.com/services'>SERVICES</a> </li>
          <li> <a href='https://speedboostr.com/about'>ABOUT</a> </li>
          <li> <a href='https://speedboostr.com/contact'>CONTACT</a> </li>
          <li> <a href='https://speedboostr.com/blog'>LEVEL UP (BLOG)</a> </li>
        </ul>
      )
    } else {
      return (
        <div className={'hamburger ' + hambClass} onClick={trigerMenu}>
          <span />
          <span />
          <span />
        </div>
      )
    }
  }
  return (
    <div>
      <Desktop />
    </div>
  )
}

export default MenuTop
