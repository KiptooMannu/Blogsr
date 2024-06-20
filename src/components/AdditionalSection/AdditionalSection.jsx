import React from 'react';
import './AdditionalSection.scss';
import laptopMobile from '../../images/illustration-laptop-mobile.svg';
import laptopDesktop from '../../images/illustration-laptop-desktop.svg';

const AdditionalSection = () => {
  return (
    <section className="additional-section">
        <div className="add">
            
        <div className="additional-images">
        <img src={laptopMobile} alt="Laptop Mobile" className="image-mobile" />
        <img src={laptopDesktop} alt="Laptop Desktop" className="image-desktop" />
      </div>
        <div className="additional-content">
        <div className="free-open-simple">
          <h3>Free, open, simple</h3>
          <p>Blogr is a free and open platform. We aim to make it as easy as possible for you to manage your blog without any hassle.</p>
        </div>
        <div className="powerful-tooling">
          <h3>Powerful tooling</h3>
          <p>Our powerful interface allows you to manage your blog efficiently. Get insights and analytics on your content and engage with your audience more effectively.</p>
        </div>
      </div>
     
        </div>
     
    </section>
  );
};

export default AdditionalSection;
