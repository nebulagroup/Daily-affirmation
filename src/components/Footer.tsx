import React from 'react';
import { Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-deep-blue text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4 text-gradient">Affirmation Flow</h3>
            <p>Empower Your Mind, Embrace Your Journey</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold mb-4 text-sky-blue">Quick Links</h4>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-lavender transition duration-300">About Us</a></li>
              <li className="mb-2"><a href="#" className="hover:text-lavender transition duration-300">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-lavender transition duration-300">Terms of Service</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1-3">
            <h4 className="text-lg font-semibold mb-4 text-sky-blue">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-lavender transition duration-300"><Instagram /></a>
              <a href="#" className="hover:text-lavender transition duration-300"><Twitter /></a>
              <a href="mailto:support@affirmationflow.com" className="hover:text-lavender transition duration-300"><Mail /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; 2024 Affirmation Flow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;