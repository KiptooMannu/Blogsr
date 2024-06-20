import React from 'react';
import './features.scss';
import editorMobile from '../../images/illustration-editor-mobile.svg';
import editorDesktop from '../../images/illustration-editor-desktop.svg';

const Features = () => {
  return (
    <section className="features">
      <h2>Designed for the future</h2>
      <div className="features-content">
        <div className="feature">
          <img src={editorMobile} alt="Editor Mobile" className="feature-image-mobile" />
          <img src={editorDesktop} alt="Editor Desktop" className="feature-image-desktop" />
          <div className="feature-text">
            <h3>Introducing an extensible editor</h3>
            <p>Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.</p>
          </div>
        </div>
        <div className="feature">
          <div className="feature-text">
            <h3>Robust content management</h3>
            <p>Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
