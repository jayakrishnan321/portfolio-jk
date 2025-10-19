
import React from 'react';
import Header from './components/Header';
import AnimatedStars from './components/AnimatedStars';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Stars Background - covers entire screen */}
      <AnimatedStars />
      
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="relative z-10 pt-20 sm:pt-24 lg:pt-20">
        <Hero />
        <AboutMe/>
        <Projects />
        <Contact />
        
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
