
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
    <div className="pt-20">
      {budgetFilter && (
        <div className="bg-blue-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-blue-800">
              Showing destinations under ₹{parseInt(budgetFilter).toLocaleString()}
            </p>
          </div>
        </div>
      )}
      
      <DestinationGrid
        destinations={filteredDestinations}
        title="International Adventures"
        subtitle="Discover breathtaking destinations around the world"
      />
    </div>
  );
};

export default International;
