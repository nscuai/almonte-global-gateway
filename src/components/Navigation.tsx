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
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      title: "About",
      items: [
        { title: "Vision & Mission", href: "/about#vision" },
        { title: "Leadership Team", href: "/about#leadership" },
        { title: "School Legacy", href: "/about#legacy" },
        { title: "Campus Virtual Tour", href: "/about#tour" },
        { title: "Achievements", href: "/about#achievements" }
      ]
    },
    {
      title: "Academics",
      items: [
        { title: "Curriculum Framework", href: "/academics#curriculum" },
        { title: "Teaching Approach", href: "/academics#approach" },
        { title: "Departments", href: "/academics#departments" },
        { title: "Academic Calendar", href: "/academics#calendar" },
        { title: "Examinations", href: "/academics#exams" }
      ]
    },
    {
      title: "Admissions",
      items: [
        { title: "Admission Process", href: "/admissions#process" },
        { title: "Fee Structure", href: "/admissions#fees" },
        { title: "Eligibility & Documents", href: "/admissions#eligibility" },
        { title: "Schedule a Visit", href: "/admissions#visit" },
        { title: "Admission FAQs", href: "/admissions#faqs" }
      ]
    },
    {
      title: "Activities",
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
            WEQSC Approved | UNICEF Recognized | Admissions Open for 2026-27
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/5f4704ad-7047-421f-bd22-f88a1e0f8e72.png" 
                  alt="Almonte Higher Secondary School Logo" 
                  className="h-16 w-auto object-contain"
                />
                <div className="flex flex-col justify-center h-16">
                  <div className="text-lg font-bold text-primary mb-1">AHS School</div>
                  <div className="text-xs text-muted-foreground leading-tight mb-1" style={{ fontSize: '6px', lineHeight: '1.2' }}>
                    Recognized by World Education Quality Standard Commission - Switzerland
                  </div>
                  <div className="text-xs text-muted-foreground leading-tight" style={{ fontSize: '6px', lineHeight: '1.2' }}>
                    Approved by UNICEF | Managed by SGSP Trust
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <NavigationMenu>
                <NavigationMenuList className="gap-1">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Home
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  {navItems.map((item) => (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger className="text-sm font-medium px-3">
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
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/global"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Global
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/parents"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Parents
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/news"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        News
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link 
                        to="/contact"
                        className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      >
                        Contact
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="outline" size="sm" className="text-xs">
                Portal
              </Button>
              <Link to="/admissions">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-xs">
                  Apply
                </Button>
              </Link>
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
                  <Link to="/admissions">
                    <Button className="bg-emerald-600 hover:bg-emerald-700 mb-4 w-full">
                      Apply Now
                    </Button>
                  </Link>
                  
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
                  
                  <div className="space-y-2 border-t pt-4">
                    <Link 
                      to="/global" 
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Global
                    </Link>
                    <Link 
                      to="/parents" 
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Parents
                    </Link>
                    <Link 
                      to="/news" 
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      News
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
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
