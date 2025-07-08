import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoTestimonials = () => {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const testimonials = [
    {
      id: 1,
      title: "Aashwarya's Dubai Vacation",
      thumbnail: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      customerName: "Aashwarya",
      location: "Dubai"
    },
    {
      id: 2,
      title: "Shradha Srinath's Maldives Holiday",
      thumbnail: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      customerName: "Shradha Srinath",
      location: "Maldives"
    },
    {
      id: 3,
      title: "Pradeep K's Singapore Vacation",
      thumbnail: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      customerName: "Pradeep K",
      location: "Singapore"
    },
    {
      id: 4,
      title: "Aruganam's Mauritius Vacation",
      thumbnail: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
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
              onClick={() => window.open('/contact', '_self')}
              className="group relative bg-white overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <video
                  src={testimonial.videoUrl}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300" />

                {/* Customer Info */}
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-lg">{testimonial.customerName}</h3>
                  <p className="text-sm opacity-90">{testimonial.location}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                    Book Trip
                  </div>
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
