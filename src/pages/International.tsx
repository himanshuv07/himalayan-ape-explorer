
import React from 'react';
import { internationalDestinations } from '../data/destinations';
import DestinationGrid from '../components/DestinationGrid';

const International = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">International Destinations</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Discover amazing destinations around the world with our carefully crafted international tour packages
          </p>
        </div>
      </div>

      <DestinationGrid
        destinations={internationalDestinations}
        title="Explore the World"
        subtitle="From luxury destinations to cultural adventures, find your perfect international getaway"
      />
    </div>
  );
};

export default International;
