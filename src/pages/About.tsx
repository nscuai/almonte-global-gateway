
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GraduationCap, Users, Award, Globe, Heart, BookOpen, MapPin, Calendar, Building2, Shield } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "1981", event: "Almonte School founded in the serene hills of Arunachal Pradesh" },
    { year: "1985", event: "First batch of 50 students graduates with distinction" },
    { year: "1992", event: "Expanded to include senior secondary education" },
    { year: "1998", event: "Introduced computer education and science laboratories" },
    { year: "2005", event: "Achieved WEQSC accreditation and UNICEF recognition" },
    { year: "2010", event: "Launched international exchange programs" },
    { year: "2015", event: "Established digital learning initiatives" },
    { year: "2020", event: "Successfully transitioned to hybrid learning model" },
    { year: "2024", event: "Celebrating 43 years of educational excellence" }
  ];

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
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
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

      {/* Trust Information */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Founding Trust</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Building2 className="h-6 w-6 mr-3" />
                  Swami Gyananand Shiksha Parishad Trust
                </CardTitle>
                <CardDescription className="text-lg">
                  Established educational trust dedicated to transforming lives through quality education
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Swami Gyananand Shiksha Parishad Trust, based in Andhra Pradesh, is a pioneering educational 
                  organization committed to providing world-class education that combines traditional Indian values 
                  with modern pedagogical approaches. Named after the revered Swami Gyananand, the trust embodies 
                  the principles of knowledge, wisdom, and service to humanity.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Vision</h4>
                    <p className="text-sm text-muted-foreground">
                      To create educational institutions that nurture holistic development, combining academic 
                      excellence with character building and spiritual growth.
                    </p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Mission</h4>
                    <p className="text-sm text-muted-foreground">
                      Establishing schools that serve as centers of learning, where students develop into 
                      responsible citizens with strong moral foundations and global perspectives.
                    </p>
                  </div>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-primary mb-3 flex items-center">
                    <Shield className="h-5 w-5 mr-2" />
                    Trust's Core Principles
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Seva (Service):</strong> Dedicated service to education and community development</li>
                    <li>• <strong>Sanskar (Values):</strong> Instilling traditional Indian values alongside modern education</li>
                    <li>• <strong>Sankalp (Commitment):</strong> Unwavering commitment to educational excellence</li>
                    <li>• <strong>Satsang (Community):</strong> Building inclusive learning communities</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Under the trust's guidance, Almonte School has flourished as an institution that not only 
                  achieves academic excellence but also develops students who are rooted in Indian culture 
                  while being globally competent. The trust's emphasis on character development, environmental 
                  consciousness, and social responsibility is reflected in every aspect of our educational approach.
                </p>

                <div className="text-center">
                  <a 
                    href="https://sgsptrust.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary hover:text-emerald-600 transition-colors"
                  >
                    Learn more about SGS Trust →
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Award className="h-6 w-6 mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To provide holistic education that combines academic excellence with character development, 
                  empowering students to become confident, compassionate, and capable individuals who contribute 
                  positively to society while preserving the rich cultural heritage of Arunachal Pradesh, 
                  guided by the values of the Swami Gyananand Shiksha Parishad Trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center">
                  <Globe className="h-6 w-6 mr-3" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading educational institution in Northeast India, recognized globally for nurturing 
                  students who excel academically, lead with integrity, and serve humanity with distinction while 
                  staying rooted in Indian values and traditions as envisioned by our founding trust.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accreditations & Recognition */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Accreditations & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl">WEQSC Approved</CardTitle>
                <CardDescription>World Education Quality Standard Commission</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Internationally recognized for maintaining world-class educational standards 
                  by the Geneva-based commission.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">UNICEF Recognized</CardTitle>
                <CardDescription>Child-Friendly School Initiative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Recognized by UNICEF for creating a safe, inclusive, and effective 
                  learning environment for all children.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-xl">SGS Trust</CardTitle>
                <CardDescription>Swami Gyananand Shiksha Parishad</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Operated under the guidance of a trusted educational foundation 
                  committed to holistic development and value-based education.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-6">
                Nestled in the breathtaking landscape of Lower Lingti, near the old mithun shed along 
                the historic Ziro-Memba trek route, Almonte School began its journey in 1981 with a 
                simple yet profound vision: to bring quality education to the remote yet culturally 
                rich region of Upper Siang District under the benevolent guidance of the Swami Gyananand 
                Shiksha Parishad Trust.
              </p>
              <p className="mb-6">
                Founded by visionary educators who believed that geographical isolation should never 
                be a barrier to educational excellence, our school started with just 25 students in 
                a modest building. The trust's philosophy of combining traditional wisdom with modern 
                education became the cornerstone of our approach. Today, we proudly serve over 800 
                students from diverse backgrounds, offering education from primary through senior secondary levels.
              </p>
              <p>
                Our unique location has shaped our identity - surrounded by pristine forests and 
                traditional communities, we've learned to balance modern educational practices with 
                deep respect for indigenous knowledge and environmental stewardship, all while staying 
                true to the trust's commitment to value-based education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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

      {/* Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Journey Through Time</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold min-w-16 text-center">
                    {milestone.year}
                  </div>
                  <div className="bg-card p-4 rounded-lg shadow flex-1">
                    <p className="text-muted-foreground">{milestone.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Preview */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our dedicated team of educators and administrators work tirelessly to provide 
              the best educational experience for our students, guided by the trust's principles.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Dr. Tenzin Norbu</CardTitle>
                <CardDescription>Principal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Ph.D. in Education, 25 years of experience in educational leadership
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Mrs. Yangchen Dolma</CardTitle>
                <CardDescription>Vice Principal (Academics)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  M.Ed., Former WEQSC examiner, expert in curriculum development
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <CardTitle>Mr. Kaling Tayeng</CardTitle>
                <CardDescription>Vice Principal (Administration)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  MBA, 20 years in educational administration and student affairs
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Meet Our Complete Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
