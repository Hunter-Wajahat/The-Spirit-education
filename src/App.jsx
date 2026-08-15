import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Blog from './components/blog/Blog'

function App() {

  return (
    <>
     <Navbar/>
     <Hero/>
     <About/>
     <Blog/>
    </>
  )
}

export default App
