import React from 'react';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Infrastructure from './components/Infrastructure/Infrastructure';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Infrastructure />
      <Footer />
    </div>
  );
};

export default App;
