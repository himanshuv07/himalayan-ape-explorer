
import React, { useState } from 'react';

const GenreSelection = () => {
  const [selectedGenre, setSelectedGenre] = useState('Popular');

  const genres = [
    'Popular',
    'Romance',
    'Beach',
    'Relax',
    'Food',
    'Adventure',
    'Family',
    'Cityscape',
    'Mountain',
    'Others'
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          PICK YOUR GENRE
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setSelectedGenre(genre)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedGenre === genre
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenreSelection;
