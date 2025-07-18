import React from 'react';
import Hero from '../components/Hero';
import SuperHitStarters from '../components/SuperHitStarters';
import VideoTestimonials from '../components/VideoTestimonials';
import BudgetSection from '../components/BudgetSection';
import DestinationCarousel from '../components/DestinationCarousel';
import InstagramHighlights from '../components/InstagramHighlights';
import FanbookTestimonials from '../components/FanbookTestimonials';
import CircularGallery from '../components/CircularGallary';


const Index = () => {

  const InternationalDestinations = [
    { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80", packages: "Dubai Tour" },
    { name: "Singapore", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=80", packages: "Singapore Packages" },
    { name: "Bali", image: "https://images.unsplash.com/photo-1554433076-03a24bc711bc?auto=format&fit=crop&w=800&q=80", packages: "Bali Tour" },
    { name: "Thailand", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80", packages: "Thailand Tour" },
    { name: "Maldives", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80", packages: "Maldives Packages" },
    { name: "Indonesia", image: "https://images.unsplash.com/photo-1600673770726-c77f603b4392?auto=format&fit=crop&w=800&q=80", packages: "Indonesia Tour" },
    { name: "Vietnam", image: "https://images.unsplash.com/photo-1575456454701-c19f5604212f?auto=format&fit=crop&w=800&q=80", packages: "Vietnam Tour" },
    { name: "Bhutan", image: "https://images.unsplash.com/photo-1590763089493-ea19843f03b6?auto=format&fit=crop&w=800&q=80", packages: "Bhutan Tour" }
  ];
  
  const DOMESTICDESTINATIONS = [
    { name: "Shimla", image: "https://images.unsplash.com/photo-1623060774093-94e15c8f6d97?auto=format&fit=crop&w=800&q=80", packages: "Shimla Trip" },
    { name: "Manali", image: "https://images.unsplash.com/photo-1611162617213-3d8b2c2b2dd6?auto=format&fit=crop&w=800&q=80", packages: "Manali Trip" },
    { name: "Kasol", image: "https://images.unsplash.com/photo-1652344040127-9bd07e5be5b4?auto=format&fit=crop&w=800&q=80", packages: "Kasol Packages" },
    { name: "Jibhi", image: "https://images.unsplash.com/photo-1643452430047-2ce1764be0e3?auto=format&fit=crop&w=800&q=80", packages: "Jibhi Trip" },
    { name: "Dharamshala", image: "https://images.unsplash.com/photo-1636124166499-c4899c637cb2?auto=format&fit=crop&w=800&q=80", packages: "Dharamshala Packages" },
    { name: "Haridwar", image: "https://images.unsplash.com/photo-1636124586314-8e1ff0a222f7?auto=format&fit=crop&w=800&q=80", packages: "Haridwar City Tour" },
    { name: "Rishikesh", image: "https://images.unsplash.com/photo-1577260109400-5ee9d3e32b2b?auto=format&fit=crop&w=800&q=80", packages: "Rishikesh Adventure" },
    { name: "Mussoorie", image: "https://images.unsplash.com/photo-1622535830283-6308f1a2b1c9?auto=format&fit=crop&w=800&q=80", packages: "Mussoorie Tour" },
    { name: "Auli", image: "https://images.unsplash.com/photo-1671842863345-3b0d23f6047a?auto=format&fit=crop&w=800&q=80", packages: "Auli Trip" },
    { name: "Nainital", image: "https://images.unsplash.com/photo-1574011874809-0c5f114a9780?auto=format&fit=crop&w=800&q=80", packages: "Nainital Packages" },
    { name: "Lansdowne", image: "https://images.unsplash.com/photo-1633090580504-1a162f5c5b1a?auto=format&fit=crop&w=800&q=80", packages: "Lansdowne Tour" }
  ];
  
  const RELIGIOUSDESTINATIONS = [
    { name: "Haridwar", image: "https://images.unsplash.com/photo-1636124586314-8e1ff0a222f7?auto=format&fit=crop&w=800&q=80", packages: "Haridwar Pilgrimage" },
    { name: "Kedarnath", image: "https://images.unsplash.com/photo-1592477857032-df7e77cc64a1?auto=format&fit=crop&w=800&q=80", packages: "Kedarnath Yatra" },
    { name: "Badrinath", image: "https://images.unsplash.com/photo-1635792435881-b15755b30889?auto=format&fit=crop&w=800&q=80", packages: "Badrinath Tour" },
    { name: "Gangotri", image: "https://images.unsplash.com/photo-1650432227455-3d927ca7eb7e?auto=format&fit=crop&w=800&q=80", packages: "Gangotri Darshan" },
    { name: "Yamnotri", image: "https://images.unsplash.com/photo-1632073357120-471f8c6f8e9e?auto=format&fit=crop&w=800&q=80", packages: "Yamnotri Temple Visit" },
    { name: "Kainchi Dham", image: "https://images.unsplash.com/photo-1617806119695-88b9ec7e2754?auto=format&fit=crop&w=800&q=80", packages: "Kainchi Dham Visit" },
    { name: "Kailash Darshan", image: "https://images.unsplash.com/photo-1613580086172-6f74b33f2df6?auto=format&fit=crop&w=800&q=80", packages: "Kailash Darshan Yatra" },
    { name: "Devi Darshan Himachal", image: "https://images.unsplash.com/photo-1583241800527-996b65a97ec6?auto=format&fit=crop&w=800&q=80", packages: "Devi Darshan Himachal" }
  ];
  

  return (
    <div>
      <Hero />
      <SuperHitStarters />
      <BudgetSection />

      {/* Circular Gallery Section */}
      {/* <div style={{ height: '600px', position: 'relative' }}>
        <div className="gallary align-center text-4xl font-bold text-gray-800 absolute top-10 left-0 right-0 z-10 flex justify-center h-full ">
          Gallary
        </div>
        <CircularGallery bend={0} textColor="#" borderRadius={0.05} scrollEase={0.02}/>
      </div> */}

      {/* Destination Sections */}
      <DestinationCarousel 
        title="International Destinations" 
        destinations={InternationalDestinations}
      />
      
      <DestinationCarousel 
        title="DOMESTIC DESTINATIONS" 
        destinations={DOMESTICDESTINATIONS}
      />
      
      <DestinationCarousel 
        title="RELIGIOUS DESTINATIONS" 
        destinations={RELIGIOUSDESTINATIONS}
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
              href="https://wa.me/917275223319"
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
