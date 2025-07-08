import React from 'react';
import { ExternalLink } from 'lucide-react';

const InstagramHighlights = () => {
  const highlights = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "CHANDRATAL",
      subtitle: "Altitude - 14,100 ft",
      likes: "105,148",
      username: "kailashrathreks"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Lucky Ali - Safarnama",
      likes: "669,028",
      username: "kailashrathreks"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Adele - Skyfall",
      subtitle: "starting the trek for summit",
      likes: "33,817",
      username: "kailashrathreks"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Instagram Highlight</h2>
            <p className="text-gray-600">Discover the world with our curated list of upcoming trips.</p>
          </div>
          <div className="flex space-x-2">
            <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center">
              ←
            </button>
            <button className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors flex items-center justify-center">
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="group relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={highlight.image}
                  alt={highlight.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Instagram-style overlay */}
                <div className="absolute top-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">M</span>
                      </div>
                      <span className="text-white font-semibold">{highlight.username}</span>
                      <span className="text-blue-400 text-sm">✓</span>
                    </div>
                    <button 
                      onClick={() => window.open('https://www.instagram.com/himalayanape/', '_blank')}
                      className="bg-blue-500 text-white px-3 py-1 rounded text-sm font-semibold hover:bg-blue-600 transition-colors"
                    >
                      View profile
                    </button>
                  </div>
                </div>

                {/* Content overlay */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{highlight.title}</h3>
                  {highlight.subtitle && (
                    <p className="text-sm opacity-90">{highlight.subtitle}</p>
                  )}
                </div>

                {/* Instagram icons */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Instagram-style bottom section */}
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-4">
                    <button className="hover:scale-110 transition-transform">❤️</button>
                    <button className="hover:scale-110 transition-transform">💬</button>
                    <button className="hover:scale-110 transition-transform">📤</button>
                  </div>
                  <button className="hover:scale-110 transition-transform">🔖</button>
                </div>
                <p className="font-semibold text-sm text-gray-800">{highlight.likes} likes</p>
                <a 
                  href="https://www.instagram.com/himalayanape/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 text-sm hover:underline"
                >
                  View more on Instagram
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramHighlights;