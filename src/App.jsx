import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import ServicesAndWhy from './components/ServicesAndWhy';
import ImpactCTA from './components/ImpactCTA';

function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter',_system-ui,_sans-serif] text-white">
      <Hero />
      <About />
      <ServicesAndWhy />
      <ImpactCTA />
    </div>
  );
}

export default App;
