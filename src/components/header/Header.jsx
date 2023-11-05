import React from 'react'
import { Navbar } from '../navbar/Navbar'
import { Hero } from '../hero/Hero'

export const Header = () => {
  return (
    <>
        <section className='section' id="Inicio">
        <Navbar />
        <Hero />
      </section>
    </>
  )
}
