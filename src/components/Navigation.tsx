
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "About Us",
      items: [
        { title: "Vision & Mission", href: "#vision" },
        { title: "Leadership Team", href: "#leadership" },
        { title: "School Legacy", href: "#legacy" },
        { title: "Campus Virtual Tour", href: "#tour" },
        { title: "Achievements", href: "#achievements" }
      ]
    },
    {
      title: "Academics",
      items: [
        { title: "CBSE/ICSE Curriculum", href: "#curriculum" },
        { title: "Teaching Approach", href: "#approach" },
        { title: "Departments", href: "#departments" },
        { title: "Academic Calendar", href: "#calendar" },
        { title: "Examinations", href: "#exams" }
      ]
    },
    {
      title: "Admissions",
      items: [
        { title: "Admission Process", href: "#process" },
        { title: "Fee Structure", href: "#fees" },
        { title: "Eligibility & Documents", href: "#eligibility" },
        { title: "Schedule a Visit", href: "#visit" },
        { title: "Admission FAQs", href: "#faqs" }
      ]
    },
    {
      title: "Beyond Academics",
      items: [
        { title: "Clubs & Societies", href: "#clubs" },
        { title: "Sports Academy", href: "#sports" },
        { title: "Performing Arts", href: "#arts" },
        { title: "Excursions & Camps", href: "#excursions" }
      ]
    },
    {
      title: "Facilities",
      items: [
        { title: "Smart Classrooms", href: "#classrooms" },
        { title: "Sports Complex", href: "#sports-complex" },
        { title: "Library", href: "#library" },
        { title: "Auditorium", href: "#auditorium" },
        { title: "Cafeteria", href: "#cafeteria" }
      ]
    }
  ];

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail className="h-3 w-3" />
              <span>info@almontehs.org</span>
            </div>
          </div>
          <div className="hidden md:block text-xs">
            Admissions Open for 2026-27 | Schedule Your Visit Today
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/e8342f00-c930-41c6-95fa-fb4c83c900a7.png" 
                alt="Almonte High School Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="text-2xl font-bold text-primary">
                Almonte<span className="text-emerald-600">HS</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#home"
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="text-sm font-medium">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-64 p-4">
                          <div className="grid gap-2">
                            {item.items.map((subItem) => (
                              <NavigationMenuLink
                                key={subItem.title}
                                href={subItem.href}
                                className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-md transition-colors"
                              >
                                {subItem.title}
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ))}
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#global"
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      Global Connect
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#parents"
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      Parents & Students
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#news"
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      News & Events
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink 
                      href="#contact"
                      className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      Contact Us
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="outline" size="sm">
                Parent Portal
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700" size="sm">
                Apply Now
              </Button>
            </div>

            {/* Mobile menu trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-6">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 mb-4">
                    Apply Now
                  </Button>
                  
                  {navItems.map((item) => (
                    <div key={item.title} className="space-y-2">
                      <h3 className="font-semibold text-primary">{item.title}</h3>
                      <div className="pl-4 space-y-1">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
