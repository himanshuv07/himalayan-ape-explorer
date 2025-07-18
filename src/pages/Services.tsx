
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const [activeTab, setActiveTab] = useState('adventure');

  const adventureServices = [
    {
      name: "Trekking",
      description: "Untie your trekking expectations",
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "Hiking",
      description: "Wander endlessly",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "Camping",
      description: "You deserve a camping break",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "Climbing",
      description: "Climb the real heights with us",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "Paragliding",
      description: "Fly high",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "River Rafting",
      description: "Be restless",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "Bike Trips",
      description: "Feel the madness",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    },
    {
      name: "Bungee Jumping",
      description: "Ahead of adventure",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
      color: "text-red-600"
    }
  ];

  const wildlifeServices = [
    {
      name: "Jungle Safari",
      category: "Wildlife Tourism",
      description: "Spend your days in the epitome of mother nature",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
      color: "text-black"
    },
    {
      name: "Bird Watching",
      category: "Wildlife Tourism", 
      description: "Praise the beauty of birds",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      color: "text-black"
    },
    {
      name: "Nature Walk",
      category: "Wildlife Tourism",
      description: "Planning your walks in the paths of nature",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      color: "text-black"
    }
  ];

  const spiritualServices = [
    {
      name: "Pilgrimage",
      category: "Spiritual and Yoga Tourism",
      description: "Personify your prayers",
      image: "https://images.unsplash.com/photo-1582563172107-4b2d2b5a83a8?auto=format&fit=crop&w=400&q=80",
      color: "text-black"
    },
    {
      name: "Ancient Temples",
      category: "Spiritual and Yoga Tourism",
      description: "Fabricate your beliefs",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
      color: "text-black"
    },
    {
      name: "Yoga Retreat",
      category: "Spiritual and Yoga Tourism",
      description: "Travel, health and life",
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      color: "text-black"
    }
  ];

  const popularDestinations = [
    "Leh-Ladakh", "Manali", "Shimla", "Haridwar", "Dehradun", "Nainital", 
    "Kathmandu", "Pokhara", "Mt. Everest Base Camp", "Tiger's Nest", "Thimphu", "Paro"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Experience adventure, spirituality, and nature with our comprehensive tourism services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">HimalayanApe Services</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HimalayanApe is reconciling a passion for travelling. Our team understands that travelling is not just a verb but it's an emotion. 
            This is the reason why we took our decision to emerge as a huge travelling agency. We are glad to announce that we are offering 
            several services to all the travelling enthusiasts out there.
          </p>
        </div>

        {/* Services Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-12">
            <TabsTrigger value="adventure" className="text-lg py-3">Adventure Sports</TabsTrigger>
            <TabsTrigger value="wildlife" className="text-lg py-3">Wildlife & Nature</TabsTrigger>
            <TabsTrigger value="spiritual" className="text-lg py-3">Spiritual Tourism</TabsTrigger>
          </TabsList>

          <TabsContent value="adventure" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Adventure Services</h3>
              <p className="text-lg text-gray-600">HimalayanApe covers all kinds of trips in order of achieving your sanity with our efforts</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adventureServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-red-50 to-orange-50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className={`text-xl font-bold ${service.color} group-hover:scale-105 transition-transform duration-300`}>
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-center font-medium">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="wildlife" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Wildlife Tourism</h3>
              <p className="text-lg text-gray-600">Connect with nature through our wildlife and nature tourism services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wildlifeServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">{service.category}</div>
                    <CardTitle className={`text-xl font-bold ${service.color} group-hover:scale-105 transition-transform duration-300`}>
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-center font-medium">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="spiritual" className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Spiritual and Yoga Tourism</h3>
              <p className="text-lg text-gray-600">Find inner peace and spiritual awakening through our sacred journeys</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {spiritualServices.map((service, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
                  <CardHeader className="text-center pb-4">
                    <div className="mx-auto w-24 h-24 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={service.image} 
                        alt={service.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-2">{service.category}</div>
                    <CardTitle className={`text-xl font-bold ${service.color} group-hover:scale-105 transition-transform duration-300`}>
                      {service.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-700 text-center font-medium">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Popular Destinations */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Popular Destinations</h3>
          <p className="text-lg text-gray-600 text-center mb-8 max-w-4xl mx-auto">
            Explore our famous destinations across the Himalayas, including locations in Himachal Pradesh, Uttarakhand, Nepal, and Bhutan
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {popularDestinations.map((destination, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
                <p className="text-sm font-medium text-gray-700">{destination}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let us help you create unforgettable memories in the majestic Himalayas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/international"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Destinations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
