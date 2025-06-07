
import React from 'react';
import { Button } from "@/components/ui/button";
import { PlayCircle, MapPin, Users, Award } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.8), rgba(30, 64, 175, 0.6)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1920&h=1080')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6">
            <Award className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">CBSE & Western Accredited Excellence</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Empowering Futures,
            <span className="block text-emerald-400">Globally Connected</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Where Indian values meet global standards. Join Almonte High School's journey of academic excellence, 
            holistic development, and international recognition.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white border-none text-lg px-8 py-4 h-auto"
            >
              Apply Now for 2026-27
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto backdrop-blur-sm"
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              Virtual Campus Tour
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4 h-auto backdrop-blur-sm"
            >
              Schedule a Visit
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">15+</div>
              <div className="text-sm text-white/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">2000+</div>
              <div className="text-sm text-white/80">Proud Alumni</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">95%</div>
              <div className="text-sm text-white/80">College Placement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-1">50+</div>
              <div className="text-sm text-white/80">Global Partners</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
