import React from 'react'
import Hero from './Hero/Hero'
import Title from './Title/Title'

const Home = () => {
  return (
    <div>
        <Hero/>
        <div className="container">
        <Title subtitle="Our Program" title='What We Offer'/>
        {/* <Progra/> */}
          </div>
    </div>
  )
}

export default Home
