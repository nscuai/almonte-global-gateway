
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Mrs. Priya Sharma",
      role: "Parent",
      student: "Arjun Sharma, Grade 12",
      content: "Almonte High School has transformed my son's academic journey. The perfect blend of Indian values and global standards has prepared him for top universities worldwide. The teachers are exceptional!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Ananya Patel",
      role: "Alumni",
      student: "Class of 2023, Now at MIT",
      content: "The research opportunities and international exposure at Almonte gave me the edge I needed. I'm now pursuing Computer Science at MIT, and I owe it to the foundation built here.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Dr. Rajesh Kumar",
      role: "Parent & Educator",
      student: "Kavya Kumar, Grade 10",
      content: "As an educator myself, I'm impressed by Almonte's teaching methodology. The holistic approach to education, combined with cutting-edge facilities, creates an ideal learning environment.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Ravi Mehta",
      role: "Student",
      student: "Grade 11, Head Boy",
      content: "The clubs, sports, and academic programs at Almonte have helped me discover my true potential. The support from teachers and the global connections have opened doors I never imagined.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Community Says</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from parents, students, and alumni about their transformative experiences at Almonte High School.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                {/* Quote Icon */}
                <Quote className="h-8 w-8 text-emerald-600 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Content */}
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-primary text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-emerald-600 font-medium">{testimonial.student}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to become part of our success stories?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Apply for Admission
            </button>
            <button className="border border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
