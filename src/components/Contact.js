import React from 'react';

const Contact = () => {
  return (
    <section id="contacts" className="py-16 sm:py-20 lg:py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        {/* Contact Information */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-6">Contact Information</h3>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email */}
            <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center hover:bg-black/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Email</h4>
              <a 
                href="mailto:your.email@example.com" 
                className="text-blue-300 hover:text-blue-400 transition-colors duration-200 text-lg"
              >
                your.email@example.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center hover:bg-black/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Phone</h4>
              <a 
                href="tel:+15551234567" 
                className="text-purple-300 hover:text-purple-400 transition-colors duration-200 text-lg"
              >
                +1 (555) 123-4567
              </a>
            </div>

            {/* Location */}
            <div className="bg-black/20 backdrop-blur-lg border border-white/10 rounded-xl p-8 text-center hover:bg-black/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Location</h4>
              <p className="text-gray-300 text-lg">Your City, Country</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
