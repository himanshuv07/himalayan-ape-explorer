
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import TrustIndicators from './TrustIndicators';

import hero1 from '../assets/Hero Images/IMG_0072-01.webp';
import hero2 from '../assets/Hero Images/IMG_20180207_173512_BURST15-01.webp';
import hero3 from '../assets/Hero Images/IMG_3034-01-01.webp';
import hero4 from '../assets/Hero Images/IMG_9737-01.webp';
import hero5 from '../assets/Hero Images/IMG_3646.webp';
import hero6 from '../assets/Hero Images/IMG_3675.webp';


const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const backgroundImages = [hero4, hero2, hero3, hero1, hero6, hero5];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <div className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Slider */}
      {backgroundImages.map((img, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>


      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Begin Your{' '}
            <span className="text-green-400 ">Adventure</span>{' '}
            with
            <span className="text-blue-400 "> Himalayan Ape.</span>{' '}
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

