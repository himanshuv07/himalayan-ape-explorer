
import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      title: "Aashwarya's Dubai Vacation",
      thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "#",
      customerName: "Aashwarya",
      location: "Dubai"
    },
    {
      id: 2,
      title: "Shradha Srinath's Maldives Holiday",
      thumbnail: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "#",
      customerName: "Shradha Srinath",
      location: "Maldives"
    },
    {
      id: 3,
      title: "Pradeep K's Singapore Vacation",
      thumbnail: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "#",
      customerName: "Pradeep K",
      location: "Singapore"
    },
    {
      id: 4,
      title: "Aruganam's Mauritius Vacation",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      videoUrl: "#",
      customerName: "Aruganam",
      location: "Mauritius"
    }
  ];

  const handlePlayVideo = (id: number) => {
    setPlayingVideo(playingVideo === id ? null : id);
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              SIMPLY
            </span>{' '}
            <span className="text-gray-900">EXPERIENCES</span>
          </h2>
          <p className="text-lg text-gray-600">Loved by our customers ❤️</p>
          <div className="flex items-center justify-center mt-4 space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <div className="text-xs text-gray-500">4.5/5 • 55k reviews</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-800 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">f</span>
              </div>
              <div>
                <div className="text-yellow-400 text-sm">★★★★★</div>
                <div className="text-xs text-gray-500">4.5/5 • 8k reviews</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={testimonial.thumbnail}
                  alt={testimonial.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />
                
                {/* Play Button */}
                <button
                  onClick={() => handlePlayVideo(testimonial.id)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 hover:bg-white">
                    {playingVideo === testimonial.id ? (
                      <Pause className="w-6 h-6 text-gray-800 ml-1" />
                    ) : (
                      <Play className="w-6 h-6 text-gray-800 ml-1" />
                    )}
                  </div>
                </button>

                {/* Customer Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{testimonial.customerName}</h3>
                  <p className="text-sm opacity-90">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoTestimonials;
