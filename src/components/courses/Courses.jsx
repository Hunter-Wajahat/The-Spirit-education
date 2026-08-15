import React from "react";
import "./Courses.css";
import { NavLink } from "react-router-dom";

const Courses = () => {
  return (
    <nav className="courseNav">
      <div className="courseNavContainer">

        <NavLink to="/tajweed" className="courseNavItem">
          Quran with Tajweed
        </NavLink>

        <NavLink to="/translation" className="courseNavItem">
          Quran with Translation
        </NavLink>

        <NavLink to="/qaida" className="courseNavItem">
          Basic Qaida
        </NavLink>

        <NavLink to="/kalma" className="courseNavItem">
          Namaz and Kalma
        </NavLink>

      </div>
    </nav>
  );
};

export default Courses;