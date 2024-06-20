import React from 'react';
import './hero.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <header className="header">
        <div className="logo">Blogr</div>
        <nav>
          <ul>
            <li>Product</li>
            <li>Company</li>
            <li>Connect</li>
          </ul>
        </nav>
        <div className="auth-buttons">
          <button className="login">Login</button>
          <button className="signup">Sign Up</button>
        </div>
      </header>
      <div className="hero-content">
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand</p>
        <div className="cta-buttons">
          <button className="start">Start for Free</button>
          <button className="learn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
