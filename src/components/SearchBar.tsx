
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  const destinations = {
    international: ['Dubai', 'Singapore', 'Bali', 'Thailand', 'Maldives', 'Indonesia', 'Vietnam', 'Bhutan'],
    domestic: ['Shimla', 'Manali', 'Kasol', 'Jibhi', 'Dharamshala', 'Haridwar', 'Rishikesh', 'Mussoorie', 'Auli', 'Nainital', 'Lansdowne'],
    religious: ['Haridwar', 'Kedarnath', 'Badrinath', 'Gangotri', 'Yamunotri', 'Kainchi Dham', 'Kailash Darshan', 'Devi Darshan Himachal']
  };

  const allDestinations = [...destinations.international, ...destinations.domestic, ...destinations.religious];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchQuery(value);
    
    if (value.length > 0) {
      const filtered = allDestinations.filter(dest => 
        dest.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (destination: string) => {
    setSearchQuery(destination);
    setShowSuggestions(false);
    
    if (destinations.international.includes(destination)) {
      navigate('/international');
    } else if (destinations.domestic.includes(destination)) {
      navigate('/domestic');
    } else if (destinations.religious.includes(destination)) {
      navigate('/religious');
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const destination = allDestinations.find(dest => 
        dest.toLowerCase() === searchQuery.toLowerCase()
      );
      if (destination) {
        handleSuggestionClick(destination);
      }
    }
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
              onChange={handleInputChange}
              onFocus={() => searchQuery && setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              placeholder="Search countries, cities"
              className="w-full outline-none text-gray-700 placeholder-gray-500"
            />
          </div>
        </div>
        
        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-white rounded-lg shadow-lg mt-2 z-50 max-h-60 overflow-y-auto">
            {suggestions.map((suggestion, index) => (
              <div
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 transition-colors duration-200"
              >
                <div className="flex items-center">
                  <Search className="text-gray-400 mr-3" size={16} />
                  <span className="text-gray-700">{suggestion}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </form>
    </div>
  );
};

export default SearchBar;
