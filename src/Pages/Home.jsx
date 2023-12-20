import React from 'react'
import { NavBar } from '../Components/NavBar'
import { Hero } from '../Components/Hero'
import { Services } from './Services'
import { Footer } from '../Components/Footer'

export const Home = () => {
  return (
   <>
        <NavBar/>
        <Hero/>
        <Services/>
        <Footer/>
   </>
  )
}
