import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleNavClick = () => {
    setIsMobileOpen(false);
  };

  return (
    <nav className="navbar flex sticky top-0 z-50 ">
      {/* <h3 className="logo">Logo</h3> */}
      <ul
        className={`w-full flex flex-col nav-links justify-between items-center bg-violet-900 p-6 font-black-sans text-2xl text-white ${
          isMobileOpen ? 'sp:flex sp:justify-between sp:flex-row' : 'hidden sp:flex sp:justify-between sp:flex-row'
        }`}
      >
        <Link to="/" className="Home" onClick={handleNavClick}>
          <li>HOME</li>
        </Link>
        <Link to="/about" className="about " onClick={handleNavClick}>
          <li>EDUCATION</li>
        </Link>
        <Link to="/projects" className="project" onClick={handleNavClick}>
          <li>PROJECTS</li>
        </Link>
        <Link to="/experience" className="experience " onClick={handleNavClick}>
          <li>EXPERIENCE</li>
        </Link>
        <Link to="/skills" className="skills " onClick={handleNavClick}>
          <li>SKILLS</li>
        </Link>
        <Link to="/contact" className="contact " onClick={handleNavClick}>
          <li>CONTACT</li>
        </Link>
      </ul>

      {!isMobileOpen && (
        <button
          className="mobile-menu-icon bg-violet-900 w-full p-5 flex flex-row-reverse  text-2xl sp:hidden"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-bars"></i>
        </button>
      )}

      {isMobileOpen && (
        <button
          className="mobile-menu-icon bg-violet-900  p-5 text-2xl sp:hidden"
          onClick={toggleMobileMenu}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </nav>
    
  );
};

export default Navbar;
