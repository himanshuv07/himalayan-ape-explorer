
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BudgetSection = () => {
  const navigate = useNavigate();

  const budgetRanges = [
    {
      range: "₹ 50,000",
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-blue-700",
      filter: "budget=50000"
    },
    {
      range: "₹ 75,000",
      color: "from-green-400 to-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-green-100",
      textColor: "text-green-700",
      filter: "budget=75000"
    },
    {
      range: "₹ 1,00,000",
      color: "from-purple-400 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
      textColor: "text-purple-700",
      filter: "budget=100000"
    },
    {
      range: "₹ 2,00,000",
      color: "from-orange-400 to-orange-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
      textColor: "text-orange-700",
      filter: "budget=200000"
    },
    {
      range: "₹ 3,00,000",
      color: "from-pink-400 to-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
      textColor: "text-pink-700",
      filter: "budget=300000"
    }
  ];

  const handleBudgetClick = (filter: string) => {
    navigate(`/international?${filter}`);
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-gray-900">HOLIDAYS FOR EVERY</span>
          </h2>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent italic">
            Budget
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {budgetRanges.map((budget, index) => (
            <button
              key={index}
              onClick={() => handleBudgetClick(budget.filter)}
              className={`group relative ${budget.bgColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 px-8 py-6 rounded-2xl min-w-[140px]`}
            >
              <div className={`text-2xl font-bold ${budget.textColor} group-hover:scale-110 transition-transform duration-300`}>
                {budget.range}
              </div>
              <div className={`absolute inset-0 bg-gradient-to-r ${budget.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
              
              {/* 3D Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl opacity-0 group-hover:opacity-20 -z-10 blur-sm transition-opacity duration-300" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BudgetSection;
