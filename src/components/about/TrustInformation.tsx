
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Shield } from 'lucide-react';

const TrustInformation = () => {
  return (
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
  );
};

export default TrustInformation;
