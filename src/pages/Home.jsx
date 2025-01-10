import React from 'react'
import Hero from '../components/Home/Hero'
import Ourfocus from '../components/Home/Ourfocus'
import LatestEvents from '../components/Home/LatestEvents'
import LatestBlogs from '../components/Home/LatestBlogs'
import Faq from '../components/Home/Faq'
import Slider from '../components/Home/Slider'
import Contact from '../components/Home/Contact'
const Home = () => {
  return (
    <>
      <Hero/>
      <Ourfocus/>
      <LatestEvents/>
      <LatestBlogs/>
      <Faq/>
      <Slider/>
      <Contact/>
    </>
  )
}

export default Home
