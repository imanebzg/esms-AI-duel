import React from 'react';
import './Navbar.css'; 


const Navbar = () => {
 
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/img/STAILogo.svg" alt="Logo" className="logo" />
      </div>
      <div className="navbar-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#about" className="nav-link">About Us</a>
        <a href="#community" className="nav-link">Community</a>
        <a href="#media" className="nav-link">Media</a>
        <a href="#schedule" className="nav-link">Schedule</a>
      </div>
      <button className="navbar-button">Register Now!</button>
    </nav>
  );

};
    

export default Navbar;
