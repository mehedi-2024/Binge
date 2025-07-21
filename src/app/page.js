import React from 'react'
import Nav from './components/global/Nav'
import Hero from './components/home/Hero'
import Footer from './components/global/Footer'

const page = () => {
  return (
    <div className='h-[200vh]'>
      <Nav />
      <Hero />
      <Footer />
    </div>
  )
}

export default page