import React from 'react';
import './hero.scss';
import logo from '../../images/logo.svg';
import iconHamburger from '../../images/icon-hamburger.svg';


const Hero = () => {
  return (
    <header className="hero">
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={logo} alt="Blogr Logo" />
        </div>
        <div className="navbar-menu">
          <ul className="navbar-links">
            <li><a href="#">Product</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Connect</a></li>
          </ul>
          <div className="navbar-icons">
            <button className="login-btn">Login</button>
            <button className="signup-btn">Sign Up</button>
          </div>
        </div>
        <img src={iconHamburger} alt="Menu Icon" className="menu-icon" />
      </nav>
      <div className="hero-content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="hero-buttons">
          <button className="start-btn">Start for Free</button>
          <button className="learn-btn">Learn More</button>
        </div>
      </div>
    </header>
  );
};

export default Hero;
