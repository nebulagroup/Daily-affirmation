import React from 'react';
import { Brain, Leaf, Target } from 'lucide-react';

const WhyItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-deep-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gradient">Why It Works</h2>
        <p className="text-xl text-center mb-12 text-gray-300">Affirmation Flow is based on proven methods to reshape your thinking.</p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-midnight-blue p-6 rounded-lg shadow-xl">
            <Brain className="w-12 h-12 mb-4 text-lavender" />
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Backed by Neuroscience</h3>
            <p className="text-gray-300">Affirmations activate the brain's reward centers, helping you stay positive and motivated.</p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-lg shadow-xl">
            <Leaf className="w-12 h-12 mb-4 text-lavender" />
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Rooted in Ancient Wisdom</h3>
            <p className="text-gray-300">Inspired by teachings from India, Greece, and Egypt, blending modern science with time-tested practices.</p>
          </div>
          <div className="bg-midnight-blue p-6 rounded-lg shadow-xl">
            <Target className="w-12 h-12 mb-4 text-lavender" />
            <h3 className="text-2xl font-semibold mb-4 text-sky-blue">Choose, Feel, Become</h3>
            <p className="text-gray-300">Our three unique paths help you embody, choose, or progress in your affirmations, making them feel real and achievable.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;