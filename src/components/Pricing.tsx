import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    features: [
      'Private board sharing',
      '5 GB Storage',
      'Web Analytics',
      'Private Mode'
    ]
  },
  {
    name: 'Pro',
    price: '10',
    popular: true,
    features: [
      'Private board sharing',
      '10 GB Storage',
      'Web Analytics (Advanced)',
      'Private Mode'
    ]
  },
  {
    name: 'Enterprise',
    price: '200',
    features: [
      'Private board sharing',
      'Unlimited Storage',
      'High Performance Network',
      'Private Mode'
    ]
  }
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-lg border ${
                plan.popular
                  ? 'border-purple-500 bg-purple-900/20'
                  : 'border-gray-800 bg-gray-800/50'
              } relative`}
            >
              {plan.popular && (
                <span className="absolute top-0 right-0 bg-purple-500 text-white px-3 py-1 text-sm rounded-bl-lg rounded-tr-lg">
                  Most Popular
                </span>
              )}
              
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-purple-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button
                className={`w-full py-3 rounded-lg ${
                  plan.popular
                    ? 'bg-purple-500 hover:bg-purple-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                } transition-colors`}
              >
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Pricing;