import React from 'react';
import { Heart, Download } from 'lucide-react';

const HeroBanner: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <Heart className="w-16 h-16 mb-6 text-lavender" />
          <h1 className="text-5xl font-bold mb-4 text-gradient">Affirmation Flow</h1>
          <p className="text-xl mb-8 max-w-2xl text-sky-blue">
            Nightly affirmations designed to help you feel, choose, and become your best self.
          </p>
          <p className="text-lg mb-12 max-w-3xl">
            Harness the power of affirmations to build confidence, inner peace, and clarity. Backed by science and ancient wisdom, Affirmation Flow makes personal growth simple and effective.
          </p>
          <div className="flex space-x-4 mb-8">
            <button className="bg-lavender text-deep-blue font-bold py-3 px-6 rounded-full hover:bg-sky-blue transition duration-300">
              Get Started
            </button>
            <button className="bg-transparent border-2 border-sky-blue font-bold py-3 px-6 rounded-full hover:bg-sky-blue hover:text-deep-blue transition duration-300">
              Sign In
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
            </a>
            <a href="#" className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition duration-300">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;