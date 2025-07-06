
import React from 'react';
import { religiousDestinations } from '../data/destinations';
import DestinationGrid from '../components/DestinationGrid';

const Religious = () => {
  return (
    <div className="pt-16">
      <div className="bg-gradient-to-br from-orange-600 to-red-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Religious Destinations</h1>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
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
