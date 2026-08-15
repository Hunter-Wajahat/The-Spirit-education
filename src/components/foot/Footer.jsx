import React from "react";
import "./Footer.css";
import logo from "../../assets/Spirit logo.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footerContainer">

        {/* Top Section */}
        <div className="footerTop">

          {/* Logo / Intro */}
          <div className="footerBrand">

            <img
              src={logo}
              alt="Quran Academy Logo"
            />

            <p>
              Learn the Quran with proper guidance, understanding,
              and a flexible online learning experience.
            </p>

          </div>


          {/* Navigation */}
          <div className="footerLinks">

            <h3>Explore</h3>

            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Library</a></li>
              <li><a href="#">Hadiyah / Fee</a></li>
              <li><a href="#">Platform</a></li>
            </ul>

          </div>


          {/* Signup */}
          <div className="footerSignup">

            <h3>Stay Connected</h3>

            <p>
              Sign up to receive updates, learning resources,
              and academy announcements.
            </p>

            <form className="signupForm">

              <input
                type="email"
                placeholder="Your email address"
              />

              <button type="submit">
                Sign Up
              </button>

            </form>

          </div>

        </div>


        {/* Bottom */}
        <div className="footerBottom">

          <p>
            © 2026 Quran Academy. All rights reserved.
          </p>

          <div className="footerBottomLinks">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;