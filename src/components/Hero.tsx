
import React from 'react';
import SearchBar from './SearchBar';
import TrustIndicators from './TrustIndicators';

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Create a{' '}
            <span className="text-green-400 italic">Super Hit</span>{' '}
            holiday
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
