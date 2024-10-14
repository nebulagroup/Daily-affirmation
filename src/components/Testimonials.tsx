import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Affirmation Flow has transformed our team's mindset. It's now an integral part of our corporate wellness program.",
    author: "Emily Chen",
    title: "HR Director, Google",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "As a tech leader, mental clarity is crucial. Affirmation Flow helps me start each day with purpose and focus.",
    author: "Mark Thompson",
    title: "CTO, Microsoft",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Integrating Affirmation Flow into our daily routines has boosted team morale and productivity significantly.",
    author: "Sarah Johnson",
    title: "COO, Amazon",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "This app aligns perfectly with our company's focus on employee well-being. It's a game-changer for mental health.",
    author: "David Lee",
    title: "Wellness Director, Apple",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Affirmation Flow has become an essential tool for our sales team, boosting confidence before big pitches.",
    author: "Jessica Martinez",
    title: "Sales VP, Salesforce",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "As a leader in innovation, we value tools that push boundaries. Affirmation Flow does just that for personal growth.",
    author: "Robert Chang",
    title: "Innovation Lead, Tesla",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Our creative team swears by Affirmation Flow. It's like a daily dose of inspiration and motivation.",
    author: "Olivia Wilson",
    title: "Creative Director, Adobe",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "Implementing Affirmation Flow has led to a noticeable improvement in our company's overall work culture.",
    author: "Michael Brown",
    title: "Culture Officer, Netflix",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    quote: "As we prioritize mental health, Affirmation Flow has become an indispensable resource for our global team.",
    author: "Anna Kowalski",
    title: "Global HR Manager, Spotify",
    avatar: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-deep-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gradient">What Industry Leaders Are Saying</h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-midnight-blue p-6 rounded-lg shadow-xl">
                    <div className="flex items-center mb-4">
                      <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <p className="font-semibold text-sky-blue">{testimonial.author}</p>
                        <p className="text-sm text-lavender">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="text-gray-300 italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevTestimonial} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-lavender text-deep-blue p-2 rounded-full">
            <ChevronLeft />
          </button>
          <button onClick={nextTestimonial} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-lavender text-deep-blue p-2 rounded-full">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;