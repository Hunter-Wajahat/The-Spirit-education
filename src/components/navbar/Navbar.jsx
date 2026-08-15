import React from 'react'
import logo from '../../assets/Spirit Logo.png'
import './navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbarContainer'>
            <h1 className='logoInNav'>
                <img src={logo} alt="Logo" />
            </h1>
            <ul>
                <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/"><li>Home</li></NavLink>
                <a className={(e)=> {return e.isActive?"activeItem": ""}} href="#about"><li>About</li></a>
                <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/blog"><li>Blog</li></NavLink>
                <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/courses"><li>Courses</li></NavLink>
                <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/download"><li>Download</li></NavLink>
                {/* <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/library"><li>Library</li></NavLink> */}
                <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/hadiyah-fee"><li>Hadiyah/Fee</li></NavLink>
                <NavLink className={(e)=> {return e.isActive?"activeItem": ""}} to="/platform"><li>Platform</li></NavLink>
            </ul>
            <button className="signInBtn">
    Sign In
</button>
        </div>
    )
}

export default Navbar
