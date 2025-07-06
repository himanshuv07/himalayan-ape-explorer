
import React from 'react';
import { domesticDestinations } from '../data/destinations';
import DestinationGrid from '../components/DestinationGrid';

const Domestic = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-green-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Domestic Destinations</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
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
