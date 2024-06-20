import React from 'react';
import './infrastructure.scss';
import phoneMobile from '../../images/illustration-phones.svg';
import phoneDesktop from '../../images/illustration-phones.svg';

const Infrastructure = () => {
  return (
    <section className="infrastructure">
       <div className="infrastructure-images">
        <img src={phoneMobile} alt="Infrastructure Mobile" className="image-mobile" />
        <img src={phoneDesktop} alt="Infrastructure Desktop" className="image-desktop" />
      </div>
      <div className="story">
      <h2>State of the Art Infrastructure</h2>
      <p>With reliability and speed in mind, worldwide data centers<br></br> provide the backbone for ultra-fast connectivity. <br></br>
      This ensures your site will load instantly, <br></br>no matter where your readers are, keeping your site competitive.</p>
     
      </div>
      
    </section>
  );
};

export default Infrastructure;
