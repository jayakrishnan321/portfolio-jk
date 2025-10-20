import React from 'react';

const AboutMe = () => {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Me Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with a keen eye for detail and a love for creating seamless digital experiences.
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Clean Code Card */}
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-black/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Clean Code</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Writing maintainable and scalable code following best practices and design patterns.
            </p>
          </div>

          {/* UI/UX Design Card */}
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-black/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">UI/UX Design</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Creating beautiful, intuitive interfaces that provide excellent user experiences.
            </p>
          </div>

          {/* Performance Card */}
          <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-black/30 transition-all duration-300 hover:transform hover:scale-105">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Performance</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Optimizing applications for speed and efficiency across all devices.
            </p>
          </div>
        </div>

        {/* My Journey Section */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">My Journey</h3>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            With years of experience in web development, I've worked on diverse projects ranging from small business websites to complex web applications. I'm constantly learning and adapting to new technologies to deliver the best solutions for my clients and create meaningful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
