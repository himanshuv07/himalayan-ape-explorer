
import React from 'react';
import Hero from '../components/Hero';
import GenreSelection from '../components/GenreSelection';
import DestinationGrid from '../components/DestinationGrid';
import { internationalDestinations, domesticDestinations, religiousDestinations } from '../data/destinations';

const Index = () => {
  return (
    <div>
      <Hero />
      
      {/* Genre Selection */}
      <GenreSelection />

      {/* Featured International Destinations */}
      <DestinationGrid
        destinations={internationalDestinations.slice(0, 6)}
        title="International Adventures"
        subtitle="Discover breathtaking destinations around the world"
      />

      {/* Featured Domestic Destinations */}
      <DestinationGrid
        destinations={domesticDestinations.slice(0, 6)}
        title="Domestic Escapes"
        subtitle="Explore the incredible beauty of India"
      />

      {/* Featured Religious Destinations */}
      <DestinationGrid
        destinations={religiousDestinations.slice(0, 6)}
        title="Spiritual Journeys"
        subtitle="Find peace and spirituality in sacred destinations"
      />

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let Himalayan Ape - The Real Survivor guide you to unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Plan Your Trip
            </a>
            <a
              href="https://wa.me/917909674407"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
