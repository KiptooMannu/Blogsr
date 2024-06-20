import React from 'react';
import './features.scss';
import featureImageMobile from '../../images/illustration-editor-mobile.svg';
import featureImageDesktop from '../../images/illustration-editor-desktop.svg';

const Features = () => {
  return (
    <section className="features">
      <h2>Designed for the future</h2>
      <div className="features-content">
       <div className="featuresW">
          <div className="feature-text">
            <h3>Introducing an extensible editor</h3>
            <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
  The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
  videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
  change the looks of a blog</p>
          </div>
        
      
          <div className="feature-text">
            <h3>Robust content management</h3>
            <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog 
            by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
          </div>
          </div>

          <div className="feature">
          <img src={featureImageMobile} alt="Feature" className="feature-image-mobile" />
          <img src={featureImageDesktop} alt="Feature" className="feature-image-desktop" />
        </div>
        </div>
      
    </section>
  );
};

export default Features;
