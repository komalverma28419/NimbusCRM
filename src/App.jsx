import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import Pricing from './components/home/pricing/Pricing'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
    </div>
  )
}

export default App
