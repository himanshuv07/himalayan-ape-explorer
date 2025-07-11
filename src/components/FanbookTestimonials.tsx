import React from 'react';
import { Star, Quote } from 'lucide-react';
import video from '../assets/Testimonial Video.mp4';

const FanbookTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sachin & Shalini",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Our honeymoon trip to Singapore was seamlessly planned by the Pickyourtrail team. Every detail was perfect!",
      rating: 5,
      location: "Singapore",
      featured: true
    },
    {
      id: 2,
      name: "Rahul & Priya",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Amazing experience in Dubai! The itinerary was perfectly crafted.",
      rating: 5,
      location: "Dubai"
    },
    {
      id: 3,
      name: "Amit Kumar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Thailand trip was fantastic! Every moment was memorable.",
      rating: 5,
      location: "Thailand"
    },
    {
      id: 4,
      name: "Sneha Patel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Maldives was a dream come true! Perfect honeymoon destination.",
      rating: 5,
      location: "Maldives"
    },
    {
      id: 5,
      name: "Vikram Singh",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Bali adventure was incredible! Best vacation ever.",
      rating: 5,
      location: "Bali"
    },
    {
      id: 6,
      name: "Kavya Sharma",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Turkey exploration was wonderful! Highly recommend.",
      rating: 5,
      location: "Turkey"
    }
  ];

  const mainTestimonial = testimonials.find(t => t.featured);
  const sideTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-purple-300/20 to-pink-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-br from-indigo-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-pink-300/15 to-indigo-300/15 rounded-full blur-2xl animate-pulse animation-delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="absolute inset-0 bg-black/30"></div>

              <a
                href="https://www.youtube.com/@himalayanape01/shorts"
                target="_blank"
                rel="noopener noreferrer"
                // className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <video
                  src={video}
                  className="w-full h-80 object-cover opacity-90"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                    Travel the world like
                  </h3>
                  <div className="text-4xl font-black text-yellow-400 mb-6 animate-pulse">HIMANSHU</div>
                    <span className="mr-2">🎬
                    </span>
                    Watch Adventures →
                  </div>
                </div> */}
              </a>

              {/* Floating elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-yellow-400/30 rounded-full animate-bounce animation-delay-500"></div>
            </div>
          </div>

          {/* Enhanced Testimonials Section */}
          <div className="relative order-1 lg:order-2 ">
            <div className="mb-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Quote className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    FANBOOK
                  </h2>
                  <h3 className="text-xl font-bold text-pink-500 italic ">Testimonials</h3>
                </div>
              </div>
              <div className="flex space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 font-medium">Over 10,000+ Happy Travelers</p>
            </div>

            {/* Floating testimonial images with enhanced animation */}
            <div className="relative h-64 mb-8">
              {sideTestimonials.map((testimonial, index) => {
                const positions = [
                  'top-0 left-0 animate-float',
                  'top-0 right-20 animate-float-delayed',
                  'top-20 left-36 animate-bounce',
                  'top-40 right-0 animate-float',
                  'bottom-20 left-20 animate-float-delayed',
                  'bottom-0 right-36 animate-bounce'
                ];

                return (
                  <div
                    key={testimonial.id}
                    className={`absolute ${positions[index]} group cursor-pointer`}
                  >
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-125 transition-all duration-300 bg-gradient-to-br from-purple-200 to-pink-200">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-2 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-yellow-400">★ {testimonial.rating}/5</div>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/80"></div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Enhanced main testimonial */}
              {mainTestimonial && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group">
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-6 border-gradient-to-r from-purple-500 to-pink-500 shadow-2xl hover:scale-110 transition-all duration-500 bg-gradient-to-br from-purple-100 to-pink-100">
                      <img
                        src={mainTestimonial.image}
                        alt={mainTestimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Glowing ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-purple-400/50 animate-ping"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Enhanced main testimonial text */}
            {mainTestimonial && (
              <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-purple-100">
                <Quote className="w-6 h-6 text-purple-500 mx-auto mb-3" />
                <p className="text-gray-800 text-lg italic mb-4 leading-relaxed">
                  "{mainTestimonial.quote}"
                </p>
                <div className="space-y-2">
                  <p className="font-bold text-gray-900 text-lg">{mainTestimonial.name}</p>
                  <div className="flex justify-center space-x-1 mb-2">
                    {[...Array(mainTestimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-purple-600 font-semibold">{mainTestimonial.location} Trip</p>
                </div>
              </div>
            )}

            <div className="text-center mt-8">
              <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="mr-2">💝</span>
                View More Love Stories →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanbookTestimonials;
