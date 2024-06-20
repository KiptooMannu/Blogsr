import React from 'react';
import './infrastructure.scss';
import laptopMobile from '../../images/illustration-laptop-mobile.svg';
import laptopDesktop from '../../images/illustration-laptop-desktop.svg';

const Infrastructure = () => {
  return (
    <section className="infrastructure">
      <h2>State of the Art Infrastructure</h2>
      <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
      <div className="infrastructure-content">
        <img src={laptopMobile} alt="Laptop Mobile" className="infrastructure-image-mobile" />
        <img src={laptopDesktop} alt="Laptop Desktop" className="infrastructure-image-desktop" />
        <div className="infrastructure-detail">
          <h3>Free, open, simple</h3>
          <p>Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.</p>
        </div>
        <div className="infrastructure-detail">
          <h3>Powerful tooling</h3>
          <p>Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.</p>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
