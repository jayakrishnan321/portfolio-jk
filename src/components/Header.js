import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('project')}
                className="text-white/80 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Project
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-white/80 hover:text-blue-400 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 rounded-lg"
              >
                Contacts
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="group text-white/80 hover:text-white focus:outline-none focus:text-white p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <div className="relative">
                <svg className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
                {/* Animated background circle */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-4 pb-4 space-y-2 bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl rounded-2xl mt-3 border border-white/20 shadow-2xl">
            <div className="space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="group text-white/90 hover:text-white block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl w-full text-left transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span>Home</span>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('about')}
                className="group text-white/90 hover:text-white block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl w-full text-left transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span>About</span>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('project')}
                className="group text-white/90 hover:text-white block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl w-full text-left transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span>Projects</span>
                </div>
              </button>
              
              <button 
                onClick={() => scrollToSection('contacts')}
                className="group text-white/90 hover:text-white block px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-blue-500/20 rounded-xl w-full text-left transform hover:scale-[1.02] hover:shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span>Contact</span>
                </div>
              </button>
            </div>
            
            {/* Decorative line */}
            <div className="pt-2">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
