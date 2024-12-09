import React from 'react'
import './Navbar.css'
import logo from '../../src/assets/logo.png'
function Navbar() {
  return (
    <div>
      <nav className='container'>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Tesatimonials</li>
        <li><button className='btn'>Contact us</button></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
