
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
    // Add search functionality here
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
          <div className="flex items-center px-4 py-3 flex-1">
            <Search className="text-gray-400 mr-3" size={20} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search countries, cities"
              className="w-full outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
