import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'


const navbar = () => {
    
  return (
    <nav className='navbar'>

        <Link to ='/'>
            <img src={logo} alt="" className='logo'/>
        </Link>

        <ul>
            <li>
                <Link to='/media'>Media</Link>
            </li>
            <li>
                <Link to='/sponsorship'>Sponsorship</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>

    </nav>
  )
}

export default navbar