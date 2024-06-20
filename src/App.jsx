import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './components/pages/Home'
import Media from './components/pages/Media'
import Philantrophy from './components/pages/Philantrophy'
import Sponsorship from './components/pages/Sponsorship'
import Contact from './components/pages/Contact'

const App = () => {

  return (
    <div className='container'>
        <div className="content_container">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/philantrophy" element={<Philantrophy />} />
          <Route path="/sponsorship" element={<Sponsorship />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </div>
      <Footer/>
    </div>
  )
}

export default App