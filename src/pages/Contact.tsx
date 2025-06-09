
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Calendar } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      title: "Main Office",
      phone: "+91 98765 43210",
      email: "info@almontehs.org",
      hours: "Mon-Fri: 8:00 AM - 5:00 PM",
      icon: <Phone className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "Admissions Office",
      phone: "+91 98765 43211",
      email: "admissions@almontehs.org",
      hours: "Mon-Sat: 9:00 AM - 4:00 PM",
      icon: <Users className="h-6 w-6 text-emerald-600" />
    },
    {
      title: "Academic Office",
      phone: "+91 98765 43212",
      email: "academics@almontehs.org",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM",
      icon: <MessageCircle className="h-6 w-6 text-emerald-600" />
    }
  ];

  const departments = [
    {
      name: "Principal's Office",
      head: "Dr. Tenzin Norbu",
      email: "principal@almontehs.org",
      phone: "+91 98765 43200"
    },
    {
      name: "Vice Principal (Academics)",
      head: "Mrs. Yangchen Dolma",
      email: "vp.academics@almontehs.org",
      phone: "+91 98765 43201"
    },
    {
      name: "Vice Principal (Administration)",
      head: "Mr. Kaling Tayeng",
      email: "vp.admin@almontehs.org",
      phone: "+91 98765 43202"
    },
    {
      name: "Student Affairs",
      head: "Ms. Pema Lhamo",
      email: "student.affairs@almontehs.org",
      phone: "+91 98765 43203"
    },
    {
      name: "Transport & Logistics",
      head: "Mr. Lobsang Tenzin",
      email: "transport@almontehs.org",
      phone: "+91 98765 43204"
    },
    {
      name: "Health & Counseling",
      head: "Dr. Tashi Dolma",
      email: "health@almontehs.org",
      phone: "+91 98765 43205"
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
              <MessageCircle className="h-4 w-4 mr-2" />
              Get in Touch
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">Contact Almonte High School</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're here to help you with admissions, academic queries, or any other information 
              you need about our school. Reach out to us through any of the convenient channels below.
            </p>
            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>Lower Lingti, Upper Siang District, Arunachal Pradesh 791006</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4">{info.icon}</div>
                  <CardTitle className="text-xl">{info.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="text-muted-foreground">{info.phone}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span className="text-muted-foreground">{info.email}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span className="text-muted-foreground text-sm">{info.hours}</span>
                  </div>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 mt-4">
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                For urgent matters, please call us directly.
              </p>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address</label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Subject</label>
                      <select className="w-full p-3 border border-input rounded-md bg-background">
                        <option>Select a subject</option>
                        <option>Admissions Inquiry</option>
                        <option>Academic Information</option>
                        <option>Fee Structure</option>
                        <option>Transportation</option>
                        <option>General Query</option>
                        <option>Complaint</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Message</label>
                      <textarea 
                        className="w-full p-3 border border-input rounded-md bg-background h-32"
                        placeholder="Enter your message here..."
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700" size="lg">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Visit Our Campus</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Experience our beautiful campus nestled in the hills of Arunachal Pradesh. 
                Schedule a visit to see our facilities and meet our team.
              </p>
              
              <div className="relative mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&h=400" 
                  alt="Almonte High School campus view with Indian students"
                  className="rounded-lg shadow-lg w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
              </div>
              
              <Card className="border-0 shadow-lg mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-emerald-600" />
                    School Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Almonte High School<br />
                    Lower Lingti, Near Old Mithun Shed<br />
                    Ziro-Memba Trek Route<br />
                    Upper Siang District<br />
                    Arunachal Pradesh - 791006<br />
                    India
                  </p>
                </CardContent>
              </Card>
              
              <Button size="lg" variant="outline" className="w-full">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule a Campus Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Department Contacts</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with specific departments for specialized assistance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription className="font-semibold text-primary">{dept.head}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-emerald-600" />
                      <span className="text-muted-foreground">{dept.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-emerald-600" />
                      <span className="text-muted-foreground">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <Card className="border-red-200 shadow-lg max-w-2xl mx-auto text-center">
            <CardHeader>
              <CardTitle className="text-2xl text-red-600">Emergency Contact</CardTitle>
              <CardDescription>For urgent situations and emergencies</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-3xl font-bold text-red-600">+91 98765 43299</div>
                <p className="text-muted-foreground">
                  Available 24/7 for medical emergencies, security issues, or urgent school matters
                </p>
                <Button className="bg-red-600 hover:bg-red-700" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Emergency Line
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
