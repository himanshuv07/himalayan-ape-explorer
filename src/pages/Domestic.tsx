
import React from 'react';
import { domesticDestinations } from '../data/destinations';
import DestinationGrid from '../components/DestinationGrid';

const Domestic = () => {
  return (
    <div className="pt-16">
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Domestic Destinations</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
            Explore the incredible beauty of India with our domestic tour packages featuring hill stations and scenic destinations
          </p>
        </div>
      </div>

      <DestinationGrid
        destinations={domesticDestinations}
        title="Discover India"
        subtitle="From snow-capped mountains to serene valleys, experience the diverse beauty of incredible India"
      />
    </div>
  );
};

export default Domestic;
