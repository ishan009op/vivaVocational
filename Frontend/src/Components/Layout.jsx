import React from 'react'
import Navbar from './Navbar'
import Hero from './Home'
import Courses from './Courses'
import Programs from './Program'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import AiButton from './Aibutton'

const Layout = () => {
  return (
    <>
   
    <Hero/>
    <Courses/>
    <Programs/>
    <About/>
    <Contact/>
    
    <AiButton/>
    </>
  )
}

export default Layout