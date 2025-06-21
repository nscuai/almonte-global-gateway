
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, BookOpen, Users } from 'lucide-react';

const LeadershipTeam = () => {
  return (
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
  );
};

export default LeadershipTeam;
