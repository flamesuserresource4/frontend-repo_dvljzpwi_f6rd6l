import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0b0f] antialiased">
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
