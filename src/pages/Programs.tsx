
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MentorshipNetwork from '@/components/MentorshipNetwork';
import EmployerConnect from '@/components/EmployerConnect';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Programs = () => {
  const { elementRef: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <div 
          ref={heroRef}
          className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 hover:scale-105 transition-transform duration-500 cursor-default">
              Training <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive programs designed to transform you from student to professional warrior.
            </p>
          </div>
        </div>
        <MentorshipNetwork />
        <EmployerConnect />
      </div>
      <Footer />
    </div>
  );
};

export default Programs;
