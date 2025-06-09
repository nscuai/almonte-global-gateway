
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Calendar, BookOpen, MessageCircle, Phone, Mail, Clock, Heart, Shield, Home } from 'lucide-react';

const Parents = () => {
  const parentResources = [
    {
      title: "Parent Portal",
      description: "Access grades, attendance, and communication with teachers",
      icon: <BookOpen className="h-6 w-6 text-emerald-600" />,
      action: "Login to Portal"
    },
    {
      title: "Academic Calendar",
      description: "Stay updated with exam dates, holidays, and school events",
      icon: <Calendar className="h-6 w-6 text-emerald-600" />,
      action: "View Calendar"
    },
    {
      title: "Parent-Teacher Meetings",
      description: "Schedule and manage meetings with your child's teachers",
      icon: <Users className="h-6 w-6 text-emerald-600" />,
      action: "Schedule Meeting"
    },
    {
      title: "Communication Hub",
      description: "Direct messaging with teachers and school administration",
      icon: <MessageCircle className="h-6 w-6 text-emerald-600" />,
      action: "Start Conversation"
    }
  ];

  const guidelines = [
    {
      title: "Daily Routine",
      points: [
        "Encourage consistent study hours at home",
        "Ensure 8-9 hours of sleep for optimal learning",
        "Limit screen time to 2 hours for recreational use",
        "Promote physical activities and outdoor play"
      ]
    },
    {
      title: "Academic Support",
      points: [
        "Create a dedicated study space at home",
        "Review homework and assignments regularly",
        "Encourage reading for at least 30 minutes daily",
        "Participate in school projects and activities"
      ]
    },
    {
      title: "Communication",
      points: [
        "Attend parent-teacher meetings regularly",
        "Check the parent portal weekly",
        "Respond to school communications promptly",
        "Share concerns with teachers early"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-emerald-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 border-primary text-primary">
              <Heart className="h-4 w-4 mr-2" />
              Parent Community
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">Partner in Your Child's Journey</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              At Almonte High School, we believe that education is a collaborative effort between 
              school and family. Join us in nurturing your child's academic, personal, and 
              emotional growth through our comprehensive parent engagement programs.
            </p>
            <div className="flex items-center justify-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>parents@almontehs.org</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Parent Resources</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to stay connected with your child's education and school activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {parentResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
                <CardHeader>
                  <div className="mx-auto mb-4">{resource.icon}</div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                  <CardDescription>{resource.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="bg-emerald-600 hover:bg-emerald-700">
                    {resource.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Parent Guidelines */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Parenting Guidelines</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Research-based strategies to support your child's academic and personal development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guidelines.map((guideline, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{guideline.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {guideline.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Safety & Well-being */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Student Safety & Well-being</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your child's safety and emotional well-being are our top priorities. We maintain 
                comprehensive safety protocols and provide extensive support systems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Campus Security</h3>
                    <p className="text-muted-foreground">24/7 security with CCTV monitoring and controlled access</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Counseling Services</h3>
                    <p className="text-muted-foreground">Professional counselors available for academic and personal support</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Emergency Protocols</h3>
                    <p className="text-muted-foreground">Immediate parent notification system for any emergencies</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold">Transportation Safety</h3>
                    <p className="text-muted-foreground">GPS-tracked buses with trained drivers and attendants</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&h=600" 
                alt="Indian students in a safe school environment"
                className="rounded-lg shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">What Parents Say</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Hear from parents who have entrusted their children's education to Almonte High School.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Mrs. Yangchen Tashi</CardTitle>
                <CardDescription>Parent of Class X student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The parent portal keeps me connected with my daughter's progress. Teachers are 
                  always accessible and provide detailed feedback on her development."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Mr. Lobsang Tenzing</CardTitle>
                <CardDescription>Parent of Class XII student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "Almonte's holistic approach has helped my son grow academically and personally. 
                  The school truly partners with parents in nurturing our children."
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Mrs. Pema Chodon</CardTitle>
                <CardDescription>Parent of Class IX student</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  "The counseling services have been invaluable. The school addresses not just 
                  academic needs but also emotional well-being of students."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're here to support you and your child. Reach out to us anytime.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Phone className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Phone Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">+91 98765 43210</p>
                <p className="text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 inline mr-1" />
                  Mon-Fri: 8:00 AM - 5:00 PM
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Mail className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Email Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">parents@almontehs.org</p>
                <p className="text-sm text-muted-foreground">Response within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <MessageCircle className="h-8 w-8 text-emerald-600 mx-auto mb-4" />
                <CardTitle>Live Chat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Instant messaging</p>
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Parents;
