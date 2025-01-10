import React from 'react'
import AboutUs from '../components/About/AboutUs'
import Ourfocus from '../components/About/Ourfocus'
import Team from '../components/About/Team'
import Slider from '../components/Home/Slider'
import AboutHero from '../components/About/AboutHero'

const About = () => {
  return (
    <>
      <AboutHero/>
      <AboutUs/>
      <Ourfocus/>
      <Team/>
      <Slider/>
    </>
  )
}

export default About
