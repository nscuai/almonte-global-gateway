import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Award, Users, Clock, Calculator, FlaskConical, Globe, Palette, Music, Dumbbell } from 'lucide-react';

const Academics = () => {
  const streams = [
    {
      name: "Science Stream",
      icon: <FlaskConical className="h-8 w-8 text-emerald-600" />,
      subjects: ["Physics", "Chemistry", "Mathematics", "Biology", "Computer Science", "English"],
      description: "Comprehensive science education preparing students for engineering, medicine, and research careers.",
      careers: ["Engineering", "Medicine", "Research", "Biotechnology", "Pharmaceutical"]
    },
    {
      name: "Commerce Stream",
      icon: <Calculator className="h-8 w-8 text-emerald-600" />,
      subjects: ["Accountancy", "Business Studies", "Economics", "Mathematics", "English", "Entrepreneurship"],
      description: "Business-focused curriculum developing future entrepreneurs and commerce professionals.",
      careers: ["CA/CMA", "Banking", "Business", "Economics", "Finance"]
    },
    {
      name: "Arts Stream",
      icon: <Palette className="h-8 w-8 text-emerald-600" />,
      subjects: ["History", "Political Science", "Geography", "Psychology", "English", "Hindi"],
      description: "Liberal arts education fostering critical thinking and cultural understanding.",
      careers: ["Civil Services", "Journalism", "Law", "Social Work", "Teaching"]
    }
  ];

  const facilities = [
    {
      name: "Digital Smart Classrooms",
      description: "Interactive whiteboards and multimedia learning systems",
      count: "25 Classrooms"
    },
    {
      name: "Advanced Science Laboratories",
      description: "Physics, Chemistry, Biology, and Computer labs with modern equipment",
      count: "6 Labs"
    },
    {
      name: "Library & Research Center",
      description: "Over 15,000 books, digital resources, and research facilities",
      count: "15,000+ Books"
    },
    {
      name: "Language Laboratory",
      description: "Multi-media language learning with native speaker resources",
      count: "2 Labs"
    }
  ];

  const achievements = [
    { year: "2024", achievement: "Top School in Arunachal Pradesh - Academic Excellence Award" },
    { year: "2023", achievement: "100% Pass Rate in CBSE Class XII Examinations" },
    { year: "2023", achievement: "State Champions - Science Olympiad" },
    { year: "2022", achievement: "Excellence in Digital Education - Northeast India" },
    { year: "2022", achievement: "Best School for Holistic Development - State Level" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              CBSE Affiliated
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">Academic Excellence</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Our comprehensive academic program combines rigorous CBSE curriculum with innovative 
              teaching methodologies, preparing students for success in higher education and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary">Classes I-XII</Badge>
              <Badge variant="secondary">CBSE Affiliated</Badge>
              <Badge variant="secondary">Digital Learning</Badge>
              <Badge variant="secondary">Research Programs</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Streams */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Academic Streams (Classes XI-XII)</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {streams.map((stream, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{stream.icon}</div>
                  <CardTitle className="text-xl">{stream.name}</CardTitle>
                  <CardDescription>{stream.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-primary">Core Subjects:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {stream.subjects.map((subject, idx) => (
                        <div key={idx} className="text-sm bg-secondary/50 rounded px-2 py-1 text-center">
                          {subject}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-primary">Career Paths:</h4>
                    <div className="flex flex-wrap gap-1">
                      {stream.careers.map((career, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Curriculum Framework</h2>
          
          <Tabs defaultValue="primary" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="primary">Primary (I-V)</TabsTrigger>
              <TabsTrigger value="middle">Middle (VI-VIII)</TabsTrigger>
              <TabsTrigger value="secondary">Secondary (IX-X)</TabsTrigger>
              <TabsTrigger value="senior">Senior (XI-XII)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="primary" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Foundation Years (Classes I-V)</CardTitle>
                  <CardDescription>Building strong fundamentals through play-based learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Core Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• English Language & Literature</li>
                        <li>• Hindi (Second Language)</li>
                        <li>• Mathematics</li>
                        <li>• Environmental Studies</li>
                        <li>• General Knowledge</li>
                        <li>• Computer Basics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Special Features:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Activity-based learning</li>
                        <li>• Story-telling sessions</li>
                        <li>• Art & craft workshops</li>
                        <li>• Basic computer literacy</li>
                        <li>• Physical education</li>
                        <li>• Moral education</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="middle" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Middle School (Classes VI-VIII)</CardTitle>
                  <CardDescription>Developing analytical thinking and subject specialization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Core Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• English Language & Literature</li>
                        <li>• Hindi/Sanskrit</li>
                        <li>• Mathematics</li>
                        <li>• Science</li>
                        <li>• Social Science</li>
                        <li>• Computer Science</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Enhancement Programs:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Science practical sessions</li>
                        <li>• Coding & robotics basics</li>
                        <li>• Research methodology</li>
                        <li>• Public speaking & debate</li>
                        <li>• Environmental projects</li>
                        <li>• Cultural studies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="secondary" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Secondary School (Classes IX-X)</CardTitle>
                  <CardDescription>CBSE board preparation with comprehensive skill development</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">CBSE Subjects:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• English Language & Literature</li>
                        <li>• Hindi/Sanskrit</li>
                        <li>• Mathematics</li>
                        <li>• Science (Physics, Chemistry, Biology)</li>
                        <li>• Social Science</li>
                        <li>• Computer Applications/AI</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Skill Development:</h4>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Board exam preparation</li>
                        <li>• Career counseling</li>
                        <li>• Practical laboratory work</li>
                        <li>• Project-based learning</li>
                        <li>• Competitive exam coaching</li>
                        <li>• Life skills education</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="senior" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Senior Secondary (Classes XI-XII)</CardTitle>
                  <CardDescription>Specialized streams preparing for higher education and careers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Students choose from Science, Commerce, or Arts streams based on their interests and career aspirations. 
                    Each stream is designed to provide in-depth knowledge and practical skills for future academic and professional success.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Science Stream</h4>
                      <p className="text-sm text-muted-foreground">PCM/PCB combinations with advanced laboratory work</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Commerce Stream</h4>
                      <p className="text-sm text-muted-foreground">Business studies with practical internship opportunities</p>
                    </div>
                    <div className="bg-secondary/50 p-4 rounded-lg">
                      <h4 className="font-semibold text-primary mb-2">Arts Stream</h4>
                      <p className="text-sm text-muted-foreground">Humanities with research projects and field studies</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Academic Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Learning Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{facility.name}</CardTitle>
                  <Badge variant="outline">{facility.count}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Recent Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold">
                        {achievement.year}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-primary">{achievement.achievement}</p>
                      </div>
                      <Award className="h-6 w-6 text-emerald-600" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              View Complete Academic Calendar
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Academics;
