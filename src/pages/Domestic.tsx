
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
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Domestic Destinations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
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
