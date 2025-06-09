
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Globe, Users, Award, BookOpen, MapPin, Calendar, GraduationCap, Heart } from 'lucide-react';

const Global = () => {
  const partnerships = [
    {
      country: "Singapore",
      institution: "Raffles Institution",
      program: "STEM Exchange Program",
      students: "15 students annually"
    },
    {
      country: "Japan",
      institution: "Tokyo International School",
      program: "Cultural Immersion Program",
      students: "10 students annually"
    },
    {
      country: "United Kingdom",
      institution: "Oxford Academy",
      program: "Summer Research Program",
      students: "8 students annually"
    },
    {
      country: "Australia",
      institution: "Melbourne Grammar School",
      program: "Leadership Development",
      students: "12 students annually"
    },
    {
      country: "Canada",
      institution: "Toronto International Academy",
      program: "Environmental Studies",
      students: "6 students annually"
    },
    {
      country: "Germany",
      institution: "Berlin International School",
      program: "Technology Innovation",
      students: "10 students annually"
    }
  ];

  const achievements = [
    "First school in Arunachal Pradesh to establish international partnerships",
    "50+ students have participated in global exchange programs",
    "Winner of UNESCO Global Education Award 2023",
    "Featured in Times Educational Supplement as 'School of Excellence'",
    "Partnership with Cambridge International Examinations",
    "Member of International Baccalaureate World Schools"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <Globe className="h-4 w-4 mr-2" />
              Global Connections
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">Global Education Initiative</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Connecting Almonte students with the world through international partnerships, 
              cultural exchange programs, and global learning opportunities that prepare them 
              for success in an interconnected world.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Partnerships across 6 countries and 4 continents</span>
            </div>
          </div>
        </div>
      </section>

      {/* Global Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Global Vision</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Almonte High School, we believe education transcends geographical boundaries. 
                Our global initiative connects students from the remote hills of Arunachal Pradesh 
                with peers worldwide, fostering international understanding and preparing them for 
                global citizenship.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Cultural Exchange</h3>
                    <p className="text-muted-foreground">Promoting understanding between diverse cultures and traditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Academic Collaboration</h3>
                    <p className="text-muted-foreground">Joint research projects and shared learning experiences</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Leadership Development</h3>
                    <p className="text-muted-foreground">Building future leaders with global perspectives</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&h=600" 
                alt="Indian students collaborating on international project"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* International Partnerships */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">International Partnerships</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our strategic partnerships with leading educational institutions worldwide provide 
              our students with unique opportunities for growth and learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((partnership, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-emerald-600" />
                    {partnership.country}
                  </CardTitle>
                  <CardDescription className="font-semibold text-primary">
                    {partnership.institution}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div>
                      <span className="font-medium">Program:</span>
                      <p className="text-muted-foreground">{partnership.program}</p>
                    </div>
                    <div>
                      <span className="font-medium">Participation:</span>
                      <p className="text-muted-foreground">{partnership.students}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Global Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to global education has earned recognition from international organizations and institutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-card rounded-lg shadow-sm">
                <Award className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <p className="text-muted-foreground">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Stories */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from our students who have participated in global exchange programs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Pema Lhamo</CardTitle>
                <CardDescription className="text-center">Class XII, Science Stream</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  "The exchange program in Singapore opened my eyes to advanced STEM research. 
                  I'm now pursuing engineering with a global perspective."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Tenzin Norbu</CardTitle>
                <CardDescription className="text-center">Class XI, Arts Stream</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  "Living with a host family in Japan taught me about different cultures 
                  while sharing our Arunachali traditions. It was life-changing."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-center">Yangchen Dolma</CardTitle>
                <CardDescription className="text-center">Alumni, Currently at Oxford</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">
                  "The global exposure at Almonte prepared me for Oxford. I learned to 
                  think beyond boundaries while staying rooted in my values."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Global Community</h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of an educational experience that connects you with the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none">
              Apply for Global Programs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Download Program Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Global;
