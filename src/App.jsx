import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './components/pages/Home'
import Media from './components/pages/Media'
import Philantrophy from './components/pages/Philantrophy'
import Sponsors from './components/pages/Sponsors'
import Contact from './components/pages/Contact'

const App = () => {


  const [theme, setTheme] = useState('light')

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      <div className="content_container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/media" element={<Media />} />
          <Route path="/philantrophy" element={<Philantrophy />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App