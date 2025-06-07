
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import QuickHighlights from "@/components/QuickHighlights";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import LatestNews from "@/components/LatestNews";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Highlights */}
      <QuickHighlights />
      
      {/* About Preview Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About Almonte High School</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Rooted in Indian values and accredited by global standards, Almonte High School fosters holistic growth through innovative education. Our commitment to excellence has made us a premier institution for students seeking world-class education.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-muted-foreground">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">2000+</div>
                  <div className="text-sm text-muted-foreground">Alumni Worldwide</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-muted-foreground">College Placement</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg">
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">International Partners</div>
                </div>
              </div>
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Learn More About Us
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&h=600" 
                alt="Indian students in school uniforms at Almonte High School"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <TestimonialsCarousel />
      
      {/* Latest News & Events */}
      <LatestNews />
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            Take the first step towards your child's bright future at Almonte High School
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none">
              Apply Now for 2026-27
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Schedule a Campus Visit
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="py-12 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-primary mb-4">Stay Connected</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest updates about admissions, events, and school news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
