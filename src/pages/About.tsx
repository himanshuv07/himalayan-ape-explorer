
import React from 'react';
import { Mountain, Users, Award, Heart, Compass, Camera, TreePine, Tent, Plane, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Mountain,
      title: "Expert Trekking",
      description: "Specialized in Indian Himalayas trekking with experienced guides"
    },
    {
      icon: Users,
      title: "Versatility in Tourism",
      description: "Complete range of adventure and spiritual tourism services"
    },
    {
      icon: Award,
      title: "Top Class Hospitality",
      description: "Premium quality services and equipment for outstanding experiences"
    },
    {
      icon: Heart,
      title: "Tremendous Support",
      description: "24/7 guidance with trusted local contacts and vendors"
    }
  ];

  const destinations = [
    "Leh-Ladakh", "Manali", "Shimla", "Haridwar", "Dehradun", "Nainital",
    "Kathmandu", "Pokhara", "Mt. Everest Base Camp", "Tiger's Nest", "Thimphu", "Paro"
  ];

  const services = [
    { name: "Trekking", icon: Mountain },
    { name: "Hiking", icon: Compass },
    { name: "Camping", icon: Tent },
    { name: "Paragliding", icon: Plane },
    { name: "Bird Watching", icon: Camera },
    { name: "Nature Walks", icon: TreePine }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-800 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 border border-white/20 rounded-full animate-pulse animation-delay-500"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 border border-white/10 rounded-full animate-bounce"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About <span className="text-blue-400">Himalayan Ape</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 animate-fade-in animation-delay-300">
            The Real Survivor - Your Trusted Adventure Companion
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Himalayan Ape is all set to reconcile the pleasure of travelling. We are taking ahead of the price of sharing with you that Himalayan Ape is a world-class tour operating agency. We mainly deal with trekking to Indian Himalayas.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Apart from trekking, we also offer different kinds of travelling services like hiking, camping, climbing, paragliding, river rafting, bike trips and bungee jumping. Although our primary destination is the Himalayas, we also offer travel trips to Himachal Pradesh, Uttarakhand and even outside countries like Nepal and Bhutan.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&q=80"
              alt="Mountain Trekking"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-500 rounded-full opacity-10 animate-pulse animation-delay-700"></div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {/* Versatility Section */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Versatility in Tourism</h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center max-w-4xl mx-auto">
              At Himalayan Ape we believe that every kind of requested tourism shall be provided to the travellers, that's why we have an amazing variety of tourism which includes Jungle Safari where we provide proper vehicle and guide along with you, Bird watching for people who are studying Ornithology or simply people who want to experience nature in its vivid form, Nature walk so that you completely soak yourself into the nature. More than that, we also offer spiritual tours for various locations within the mentioned places.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center group hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <service.icon className="w-8 h-8 mx-auto mb-3 text-green-600 group-hover:text-green-700 group-hover:scale-110 transition-all duration-300" />
                  <p className="text-sm font-medium text-gray-700">{service.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hospitality Section */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Top Class Hospitality</h3>
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              We understand that travellers desire a fulfilling trip and we take every measure to make that happen for the travellers. We ensure that our travellers receive the hospitality of top tier quality. We make sure that your bellies are filled with delicious meals during the trip. We provide all kinds of equipment necessary for trekking. Our motto is to provide exceptional services to our travellers so that their experience becomes outstanding.
            </p>
          </div>

          {/* Support Section */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">Tremendous Support</h3>
            <p className="text-gray-600 text-lg leading-relaxed text-center max-w-4xl mx-auto">
              While you are on one of our trips, you will never feel any kind of uncertainty because of the support that you are going to get from our employees. They will guide you at every instance and share all the details of the location as per your convenience. We have established a lot of trustworthy contacts with local people and vendors over our travel destinations so your experience isn't going to be hampered with any kind of hindrance.
            </p>
          </div>
        </div>

        {/* Destinations Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Destinations</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl p-4 text-center group hover:from-blue-200 hover:to-indigo-200 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
              >
                <Star className="w-5 h-5 mx-auto mb-2 text-blue-600 group-hover:text-blue-700" />
                <p className="font-medium text-gray-700 group-hover:text-gray-800">{destination}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of satisfied travelers who have experienced the magic of the Himalayas with us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
