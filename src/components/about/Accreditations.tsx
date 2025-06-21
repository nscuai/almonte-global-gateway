
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, Heart, Building2 } from 'lucide-react';

const Accreditations = () => {
  return (
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
  );
};

export default Accreditations;
