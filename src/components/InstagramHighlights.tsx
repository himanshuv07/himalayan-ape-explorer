import React, { useState } from 'react';
import { ExternalLink, Play, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import reel from '../assets/Insta video 1.mp4'; // your local reel file
import reel2 from '../assets/Insta video 2.mp4'; // your local reel file 2
import reel3 from '../assets/Insta video 3.mp4'; // your local reel file 3

const InstagramHighlights = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const highlights = [
    {
      id: 1,
      video: reel,
      title: "Mountain Adventure",
      subtitle: "Himalayan Trek - 14,100 ft",
      likes: "105,148",
      comments: "2,847",
      username: "himalayanape",
      url: "https://www.instagram.com/himalayanape/reel/Cvf3SnbtqFn/"
    },
    {
      id: 2,
      video: reel2,
      title: "Sunrise in Mountains",
      subtitle: "Golden hour moments",
      likes: "89,425",
      comments: "1,923",
      username: "himalayanape",
      url: "https://www.instagram.com/reel/Cv7KD56uF7x/"
    },
    {
      id: 3,
      video: reel3,
      title: "River Valley Trek",
      subtitle: "Nature's symphony",
      likes: "76,382",
      comments: "1,456",
      username: "himalayanape",
      url: "https://www.instagram.com/p/Cuq6hjssWop/"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      {/* Blurred animated blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                @himalayanape
              </h2>
              <p className="text-gray-600 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Adventure Travel • Mountain Expeditions
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover breathtaking adventures and mountain expeditions through our Instagram highlights
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((highlight) => (
            <div
              key={highlight.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
              onMouseEnter={() => setHoveredCard(highlight.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.open(highlight.url, "_blank")}
              style={{
                transform: hoveredCard === highlight.id ? 'rotateY(5deg) rotateX(5deg)' : 'rotateY(0deg) rotateX(0deg)',
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              {/* Video/Image preview */}
              <div className="relative h-80 overflow-hidden">
                {highlight.video.endsWith(".mp4") ? (
                  <video
                    src={highlight.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <img
                    src={highlight.video}
                    alt={highlight.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>

                {/* Instagram top section */}
                <div className="absolute top-4 left-4 right-4 z-10">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center ring-2 ring-white">
                        <span className="text-white font-bold text-sm">H</span>
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm">{highlight.username}</span>
                        <div className="flex items-center space-x-1">
                          <span className="text-blue-400 text-xs">✓</span>
                          <span className="text-gray-300 text-xs">• Following</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      Follow
                    </button>
                  </div>
                </div>

                {/* Bottom content overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{highlight.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{highlight.subtitle}</p>
                </div>

                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-4">
                    <button className="hover:scale-125 transition-transform duration-200">
                      <Heart className="w-6 h-6 text-gray-700 hover:text-red-500 transition-colors" />
                    </button>
                    <button className="hover:scale-125 transition-transform duration-200">
                      <MessageCircle className="w-6 h-6 text-gray-700 hover:text-blue-500 transition-colors" />
                    </button>
                    <button className="hover:scale-125 transition-transform duration-200">
                      <Send className="w-6 h-6 text-gray-700 hover:text-green-500 transition-colors" />
                    </button>
                  </div>
                  <button className="hover:scale-125 transition-transform duration-200">
                    <Bookmark className="w-6 h-6 text-gray-700 hover:text-purple-500 transition-colors" />
                  </button>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-sm text-gray-800">
                    {highlight.likes} likes
                  </p>
                  <p className="text-sm text-gray-600">
                    View all {highlight.comments} comments
                  </p>
                </div>

                {/* View on Instagram */}
                <button
                  onClick={() => window.open(highlight.url, '_blank')}
                  className="text-blue-500 text-sm hover:text-blue-600 transition-colors font-medium mt-2 flex items-center space-x-1"
                >
                  <span>View on Instagram</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.open("https://www.instagram.com/himalayanape/", "_blank")}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            <span>Follow @himalayanape on Instagram</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstagramHighlights;
