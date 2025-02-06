import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Progra from './Components/Programs/Progra'
import Title from './Components/Title/Title'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import Program from './Components/Program'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'


function App() {
  return (
    <div>
    <Navbar />
    {/* <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Program' element={<Program/>}/>
    </Routes> */}

      <Hero/>
      <div className="container">
      <Title subtitle="Our Program" title='What We Offer'/>
      <Progra/>
      <About/>
      <Title subtitle="Gallery" title='Campus Photos'/>
      <Campus/>
       </div>
    </div>
  )
}

export default App

