
import React from 'react';
import { religiousDestinations } from '../data/destinations';
import DestinationGrid from '../components/DestinationGrid';

const Religious = () => {
  return (
    <div className="pt-16">
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1582563172107-4b2d2b5a83a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Religious Destinations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Embark on spiritual journeys to sacred places and find inner peace in divine destinations
          </p>
        </div>
      </div>

      <DestinationGrid
        destinations={religiousDestinations}
        title="Sacred Journeys"
        subtitle="Connect with the divine through our specially designed spiritual and religious tour packages"
      />
    </div>
  );
};

export default Religious;
