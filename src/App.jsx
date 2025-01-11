import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Gallery from './pages/Gallery'
import Research from './pages/Research'
import Navbar from './components/Navbar/Navbar'
import Header from './components/Navbar/Header'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
    <div> hii</div>
      {/* <BrowserRouter>
      <Navbar/>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/research' element={<Research/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> */}
    </>
  )
}

export default App
