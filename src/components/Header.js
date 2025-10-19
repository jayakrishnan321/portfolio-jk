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
              className="text-white/80 hover:text-blue-400 focus:outline-none focus:text-blue-400 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-black/30 backdrop-blur-lg rounded-lg mt-2 border border-white/10">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-lg w-full text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-white/80 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-lg w-full text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('project')}
                className="text-white/80 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-lg w-full text-left"
              >
                Project
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-white/80 hover:text-blue-400 block px-3 py-2 text-base font-medium transition-all duration-300 hover:bg-white/10 rounded-lg w-full text-left"
              >
                Contacts
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
