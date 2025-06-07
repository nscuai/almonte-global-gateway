
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { FileText, Calendar, Users, CheckCircle, AlertCircle, Download, Phone, Mail } from 'lucide-react';

const Admissions = () => {
  const admissionProcess = [
    {
      step: 1,
      title: "Online Application",
      description: "Fill out the comprehensive online application form with all required details",
      duration: "10-15 minutes",
      status: "active"
    },
    {
      step: 2,
      title: "Document Submission",
      description: "Upload all required documents including certificates and photographs",
      duration: "1-2 days",
      status: "pending"
    },
    {
      step: 3,
      title: "Admission Test",
      description: "Appear for age-appropriate entrance examination (Classes VI and above)",
      duration: "2 hours",
      status: "pending"
    },
    {
      step: 4,
      title: "Interview",
      description: "Parent-student interview with academic counselor",
      duration: "30 minutes",
      status: "pending"
    },
    {
      step: 5,
      title: "Result & Admission",
      description: "Receive admission decision and complete enrollment process",
      duration: "3-5 days",
      status: "pending"
    }
  ];

  const feeStructure = [
    {
      class: "Classes I-V",
      admission: "₹15,000",
      tuition: "₹8,000/month",
      annual: "₹96,000",
      extras: "₹12,000"
    },
    {
      class: "Classes VI-VIII",
      admission: "₹20,000",
      tuition: "₹10,000/month",
      annual: "₹1,20,000",
      extras: "₹15,000"
    },
    {
      class: "Classes IX-X",
      admission: "₹25,000",
      tuition: "₹12,000/month",
      annual: "₹1,44,000",
      extras: "₹18,000"
    },
    {
      class: "Classes XI-XII",
      admission: "₹30,000",
      tuition: "₹15,000/month",
      annual: "₹1,80,000",
      extras: "₹20,000"
    }
  ];

  const documents = [
    "Birth Certificate (Original + 2 copies)",
    "Previous School Leaving Certificate",
    "Transfer Certificate (if applicable)",
    "Mark sheets of last two years",
    "Passport size photographs (6 copies)",
    "Aadhar Card copy (Student & Parents)",
    "Income Certificate (for fee concession)",
    "Caste Certificate (if applicable)",
    "Medical Fitness Certificate",
    "Character Certificate from previous school"
  ];

  const scholarships = [
    {
      name: "Academic Excellence Scholarship",
      criteria: "Students scoring 95% and above in previous class",
      benefit: "50% tuition fee waiver"
    },
    {
      name: "Sports Scholarship",
      criteria: "State/National level sports achievements",
      benefit: "30% tuition fee waiver"
    },
    {
      name: "Financial Assistance",
      criteria: "Family income below ₹2 lakhs per annum",
      benefit: "Up to 70% fee concession"
    },
    {
      name: "Sibling Discount",
      criteria: "Second child onwards from same family",
      benefit: "20% discount on tuition fees"
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
              Admissions Open 2025-26
            </Badge>
            <h1 className="text-5xl font-bold text-primary mb-6">Join Almonte School</h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Begin your child's journey towards academic excellence and holistic development. 
              Applications are now open for the academic year 2025-26.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline">
                Download Prospectus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Important Dates 2025-26</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Calendar className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Application Opens</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">Dec 1, 2024</div>
                <p className="text-muted-foreground text-sm">Online applications begin</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <FileText className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Last Date to Apply</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">Feb 28, 2025</div>
                <p className="text-muted-foreground text-sm">Application deadline</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <Users className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Entrance Exam</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">Mar 15, 2025</div>
                <p className="text-muted-foreground text-sm">Admission test date</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg text-center">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                <CardTitle className="text-lg">Results Declared</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">Mar 25, 2025</div>
                <p className="text-muted-foreground text-sm">Admission results</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Admission Process</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {admissionProcess.map((process, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold">
                        {process.step}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-primary text-lg">{process.title}</h3>
                        <p className="text-muted-foreground">{process.description}</p>
                        <Badge variant="outline" className="mt-2">{process.duration}</Badge>
                      </div>
                      {process.status === 'active' ? 
                        <CheckCircle className="h-6 w-6 text-emerald-600" /> : 
                        <AlertCircle className="h-6 w-6 text-muted-foreground" />
                      }
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure & Documents */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="fees" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fees">Fee Structure</TabsTrigger>
              <TabsTrigger value="documents">Required Documents</TabsTrigger>
              <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            </TabsList>
            
            <TabsContent value="fees" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Fee Structure 2025-26</h2>
                <p className="text-muted-foreground">Transparent and affordable fee structure with multiple payment options</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="border p-4 text-left font-semibold">Class</th>
                      <th className="border p-4 text-left font-semibold">Admission Fee</th>
                      <th className="border p-4 text-left font-semibold">Monthly Tuition</th>
                      <th className="border p-4 text-left font-semibold">Annual Fees</th>
                      <th className="border p-4 text-left font-semibold">Other Charges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="hover:bg-secondary/50">
                        <td className="border p-4 font-medium">{fee.class}</td>
                        <td className="border p-4">{fee.admission}</td>
                        <td className="border p-4">{fee.tuition}</td>
                        <td className="border p-4 font-medium text-primary">{fee.annual}</td>
                        <td className="border p-4">{fee.extras}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-primary">Payment Options:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Annual payment - 5% discount on tuition fees</li>
                    <li>• Quarterly payment - 2% discount on tuition fees</li>
                    <li>• Monthly payment - No discount</li>
                    <li>• Online payment gateway available</li>
                    <li>• Bank transfer and cheque payments accepted</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="documents" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Required Documents</h2>
                <p className="text-muted-foreground">Please ensure all documents are ready before starting the application process</p>
              </div>
              
              <Card>
                <CardHeader>
                  <CardTitle>Document Checklist</CardTitle>
                  <CardDescription>All documents must be submitted for application completion</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-secondary/30 rounded-lg">
                        <FileText className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2 text-primary flex items-center">
                      <AlertCircle className="h-5 w-5 mr-2" />
                      Important Notes:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• All documents should be clear and legible</li>
                      <li>• Original documents required for verification</li>
                      <li>• Incomplete applications will not be processed</li>
                      <li>• Submit documents within 48 hours of online application</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="scholarships" className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Scholarships & Financial Aid</h2>
                <p className="text-muted-foreground">Supporting deserving students with various scholarship opportunities</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarships.map((scholarship, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">{scholarship.name}</CardTitle>
                      <Badge variant="secondary" className="w-fit">{scholarship.benefit}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{scholarship.criteria}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="mt-6">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-primary">How to Apply for Scholarships:</h4>
                  <ol className="space-y-2 text-muted-foreground">
                    <li>1. Complete the regular admission application</li>
                    <li>2. Fill the scholarship application form</li>
                    <li>3. Submit required supporting documents</li>
                    <li>4. Appear for scholarship interview (if applicable)</li>
                    <li>5. Scholarship results declared with admission results</li>
                  </ol>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">Need Help with Admissions?</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Contact Admissions Office</CardTitle>
                  <CardDescription>Get in touch with our admissions team for any queries</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-medium">+91 98765 43210</div>
                      <div className="text-sm text-muted-foreground">Admissions Helpline</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    <div>
                      <div className="font-medium">support@almonte.ac</div>
                      <div className="text-sm text-muted-foreground">Email us your queries</div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h4 className="font-semibold mb-2">Office Hours:</h4>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Enquiry Form</CardTitle>
                  <CardDescription>Send us your questions and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Parent Name" />
                    <Input placeholder="Student Name" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Phone Number" />
                    <Input placeholder="Email Address" />
                  </div>
                  <Input placeholder="Class Seeking Admission" />
                  <Textarea placeholder="Your questions or message" rows={4} />
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Send Enquiry
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;
