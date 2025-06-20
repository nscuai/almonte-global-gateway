import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { title: "Admission Enquiry", href: "/admissions" },
    { title: "School Calendar", href: "#calendar" },
    { title: "Exam Schedule", href: "#exam-schedule" },
    { title: "Transport & Safety", href: "#transport" },
    { title: "Uniform Policy", href: "#uniform" }
  ];

  const resources = [
    { title: "Download Brochure", href: "#brochure" },
    { title: "Homework Portal", href: "#homework" },
    { title: "E-Library Access", href: "#library" },
    { title: "School App", href: "#app" },
    { title: "Parent Portal", href: "#parent-portal" }
  ];

  const policies = [
    { title: "Privacy Policy", href: "#privacy" },
    { title: "Terms of Service", href: "#terms" },
    { title: "Anti-Ragging Policy", href: "#anti-ragging" },
    { title: "Refund Policy", href: "#refund" },
    { title: "Academic Policy", href: "#academic" }
  ];

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* School Info */}
          <div className="lg:col-span-2">
            <div className="flex items-start gap-4 mb-6">
              <img 
                src="/lovable-uploads/5f4704ad-7047-421f-bd22-f88a1e0f8e72.png" 
                alt="Almonte Higher Secondary School Logo" 
                className="h-20 w-auto object-contain flex-shrink-0"
              />
              <div className="flex flex-col justify-center h-20">
                <div className="text-xl font-bold text-white mb-2">AHS School</div>
                <div className="text-slate-300 leading-tight mb-1" style={{ fontSize: '6px', lineHeight: '1.2' }}>
                  Recognized by World Education Quality Standard Commission - Switzerland
                </div>
                <div className="text-slate-300 leading-tight" style={{ fontSize: '6px', lineHeight: '1.2' }}>
                  Approved by UNICEF | Managed by SGSP Trust
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Empowering futures through world-class education that combines traditional values 
              with modern learning. Established in 1981, serving the Northeast with excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start text-slate-300">
                <MapPin className="h-4 w-4 mr-3 text-emerald-400 flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div>Almonte School</div>
                  <div>Lower Lingti, Near the old mithun shed</div>
                  <div>Ziro - Memba trek route, Circle 4</div>
                  <div>Sub-Sub Post: Pango</div>
                  <div>Upper Siang District</div>
                  <div>Arunachal Pradesh – 791002, India</div>
                </div>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone className="h-4 w-4 mr-3 text-emerald-400 flex-shrink-0" />
                <div className="text-sm">
                  <div>Main: +91 98765 43210</div>
                  <div>Admissions: +91 98765 43211</div>
                </div>
              </div>
              <div className="flex items-center text-slate-300">
                <Mail className="h-4 w-4 mr-3 text-emerald-400 flex-shrink-0" />
                <div className="text-sm">
                  <div>support@almonte.ac</div>
                  <div>Website: almonte.ac</div>
                </div>
              </div>
            </div>

            {/* Accreditation Links */}
            <div className="mb-6">
              <h4 className="text-emerald-400 font-semibold mb-3">Accreditations</h4>
              <div className="space-y-2">
                <a 
                  href="https://weqsc.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  WEQSC Approved Institution
                </a>
                <div className="flex items-center text-slate-300 text-sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  UNICEF Recognized School
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Resources</h3>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href={resource.href} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {resource.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-emerald-400">Policies</h3>
            <ul className="space-y-2">
              {policies.map((policy, index) => (
                <li key={index}>
                  <a 
                    href={policy.href} 
                    className="text-slate-300 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {policy.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2 text-emerald-400">Stay Connected</h3>
              <p className="text-slate-300 text-sm">Get updates about admissions, events, and school news.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400 md:w-64"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm">
              © 2024 AHS School. All rights reserved. Established 1981.
            </div>
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <span>Designed with ❤️ for Education</span>
              <span>|</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">Feedback</a>
              <span>|</span>
              <a href="#" className="hover:text-emerald-400 transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
