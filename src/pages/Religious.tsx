
import React from 'react';
import { religiousDestinations } from '../data/destinations';
import DestinationGrid from '../components/DestinationGrid';

const Religious = () => {
  return (
    <div className="pt-16">
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1163376205/photo/indian-sadhu-enjoy-boat-ride-at-varanasi-ganges-river-with-view-of-ancient-varanasi-city.jpg?s=2048x2048&w=is&k=20&c=qL74eu-gkWRkhP_uJ5dZItMRuzRTzWyn0WIGd-HcNI0=')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-lg">Religious Destinations</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-md">
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
