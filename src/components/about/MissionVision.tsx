
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Globe } from 'lucide-react';

const MissionVision = () => {
  return (
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
  );
};

export default MissionVision;
