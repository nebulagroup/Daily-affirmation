import React from 'react';
import { CheckCircle, ArrowRight, Moon } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-midnight-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">How Affirmation Flow Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Moon className="w-16 h-16 mx-auto mb-4 text-lavender" />
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Choose Your Path</h3>
            <p className="mb-4 text-gray-300">Select from three powerful affirmation paths:</p>
            <ul className="text-left list-disc list-inside text-gray-300">
              <li>I EMBODY: Affirm and feel your chosen trait</li>
              <li>I CHOOSE: Empower yourself with intentional choices</li>
              <li>I AM BECOMING: Focus on growth-oriented affirmations</li>
            </ul>
          </div>
          <div className="text-center">
            <ArrowRight className="w-16 h-16 mx-auto mb-4 text-lavender" />
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Personalized to You</h3>
            <p className="text-gray-300">Affirmation Flow tailors affirmations based on your goals. After a quick setup, receive affirmations aligned with your needs.</p>
          </div>
          <div className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-lavender" />
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Nightly Affirmations & Reminders</h3>
            <p className="text-gray-300">Receive notifications with affirmations to keep you grounded and focused. Customize reminders to reset your mindset throughout the night.</p>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-lavender text-deep-blue font-bold py-3 px-6 rounded-full hover:bg-sky-blue transition duration-300">
            Explore Paths
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;