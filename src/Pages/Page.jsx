import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Home from '../Components/Home/Home'
import About from '../Components/About/About'
import Education from '../Components/Education/Education'
import Skills from '../Components/Skills/Skills'
import Profile from '../Components/Profile/Profile'
import Projects from '../Components/Projects/Projects'
import Footer from '../Components/Footer/Footer'


const Page = () => {
  return (
    <div> 

      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Profile/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default Page
