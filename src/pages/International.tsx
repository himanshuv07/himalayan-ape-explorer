
import React, { useState, useEffect } from 'react';
import DestinationGrid from '../components/DestinationGrid';
import { internationalDestinations } from '../data/destinations';
import { useSearchParams } from 'react-router-dom';

const International = () => {
  const [searchParams] = useSearchParams();
  const [filteredDestinations, setFilteredDestinations] = useState(internationalDestinations);
  const budgetFilter = searchParams.get('budget');

  useEffect(() => {
    if (budgetFilter) {
      const budget = parseInt(budgetFilter);
      const filtered = internationalDestinations.filter(destination => {
        const price = parseInt(destination.price.replace(/[₹,]/g, ''));
        return price <= budget;
      });
      setFilteredDestinations(filtered);
    } else {
      setFilteredDestinations(internationalDestinations);
    }
  }, [budgetFilter]);

  return (
    <div className="pt-16">
      {budgetFilter && (
        <div className="bg-blue-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-blue-800">
              Showing destinations under ₹{parseInt(budgetFilter).toLocaleString()}
            </p>
          </div>
        </div>
      )}
      
      <div 
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">International Destinations</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover breathtaking destinations around the world with our international tour packages
          </p>
        </div>
      </div>
      
      <DestinationGrid
        destinations={filteredDestinations}
        title="International Adventures"
        subtitle="Discover breathtaking destinations around the world"
      />
    </div>
  );
};

export default International;
