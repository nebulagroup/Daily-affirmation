import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className="py-20 bg-midnight-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">Choose Your Plan</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-deep-blue p-8 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Free Plan</h3>
            <ul className="mb-6">
              <li className="flex items-center mb-2 text-gray-300">
                <Check className="w-5 h-5 mr-2 text-lavender" />
                Basic affirmations
              </li>
              <li className="flex items-center mb-2 text-gray-300">
                <Check className="w-5 h-5 mr-2 text-lavender" />
                One path of your choice
              </li>
              <li className="flex items-center mb-2 text-gray-300">
                <Check className="w-5 h-5 mr-2 text-lavender" />
                Weekly reflection prompts
              </li>
            </ul>
            <button className="w-full bg-lavender text-deep-blue font-bold py-3 px-6 rounded-full hover:bg-sky-blue transition duration-300">
              Start Free
            </button>
          </div>
          <div className="bg-lavender text-deep-blue p-8 rounded-lg shadow-xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold mb-4">Premium Plan</h3>
            <p className="mb-4">$9.99/month or $59.99/year</p>
            <ul className="mb-6">
              <li className="flex items-center mb-2">
                <Check className="w-5 h-5 mr-2" />
                All paths (I EMBODY, I CHOOSE, I AM BECOMING)
              </li>
              <li className="flex items-center mb-2">
                <Check className="w-5 h-5 mr-2" />
                Personalized, guided affirmations
              </li>
              <li className="flex items-center mb-2">
                <Check className="w-5 h-5 mr-2" />
                Nightly reminders with tips
              </li>
              <li className="flex items-center mb-2">
                <Check className="w-5 h-5 mr-2" />
                Progress tracking and reflection tools
              </li>
            </ul>
            <button className="w-full bg-deep-blue text-lavender font-bold py-3 px-6 rounded-full hover:bg-sky-blue hover:text-deep-blue transition duration-300">
              Go Premium
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;