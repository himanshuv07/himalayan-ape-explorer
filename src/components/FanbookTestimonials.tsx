import React from 'react';

const FanbookTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sachin & Shalini",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Our honeymoon trip to Singapore was seamlessly planned by the Pickyourtrail team.",
      featured: true
    },
    {
      id: 2,
      name: "Rahul & Priya",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b589?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Amazing experience in Dubai!"
    },
    {
      id: 3,
      name: "Amit Kumar",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Thailand trip was fantastic!"
    },
    {
      id: 4,
      name: "Sneha Patel",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Maldives was a dream come true!"
    },
    {
      id: 5,
      name: "Vikram Singh",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Bali adventure was incredible!"
    },
    {
      id: 6,
      name: "Kavya Sharma",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Turkey exploration was wonderful!"
    },
    {
      id: 7,
      name: "Arjun Mehta",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      quote: "Switzerland was magical!"
    }
  ];

  const mainTestimonial = testimonials.find(t => t.featured);
  const sideTestimonials = testimonials.filter(t => !t.featured);

  return (
    <div className="py-16 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-400 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-black/20"></div>
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel Experience"
                className="w-full h-80 object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-2xl font-bold mb-2">Travel the world like</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-6">NEERAJ</div>
                  <a
                    href="https://www.youtube.com/@himalayanape01/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Watch Videos →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="relative">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                <span className="text-purple-600">FANBOOK</span>
              </h2>
              <h3 className="text-2xl font-bold text-pink-500 italic mb-4">Testimonials</h3>
            </div>

            {/* Floating testimonial images */}
            <div className="relative h-80 mb-8">
              {sideTestimonials.map((testimonial, index) => {
                const positions = [
                  'top-0 left-0',
                  'top-0 right-16',
                  'top-16 left-32',
                  'top-32 right-0',
                  'bottom-16 left-16',
                  'bottom-0 right-32'
                ];
                
                return (
                  <div
                    key={testimonial.id}
                    className={`absolute ${positions[index]} w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer animate-bounce`}
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
              
              {/* Main testimonial */}
              {mainTestimonial && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl">
                  <img
                    src={mainTestimonial.image}
                    alt={mainTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Main testimonial text */}
            {mainTestimonial && (
              <div className="text-center">
                <p className="text-gray-700 text-lg italic mb-4">
                  "{mainTestimonial.quote}"
                </p>
                <p className="font-bold text-gray-900">{mainTestimonial.name}</p>
              </div>
            )}

            <div className="text-center mt-8">
              <button className="inline-flex items-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                View More Testimonials →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FanbookTestimonials;