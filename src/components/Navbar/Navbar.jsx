import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark  from '../../assets/logo-white.png'
import search_icon_light from '../../assets/search-w.png'
import search_icon_dark from '../../assets/search-b.png'
import toggle_icon_light from '../../assets/night.png'
import toggle_icon_dark from '../../assets/day.png'


const navbar = ({theme, setTheme}) => {

    

    const toggle_mode = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    
  return (
    <div className='navbar'>
        <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>

        <ul>
            <li>Home</li>
            <li>Philantrophy</li>
            <li>Media</li>
            <li>Sponsors</li>
            <li>Contact Us</li>
        </ul>

    <div className='search_box'>
        <input type='text' placeholder='Search'/>
        <img src={theme == 'light' ? search_icon_light : search_icon_dark} alt="" />
    </div>

    <img onClick={()=>toggle_mode()} 
    src={theme == 'light' ? toggle_icon_light : toggle_icon_dark} alt="" className='toggle_icon'/>

    </div>
  )
}

export default navbar