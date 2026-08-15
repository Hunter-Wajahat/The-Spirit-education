import React from 'react'
import logo from '../../assets/Spirit Logo.png'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <h1 className='logoInNav'>
                <img src={logo} alt="Logo" />
            </h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Blog</li>
                <li>Courses</li>
                <li>Download</li>
                <li>Library</li>
                <li>Hadiyah/Fee</li>
                <li>Platform</li>
            </ul>
            <button className="signInBtn">
    Sign In
</button>
        </div>
    )
}

export default Navbar
