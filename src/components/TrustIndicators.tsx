
import React from 'react';
import { Star, CheckCircle, Award, Headphones } from 'lucide-react';

const TrustIndicators = () => {
  const indicators = [
    {
      icon: <Star className="text-yellow-500" size={20} />,
      text: "4.6 ⭐ rated",
    },
    {
      icon: <CheckCircle className="text-green-500" size={20} />,
      text: "100% Customised Trips",
    },
    {
      icon: <Award className="text-green-500" size={20} />,
      text: "95% Visa Success Rate",
    },
    {
      icon: <Headphones className="text-green-500" size={20} />,
      text: "24x7 Concierge",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-8">
      {indicators.map((indicator, index) => (
        <div key={index} className="flex items-center space-x-2 text-white">
          {indicator.icon}
          <span className="text-sm font-medium">{indicator.text}</span>
        </div>
      ))}
    </div>
  );
};

export default TrustIndicators;
