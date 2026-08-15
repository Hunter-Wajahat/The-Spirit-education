import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/about/About'
import Blog from './components/blog/Blog'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Courses from './components/courses/Courses'
import QuranTajweed from './components/courses sections/QuranWithTajweed'
import QuranTranslation from './components/courses sections/QuranTranslation'
import NamazKalma from './components/courses sections/NamazKalma'
import BasicQaida from './components/courses sections/BasicQaida'
import Download from './components/download/Download'
import HadiyahFee from './components/hadiyahfee/HadyahFee'
import Platforms from './components/platform/Platform'
import Footer from './components/foot/Footer'

function App() {
  const router = createBrowserRouter([
    {
      path: "/blog",
      element: <>
        <Navbar/>
        <Blog />
      </>
    },
    {
      path: "/",
      element: <>
        <Navbar />
        <Hero />
        <About />
      </>
    },
    {
      path: "/courses",
      element: <>
        <Navbar />
        <Courses/>
        <QuranTajweed/>
      </>
    },
    {
      path: "/tajweed",
      element: <>
        <Navbar />
        <Courses/>
        <QuranTajweed/>
      </>
    },
    {
      path: "/translation",
      element: <>
        <Navbar />
        <Courses/>
        <QuranTranslation/>
      </>
    },
    {
      path: "/kalma",
      element: <>
        <Navbar />
        <Courses/>
        <NamazKalma/>
      </>
    },
    {
      path: "/qaida",
      element: <>
        <Navbar />
        <Courses/>
        <BasicQaida/>
      </>
    },
    {
      path: "/download",
      element: <>
        <Navbar />
         <Download/>
      </>
    },
    {
      path: "/hadiyah-fee",
      element: <>
        <Navbar />
         <HadiyahFee/>
      </>
    },
    {
      path: "/platform",
      element: <>
        <Navbar />
         <Platforms/>
      </>
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
      <Footer/>
    </>
  )
}

export default App
