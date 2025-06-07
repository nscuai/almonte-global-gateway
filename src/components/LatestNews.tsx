
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight, MapPin } from 'lucide-react';

const LatestNews = () => {
  const news = [
    {
      type: "Achievement",
      title: "Almonte Students Win National Science Olympiad",
      excerpt: "Our Grade 10 team secured first place in the National Science Olympiad, showcasing exceptional talent in physics and chemistry.",
      date: "2024-12-15",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=400&h=300",
      badge: "Achievement"
    },
    {
      type: "Event",
      title: "International Cultural Festival 2024",
      excerpt: "Join us for our annual cultural festival featuring performances, exhibitions, and food from around the world.",
      date: "2024-12-22",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=300",
      badge: "Upcoming Event"
    },
    {
      type: "Academic",
      title: "New STEM Labs Now Open",
      excerpt: "State-of-the-art robotics and AI labs are now operational, providing students with cutting-edge learning experiences.",
      date: "2024-12-10",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&h=300",
      badge: "Facilities"
    }
  ];

  const upcomingEvents = [
    {
      title: "Open House & Campus Tour",
      date: "2024-12-28",
      time: "10:00 AM - 4:00 PM",
      location: "Main Campus",
      description: "Explore our facilities and meet our faculty"
    },
    {
      title: "Admission Test for Grade 9",
      date: "2025-01-05",
      time: "9:00 AM - 12:00 PM",
      location: "Examination Hall",
      description: "Entrance test for new admissions"
    },
    {
      title: "Parent-Teacher Conference",
      date: "2025-01-12",
      time: "2:00 PM - 6:00 PM",
      location: "Various Classrooms",
      description: "Quarterly academic progress review"
    },
    {
      title: "Winter Sports Championship",
      date: "2025-01-20",
      time: "8:00 AM - 5:00 PM",
      location: "Sports Complex",
      description: "Inter-house sports competition"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Latest News & Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest happenings, achievements, and upcoming events at Almonte High School.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Latest News</h3>
              <Button variant="outline" className="text-primary hover:bg-primary hover:text-white">
                View All News
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-6">
              {news.map((item, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow border-0 shadow-md">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                          {item.badge}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(item.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-3 w-3 mr-1" />
                          {item.readTime}
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-primary mb-2 hover:text-emerald-600 transition-colors cursor-pointer">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <Button variant="link" className="p-0 h-auto text-emerald-600 hover:text-emerald-700">
                        Read More
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Events Sidebar */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary">Upcoming Events</h3>
            </div>
            
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border-l-4 border-l-emerald-500 shadow-md">
                  <CardContent className="p-4">
                    <div className="text-sm text-emerald-600 font-medium mb-1">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{event.title}</h4>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-2" />
                        {event.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-2" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Calendar CTA */}
            <Card className="mt-6 bg-gradient-to-br from-blue-50 to-emerald-50 border-0">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="font-semibold text-primary mb-2">School Calendar</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  View the complete academic calendar with all events, holidays, and important dates.
                </p>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  View Full Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
