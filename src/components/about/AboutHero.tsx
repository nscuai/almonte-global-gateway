
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { MapPin } from 'lucide-react';

const AboutHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            WEQSC Approved | UNICEF Recognized | SGS Trust
          </Badge>
          <h1 className="text-5xl font-bold text-primary mb-6">About Almonte School</h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            For over four decades, Almonte School has been a beacon of educational excellence 
            in the pristine hills of Arunachal Pradesh, nurturing young minds and shaping future leaders 
            under the guidance of the Swami Gyananand Shiksha Parishad Trust.
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>Lower Lingti, Upper Siang District, Arunachal Pradesh</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
