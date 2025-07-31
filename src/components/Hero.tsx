import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TrustIndicators from './TrustIndicators';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [
    'https://i.postimg.cc/Kj95bvfv/IMG-9737-01.webp',
    'https://i.postimg.cc/rmNJh9t4/IMG-20180207-173512-BURST15-01.webp',
    'https://i.postimg.cc/cHShMz6Z/IMG-3034-01-01.webp',
    'https://i.postimg.cc/kMwsKfC3/IMG-0072-01.webp',
    'https://i.postimg.cc/RhCT2ncD/IMG-3675.webp',
    'https://i.postimg.cc/FKcGSvrD/IMG-3646.webp',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {backgroundImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Begin Your <span className="text-green-400">Adventure</span> with
            <span className="text-blue-400"> Himalayan Ape.</span>
          </h1>

          {/* Search Bar */}
          <div className="mb-8">
            <SearchBar />
          </div>

          {/* Trust Indicators */}
          <TrustIndicators />
        </div>
      </div>
    </div>
  );
};

export default Hero;
