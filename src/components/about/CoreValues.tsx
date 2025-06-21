
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, BookOpen, Users, Globe } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-emerald-600" />,
      title: "Compassion",
      description: "Nurturing empathy and kindness in every interaction, building a caring community."
    },
    {
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      title: "Excellence",
      description: "Striving for the highest standards in academics, character, and personal growth."
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "Integrity",
      description: "Upholding honesty, transparency, and ethical principles in all our endeavors."
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: "Global Mindset",
      description: "Preparing students to be responsible global citizens with cultural awareness."
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4">{value.icon}</div>
                <CardTitle className="text-xl">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
