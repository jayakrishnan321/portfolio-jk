import React, { useState, useEffect } from 'react';

const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const texts = [
    'Frontend Developer',
    'Backend Developer', 
    'React Developer'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsVisible(true);
      }, 500); // Half second fade out
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative">
      <h2 
        className={`text-xl sm:text-2xl md:text-3xl font-bold text-white transition-all duration-500 ${
          isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'
        }`}
      >
        {texts[currentText]}
      </h2>
    </div>
  );
};

export default AnimatedText;
