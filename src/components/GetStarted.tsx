import React from 'react';

const GetStarted: React.FC = () => {
  return (
    <section className="py-20 gradient-bg text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-gradient">Ready to Empower Your Mind?</h2>
        <p className="text-xl mb-8 text-gray-300">
          Join thousands of users who are improving their mindset, one affirmation at a time. Sign up today and start your journey with Affirmation Flow.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-lavender text-deep-blue font-bold py-3 px-6 rounded-full hover:bg-sky-blue transition duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-sky-blue font-bold py-3 px-6 rounded-full hover:bg-sky-blue hover:text-deep-blue transition duration-300">
            Sign In
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;