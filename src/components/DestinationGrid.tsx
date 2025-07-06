
import React from 'react';
import DestinationCard from './DestinationCard';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
  price: string;
  duration: string;
}

interface DestinationGridProps {
  destinations: Destination[];
  title: string;
  subtitle?: string;
}

const DestinationGrid: React.FC<DestinationGridProps> = ({ destinations, title, subtitle }) => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DestinationGrid;
