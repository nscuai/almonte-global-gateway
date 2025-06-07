
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building, Globe, BookOpen, Users, Trophy } from 'lucide-react';

const QuickHighlights = () => {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-primary" />,
      title: "World-Class Academics",
      description: "CBSE/ICSE curriculum with Western accreditation, preparing students for global universities and careers.",
      features: ["International Curriculum", "Digital Learning", "STEM/STEAM Focus", "Research Programs"],
      cta: "Explore Academics",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: <Building className="h-8 w-8 text-primary" />,
      title: "State-of-Art Facilities",
      description: "Modern infrastructure designed to enhance learning experiences with cutting-edge technology and amenities.",
      features: ["Smart Classrooms", "Science Labs", "Sports Complex", "Digital Library"],
      cta: "Tour Our Campus",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&h=400"
    },
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "Global Connections",
      description: "International partnerships and exchange programs that broaden horizons and create global opportunities.",
      features: ["Student Exchange", "International Partners", "Global Competitions", "Cultural Programs"],
      cta: "Global Programs",
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Almonte High School?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes us the preferred choice for parents seeking exceptional education 
            that combines academic excellence with holistic development.
          </p>
        </div>

        {/* Main Highlights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg">
                  {highlight.icon}
                </div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {highlight.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {highlight.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2 mb-6">
                  {highlight.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  {highlight.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
            <BookOpen className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Digital Learning</h3>
            <p className="text-sm text-muted-foreground">Advanced e-learning platforms and digital resources</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
            <Users className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Small Class Sizes</h3>
            <p className="text-sm text-muted-foreground">Personalized attention with 1:15 teacher-student ratio</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
            <Trophy className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Award Winning</h3>
            <p className="text-sm text-muted-foreground">Recognized for academic and extracurricular excellence</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow">
            <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
            <h3 className="font-semibold text-primary mb-2">Global Outlook</h3>
            <p className="text-sm text-muted-foreground">International exposure and cultural diversity</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickHighlights;
