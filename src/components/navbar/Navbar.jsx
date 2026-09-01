import React, { useState } from 'react'
import logo from '../../assets/Spirit Logo.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className='navbarContainer'>

            <h1 className='logoInNav'>
                <img src={logo} alt="Logo" />
            </h1>

            {/* Desktop Navigation */}
            <ul className='desktopNav'>
                <NavLink className="activeItem" to="/">
                    <li>Home</li>
                </NavLink>

                <a className="activeItem" href="#about">
                    <li>About</li>
                </a>

                <NavLink className="activeItem" to="/blog">
                    <li>Blog</li>
                </NavLink>

                <NavLink className="activeItem" to="/courses">
                    <li>Courses</li>
                </NavLink>

                <NavLink className="activeItem" to="/download">
                    <li>Download</li>
                </NavLink>

                <NavLink className="activeItem" to="/hadiyah-fee">
                    <li>Hadiyah/Fee</li>
                </NavLink>

                <NavLink className="activeItem" to="/platform">
                    <li>Platform</li>
                </NavLink>
            </ul>

            {/* Mobile Menu Button */}
            <button
                className={`menuButton ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            {/* Mobile Navigation */}
            <div className={`mobileNav ${menuOpen ? 'show' : ''}`}>
                <NavLink to="/" onClick={() => setMenuOpen(false)}>
                    Home
                </NavLink>

                <a href="#about" onClick={() => setMenuOpen(false)}>
                    About
                </a>

                <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                    Blog
                </NavLink>

                <NavLink to="/courses" onClick={() => setMenuOpen(false)}>
                    Courses
                </NavLink>

                <NavLink to="/download" onClick={() => setMenuOpen(false)}>
                    Download
                </NavLink>

                <NavLink to="/hadiyah-fee" onClick={() => setMenuOpen(false)}>
                    Hadiyah/Fee
                </NavLink>

                <NavLink to="/platform" onClick={() => setMenuOpen(false)}>
                    Platform
                </NavLink>
            </div>

        </div>
    )
}

export default Navbar