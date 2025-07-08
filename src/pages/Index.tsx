
import React from 'react';
import Hero from '../components/Hero';
import SuperHitStarters from '../components/SuperHitStarters';
import VideoTestimonials from '../components/VideoTestimonials';
import BudgetSection from '../components/BudgetSection';
import DestinationCarousel from '../components/DestinationCarousel';
import InstagramHighlights from '../components/InstagramHighlights';
import FanbookTestimonials from '../components/FanbookTestimonials';

const Index = () => {
  const middleEastDestinations = [
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Dubai Tour Packages" },
    { name: "Abu Dhabi", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Abu Dhabi Tour" },
    { name: "Bahrain", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Bahrain Tour Packages" },
    { name: "Qatar", image: "https://images.unsplash.com/photo-1539392373297-e746ef6c3b8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Qatar Tour Packages" },
    { name: "Kuwait", image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "All Trip Tour Packages" }
  ];

  const unitedStatesDestinations = [
    { name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "44 days, 3 nights" },
    { name: "Orlando", image: "https://images.unsplash.com/photo-1515378791036-0648a814c963?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Orlando Trip" },
    { name: "California", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "California" },
    { name: "East Coast USA", image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "East Coast USA" },
    { name: "West Coast USA", image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "West Coast USA" }
  ];

  const southEastAsiaDestinations = [
    { name: "Philippines", image: "https://images.unsplash.com/photo-1544966503-7cc5ac882d5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Philippines Packages" },
    { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1566050671740-1ca5b3c87e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Honeymoon Style Packages" },
    { name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Singapore Packages" },
    { name: "Malaysia", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Malaysia Packages" },
    { name: "Japan", image: "https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Japan Packages" }
  ];

  const scandinaviaDestinations = [
    { name: "Denmark", image: "https://images.unsplash.com/photo-1513622470522-26e89109c88d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Denmark Tour Packages" },
    { name: "Finland", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Finland Tour Packages" },
    { name: "Iceland", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Iceland Tour Packages" },
    { name: "Norway", image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Norway Tour Packages" },
    { name: "Sweden", image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", packages: "Sweden Tour Packages" }
  ];

  return (
    <div>
      <Hero />
      <SuperHitStarters />
      <BudgetSection />
      
      {/* Destination Sections */}
      <DestinationCarousel 
        title="MIDDLE EAST" 
        destinations={middleEastDestinations}
      />
      
      <DestinationCarousel 
        title="UNITED STATES" 
        destinations={unitedStatesDestinations}
      />
      
      <DestinationCarousel 
        title="SOUTH EAST ASIAN VACATIONS" 
        destinations={southEastAsiaDestinations}
      />
      
      <DestinationCarousel 
        title="SCANDINAVIA" 
        destinations={scandinaviaDestinations}
      />

      {/* Bottom Sections */}
      <VideoTestimonials />
      <FanbookTestimonials />
      <InstagramHighlights />

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
