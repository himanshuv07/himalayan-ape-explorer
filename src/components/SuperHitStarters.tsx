import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Calendar, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SuperHitStarters = () => {
  const navigate = useNavigate();

  const handleShortlist = (packageTitle: string) => {
    // Navigate to contact page or show a toast
    navigate('/contact');
  };

  const packages = [
    {
      id: 1,
      title: "Bali's Best Gateway",
      subtitle: "Island & Cultural Nights",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      originalPrice: "₹1,682",
      currentPrice: "₹1,399",
      duration: "7 nights, 8 days",
      rating: 4.8,
      reviews: 1205,
      locations: "2 Places",
      badge: "BEST DEAL"
    },
    {
      id: 2,
      title: "Singapore Wonder Nightout",
      subtitle: "Marina & Entertainment Nights",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      originalPrice: "₹59,609",
      currentPrice: "₹49,500",
      duration: "5 nights, 6 days",
      rating: 4.9,
      reviews: 892,
      locations: "3 Places",
      badge: "POPULAR"
    },
    {
      id: 3,
      title: "Thailand Twin Bangkok & Pattaya",
      subtitle: "Beach & City Combination",
      image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      originalPrice: "₹21,069",
      currentPrice: "₹18,999",
      duration: "6 nights, 7 days",
      rating: 4.7,
      reviews: 1456,
      locations: "2 Places",
      badge: "HOT DEAL"
    },
    {
      id: 4,
      title: "Backwater Dubai Tour",
      subtitle: "Luxury & Desert Safari",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      originalPrice: "₹43,999",
      currentPrice: "₹39,999",
      duration: "5 nights, 6 days",
      rating: 4.8,
      reviews: 2103,
      locations: "4 Places",
      badge: "LUXURY"
    },
    {
      id: 5,
      title: "Turkey to Thailand",
      subtitle: "Two Nations, One Journey",
      image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      originalPrice: "₹25,165",
      currentPrice: "₹22,499",
      duration: "8 nights, 9 days",
      rating: 4.9,
      reviews: 756,
      locations: "6 Places",
      badge: "TRENDING"
    }
  ];

  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">SUPER HIT STARTERS</h2>
        </div>

        <Carousel className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {packages.map((pkg) => (
              <CarouselItem key={pkg.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <Badge className={`absolute top-3 left-3 ${
                      pkg.badge === 'BEST DEAL' ? 'bg-red-500' :
                      pkg.badge === 'POPULAR' ? 'bg-blue-500' :
                      pkg.badge === 'HOT DEAL' ? 'bg-orange-500' :
                      pkg.badge === 'LUXURY' ? 'bg-purple-500' :
                      'bg-green-500'
                    } text-white text-xs font-bold px-2 py-1`}>
                      {pkg.badge}
                    </Badge>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{pkg.subtitle}</p>
                    
                    <div className="flex items-center space-x-4 text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>{pkg.rating}</span>
                        <span>({pkg.reviews})</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span>{pkg.locations}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="text-lg font-bold text-gray-900">{pkg.currentPrice}</span>
                          <span className="text-sm text-gray-500 line-through">{pkg.originalPrice}</span>
                        </div>
                        <p className="text-xs text-gray-500">Per person</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => {
                        if (pkg.title.includes('Dubai') || pkg.title.includes('Singapore') || pkg.title.includes('Thailand') || pkg.title.includes('Turkey')) {
                          navigate('/international');
                        } else {
                          navigate('/domestic');
                        }
                      }}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg cursor-pointer"
                    >
                      Explore Trip
                    </button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default SuperHitStarters;
