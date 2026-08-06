import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/home/Hero'
import Features from './components/home/Features'
import Pricing from './components/home/pricing/Pricing'
import Testimonials from './components/home/testimonial/Testimonial'
import Footer from './components/layout/Footer'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default App
