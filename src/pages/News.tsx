
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar, Clock, User, Award, BookOpen, Users, Trophy, Camera } from 'lucide-react';

const News = () => {
  const featuredNews = {
    title: "Almonte Students Excel in National Science Olympiad 2024",
    excerpt: "Three students from Almonte High School secured top positions in the National Science Olympiad, bringing pride to Arunachal Pradesh.",
    date: "2024-03-15",
    category: "Academic Achievement",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&h=400",
    author: "Dr. Tenzin Norbu"
  };

  const newsArticles = [
    {
      id: 1,
      title: "New State-of-the-Art Science Laboratory Inaugurated",
      excerpt: "The school unveils a modern science laboratory equipped with the latest technology to enhance practical learning.",
      date: "2024-03-10",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=400&h=250",
      author: "Mrs. Yangchen Dolma"
    },
    {
      id: 2,
      title: "Cultural Exchange Program with Japanese School Begins",
      excerpt: "15 students from Almonte participate in virtual cultural exchange with Tokyo International School.",
      date: "2024-03-08",
      category: "Global Programs",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&h=250",
      author: "Mr. Kaling Tayeng"
    },
    {
      id: 3,
      title: "Annual Sports Day Celebrates Athletic Excellence",
      excerpt: "Students showcase their sporting talents in the grand Annual Sports Day celebration with record participation.",
      date: "2024-03-05",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=400&h=250",
      author: "Coach Pemba Sherpa"
    },
    {
      id: 4,
      title: "Green Campus Initiative Wins State Recognition",
      excerpt: "Almonte's environmental conservation efforts receive the State Green School Award for sustainable practices.",
      date: "2024-03-02",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=400&h=250",
      author: "Ms. Tenzin Lhamo"
    },
    {
      id: 5,
      title: "Alumni Success: Former Student Joins NASA Research Team",
      excerpt: "Pema Wangmo, Class of 2018, joins NASA's Mars exploration research team, inspiring current students.",
      date: "2024-02-28",
      category: "Alumni Success",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&h=250",
      author: "Alumni Relations Office"
    },
    {
      id: 6,
      title: "Digital Library Extension Opens New Learning Horizons",
      excerpt: "The expanded digital library now offers access to over 50,000 e-books and international journals.",
      date: "2024-02-25",
      category: "Academic Resources",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=400&h=250",
      author: "Librarian Mrs. Dolma Tashi"
    }
  ];

  const events = [
    {
      title: "Parent-Teacher Meeting",
      date: "2024-03-20",
      time: "10:00 AM - 4:00 PM",
      venue: "School Auditorium"
    },
    {
      title: "Inter-House Debate Competition",
      date: "2024-03-25",
      time: "2:00 PM - 5:00 PM",
      venue: "Conference Hall"
    },
    {
      title: "Science Exhibition",
      date: "2024-04-02",
      time: "9:00 AM - 6:00 PM",
      venue: "Science Block"
    },
    {
      title: "Annual Day Celebrations",
      date: "2024-04-15",
      time: "6:00 PM - 9:00 PM",
      venue: "Main Auditorium"
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
              <BookOpen className="h-4 w-4 mr-2" />
              Latest Updates
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">News & Events</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Stay updated with the latest happenings, achievements, and events at Almonte High School. 
              Discover how our students and staff continue to excel and make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="border-0 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-full object-cover rounded-l-lg"
                />
                <Badge className="absolute top-4 left-4 bg-emerald-600">
                  Featured
                </Badge>
              </div>
              <div className="p-8">
                <Badge variant="outline" className="mb-4">
                  {featuredNews.category}
                </Badge>
                <h2 className="text-3xl font-bold text-primary mb-4">{featuredNews.title}</h2>
                <p className="text-lg text-muted-foreground mb-6">{featuredNews.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredNews.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{featuredNews.author}</span>
                  </div>
                </div>
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  Read Full Article
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Recent News</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Catch up on the latest developments and achievements at our school.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map((article) => (
              <Card key={article.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative">
                  <img 
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-2 right-2 bg-primary">
                    {article.category}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <span className="text-xs">{article.author}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Upcoming Events</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mark your calendars for these important school events and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="h-5 w-5 mr-2 text-emerald-600" />
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Award className="h-4 w-4" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button size="lg" variant="outline">
              View Full Calendar
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for the latest news and event updates
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md text-primary"
            />
            <Button variant="secondary" className="bg-emerald-600 hover:bg-emerald-700 text-white border-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;
