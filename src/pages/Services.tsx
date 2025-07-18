
import React, { useState } from 'react';
import { Clock, MapPin, Users, Utensils, Droplets } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [activeTab, setActiveTab] = useState('adventure');

  const adventureServices = [
    {
      image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=400&q=80",
      title: "Trekking",
      description: "Untie your trekking expectations",
      detail: "Experience world-class trekking in the Indian Himalayas with our expert guides and complete equipment support.",
      features: ["Expert guides", "Complete equipment", "Safety first approach", "Group & solo options"]
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&q=80",
      title: "Hiking",
      description: "Wander endlessly",
      detail: "Explore scenic trails and hidden gems with our carefully curated hiking experiences.",
      features: ["Scenic routes", "Local insights", "All fitness levels", "Photography stops"]
    },
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80",
      title: "Camping",
      description: "You deserve a camping break",
      detail: "Reconnect with nature through our premium camping experiences under starlit skies.",
      features: ["Premium tents", "Delicious meals", "Campfire nights", "Stargazing sessions"]
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      title: "Climbing",
      description: "Climb the real heights with us",
      detail: "Challenge yourself with our rock climbing and mountaineering expeditions.",
      features: ["Professional equipment", "Safety protocols", "Skill development", "Certified instructors"]
    },
    {
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=400&q=80",
      title: "Paragliding",
      description: "Fly high",
      detail: "Soar through the skies and witness breathtaking aerial views of the Himalayas.",
      features: ["Tandem flights", "Solo training", "Scenic locations", "Professional pilots"]
    },
    {
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&q=80",
      title: "River Rafting",
      description: "Be restless",
      detail: "Experience the thrill of white-water rafting in pristine Himalayan rivers.",
      features: ["All difficulty levels", "Safety equipment", "Experienced guides", "Scenic rapids"]
    },
    {
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=400&q=80",
      title: "Bike Trips",
      description: "Feel the madness",
      detail: "Explore mountain roads and scenic routes on our exciting motorcycle adventures.",
      features: ["Quality bikes", "Scenic routes", "Local experiences", "Support vehicle"]
    },
    {
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=400&q=80",
      title: "Bungee Jumping",
      description: "Ahead of adventure",
      detail: "Take the ultimate leap of faith with our safe and thrilling bungee jumping experiences.",
      features: ["International standards", "Safety certified", "Scenic locations", "Professional crew"]
    }
  ];

  const wildlifeServices = [
    {
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=crop&w=400&q=80",
      title: "Jungle Safari",
      description: "Spend your days in the epitome of mother nature",
      detail: "Explore wildlife sanctuaries with expert guides and proper safari vehicles.",
      features: ["Expert naturalists", "Premium vehicles", "Wildlife photography", "Local insights"]
    },
    {
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&q=80",
      title: "Bird Watching",
      description: "Praise the beauty of birds",
      detail: "Perfect for ornithology enthusiasts and nature lovers seeking vivid experiences.",
      features: ["Bird identification", "Photography tips", "Best locations", "Expert guides"]
    },
    {
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80",
      title: "Nature Walk",
      description: "Planning your walks in the paths of nature",
      detail: "Immerse yourself completely in nature with our guided nature walks.",
      features: ["Flora & fauna", "Peaceful trails", "Photography", "Local knowledge"]
    }
  ];

  const spiritualServices = [
    {
      image: "https://images.unsplash.com/photo-1582563172107-4b2d2b5a83a8?auto=format&fit=crop&w=400&q=80",
      title: "Pilgrimage",
      description: "Personify your prayers",
      detail: "Visit sacred destinations and ancient pilgrimage sites with proper guidance.",
      features: ["Sacred sites", "Cultural insights", "Comfortable stay", "Spiritual guidance"]
    },
    {
      image: "https://images.unsplash.com/photo-1626619876325-5ba12e7b6d9e?auto=format&fit=crop&w=400&q=80",
      title: "Ancient Temples",
      description: "Fabricate your beliefs",
      detail: "Explore ancient temples and their rich history with knowledgeable guides.",
      features: ["Historical context", "Architectural insights", "Cultural immersion", "Photography"]
    },
    {
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=400&q=80",
      title: "Yoga Retreat",
      description: "Travel, health and life",
      detail: "Combine travel with wellness through our yoga and meditation retreats.",
      features: ["Certified instructors", "Scenic locations", "Healthy meals", "Holistic wellness"]
    }
  ];

  const trekkingInfo = [
    {
      icon: MapPin,
      title: "Trekking in Bhutan",
      description: "Whether you are looking for a day hike or a gruelling 31 day adventure, Bhutan has it all. Pristine mountain lakes, imposing glaciers and some of the world's most endangered species await you in the mountainous amphitheatre of the Himalayas."
    },
    {
      icon: Clock,
      title: "Best Time to Trek",
      description: "The best months for trekking in Bhutan is spring: from March to June and autumn from mid-September to November. Winter months should be avoided due to cold weather and snow-blocked trails."
    },
    {
      icon: Users,
      title: "Trek Support Team",
      description: "Each trek group is accompanied by a trained guide, trek chef, assistant guides and local horsemen. For a group of two people, there will be five staff members including horses to carry equipment and supplies."
    },
    {
      icon: Utensils,
      title: "Meals on Trek",
      description: "You are supplied with lavish food items including Chinese, Indian and continental dishes. Hot breakfast, packed lunch, and dinner are provided with fresh fruits, tea, and coffee."
    },
    {
      icon: Droplets,
      title: "Water on Trek",
      description: "You will be supplied with bottled water during city tours. On trek, you will be provided boiled water. Trek assistants will collect water from rivers and streams and boil it for you."
    }
  ];

  const handleLearnMore = (serviceName: string) => {
    // Scroll to contact section or redirect to contact page with service info
    window.location.href = `/contact?service=${encodeURIComponent(serviceName)}`;
  };

  const renderServiceCard = (service: any, index: number) => (
    <Card key={index} className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-white to-gray-50 overflow-hidden">
      <CardHeader className="relative pb-4">
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full -translate-y-4 translate-x-4"></div>
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg overflow-hidden">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <CardTitle className="text-xl font-bold text-red-600 group-hover:text-red-700 transition-colors duration-300">
          {service.title}
        </CardTitle>
        <CardDescription className="text-blue-600 font-medium">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{service.detail}</p>
        <div className="space-y-2">
          {service.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </div>
          ))}
        </div>
        <Button 
          onClick={() => handleLearnMore(service.title)}
          className="w-full mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
          <div className="absolute bottom-10 right-10 w-20 h-20 border border-white/20 rounded-full animate-spin" style={{ animationDuration: '15s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 border border-white/10 rounded-full animate-bounce"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our <span className="text-yellow-300">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-yellow-100 animate-fade-in animation-delay-300">
            Reconciling a passion for travelling with world-class adventure experiences
          </p>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Himalayan Ape?</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HimalayanApe is reconciling a passion for travelling. Our team understands that travelling is not just a verb but it's an emotion. This is the reason why we took our decision to emerge as a huge travelling agency. We are glad to announce that we are offering several services to all the travelling enthusiasts out there.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('adventure')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'adventure'
                ? 'bg-red-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Adventure Tourism
          </button>
          <button
            onClick={() => setActiveTab('wildlife')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'wildlife'
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Wildlife Tourism
          </button>
          <button
            onClick={() => setActiveTab('spiritual')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'spiritual'
                ? 'bg-purple-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Spiritual & Yoga Tourism
          </button>
          <button
            onClick={() => setActiveTab('trekking')}
            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeTab === 'trekking'
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Trekking Information
          </button>
        </div>

        {/* Service Content */}
        {activeTab === 'adventure' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {adventureServices.map(renderServiceCard)}
          </div>
        )}

        {activeTab === 'wildlife' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wildlifeServices.map(renderServiceCard)}
          </div>
        )}

        {activeTab === 'spiritual' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {spiritualServices.map(renderServiceCard)}
          </div>
        )}

        {activeTab === 'trekking' && (
          <div className="space-y-12">
            {/* Trekking Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544735716-392ebd218cb6?auto=format&fit=crop&w=1600&q=80"
                alt="Trekking in Bhutan"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">Trekking Information</h3>
                  <p className="text-lg">Complete guide to our trekking services and operations</p>
                </div>
              </div>
            </div>

            {/* Trekking Information Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {trekkingInfo.map((info, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {info.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Trekking Details */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Trekking Trail Information</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Trail Challenges</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Trekking in Bhutan is physically challenging as it involves a vigorous long walk up hillside and through mountains with harsh terrain with radical changes in elevation. The average daily elevation gain is about 500m spread over eight to twelve kilometers.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Campsites are sometimes spaced out over long distances, requiring trekkers to walk seven to nine hours in a day. Trails could also be muddy and at times you may have to hop small streams.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">Our Trekking Guides</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Our trekking guides are experienced, talented and respected professionals in the industry. They are well prepared to handle any situation that trekkers can encounter on the mountain. We give highest priority to your personal safety on trails.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Our guides receive annual training in emergency first aid and Acute Mountain Sickness (AMS). They can prevent, recognize and treat altitude-related illnesses and can teach you everything you need to know about high altitude trekking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Your Next Adventure?</h2>
          <p className="text-xl mb-8 text-yellow-100">
            HimalayanApe covers all kinds of trips in order of achieving your sanity with our efforts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Book Your Adventure
            </a>
            <a
              href="https://wa.me/917275223319"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
