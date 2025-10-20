import React from 'react';
import AnimatedText from './AnimatedText';

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          {/* Left Section - Text Content */}
          <div className="text-white space-y-2 sm:space-y-3 md:space-y-4 text-center md:text-left order-2 md:order-1">
            <div className="space-y-1 sm:space-y-2">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium">
                Hi, I'm
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent leading-tight">
                Jayakrishnan U
              </h1>
              <div className="h-10 sm:h-12 flex items-center justify-center md:justify-start">
                <AnimatedText />
              </div>
            </div>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-md mx-auto md:mx-0">
              Passionate developer crafting beautiful and functional web experiences. 
              Specialized in building modern, responsive applications with cutting-edge technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 justify-center md:justify-start">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-sm sm:text-base">
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <button className="border border-white/30 hover:border-white/50 text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center gap-2 text-sm sm:text-base">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Me
              </button>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="flex justify-center md:justify-end mt-4 sm:mt-5 md:mt-0 order-1 md:order-2">
            <div className="relative">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center shadow-xl p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="/assets/images/profile-placeholder.svg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center hidden">
                    <svg
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-5 h-5 sm:w-6 sm:h-6 bg-yellow-400 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-4 h-4 sm:w-5 sm:h-5 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
