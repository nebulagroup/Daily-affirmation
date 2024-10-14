import React from 'react';
import { Heart, CheckCircle, ArrowRight, Star, Instagram, Twitter } from 'lucide-react';
import HeroBanner from './components/HeroBanner';
import HowItWorks from './components/HowItWorks';
import WhyItWorks from './components/WhyItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import GetStarted from './components/GetStarted';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-deep-blue text-gray-100">
      <HeroBanner />
      <Clients />
      <HowItWorks />
      <WhyItWorks />
      <Pricing />
      <Testimonials />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;