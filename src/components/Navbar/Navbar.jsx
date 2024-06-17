import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
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
    <nav className='navbar'>

        <Link to ='/'>
            <img src={theme == 'light' ? logo_light : logo_dark} alt="" className='logo'/>
        </Link>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/philantrophy'>Philantrophy</Link>
            </li>
            <li>
                <Link to='/media'>Media</Link>
            </li>
            <li>
                <Link to='/sponsors'>Sponsors</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>


    <img onClick={()=>toggle_mode()} 
    src={theme == 'light' ? toggle_icon_light : toggle_icon_dark} alt="" className='toggle_icon'/>

    </nav>
  )
}

export default navbar