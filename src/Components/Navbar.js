import React from 'react'
import './Navbar.css'
import logo from '../../src/assets/logo.png'
// import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div>
      <nav className='container dark-nav'>
      <img src={logo} alt='' className='logo'/>
      <ul>
        <li>Home
        </li>
        <li >Program</li>
     
        <li>About us</li>
        <li>Campus</li>
        <li>Tesatimonials</li>
        <li><button className='btn dark-btn'>Contact us</button></li>
      </ul>
      </nav>
    </div>
  )
}

export default Navbar
