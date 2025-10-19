import React, { useEffect, useRef } from 'react';

const AnimatedStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Star class
    class Star {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 0.5;
        this.opacity = Math.random() * 0.8 + 0.2;
        this.twinkleSpeed = Math.random() * 0.02 + 0.01;
        this.twinkleDirection = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around screen
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Twinkling effect
        this.opacity += this.twinkleSpeed * this.twinkleDirection;
        if (this.opacity >= 1 || this.opacity <= 0.2) {
          this.twinkleDirection *= -1;
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create stars
    const stars = [];
    const numStars = 100;
    for (let i = 0; i < numStars; i++) {
      stars.push(new Star());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, '#0f0f23');
      gradient.addColorStop(0.5, '#1a1a2e');
      gradient.addColorStop(1, '#16213e');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars
      stars.forEach(star => {
        star.update();
        star.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full z-0"
      style={{ 
        background: 'linear-gradient(180deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    />
  );
};

export default AnimatedStars;
