import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadForm from "@/components/forms/LeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Home, Globe, ExternalLink } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Client-Focused Excellence",
    description: "Every decision we make puts our clients' needs and goals at the center, ensuring personalized service that exceeds expectations."
  },
  {
    icon: Award,
    title: "Integrity & Transparency",
    description: "We conduct business with unwavering honesty, providing clear communication and ethical practices in every transaction."
  },
  {
    icon: Home,
    title: "Local Market Expertise",
    description: "Deep knowledge of the Treasure Coast market enables us to provide insights and opportunities others might miss."
  },
  {
    icon: Globe,
    title: "Comprehensive Solutions",
    description: "From brokerage to development, property management to education - we're your complete real estate partner."
  }
];

const team = [
  {
    name: "Michael Rodriguez",
    title: "Founder & CEO",
    credentials: "Licensed Real Estate Broker",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face=center",
    bio: "With over 15 years of experience in Treasure Coast real estate, Michael founded Atlante to provide comprehensive, client-focused real estate services."
  },
  {
    name: "Sarah Thompson",
    title: "Director of Operations", 
    credentials: "MBA, Real Estate Expert",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b830?w=300&h=300&fit=crop&face=center",
    bio: "Sarah oversees daily operations and strategic planning, ensuring every department delivers exceptional service to our clients."
  },
  {
    name: "David Chen",
    title: "Development Director",
    credentials: "Licensed Contractor & Developer", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face=center",
    bio: "David leads our development consulting services, bringing extensive experience in construction and project management."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                  About <span className="text-gradient-gold">Atlante Realty</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Founded on the principles of integrity, expertise, and client satisfaction, 
                  Atlante Realty has been serving the Treasure Coast for over a decade. We're more 
                  than just a real estate company - we're your comprehensive partner in all things real estate.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="gradient-gold text-white hover:opacity-90 transition-opacity"
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid="button-contact-us"
                  >
                    Contact Us
                  </Button>
                  <Button 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' })}
                    data-testid="button-meet-team"
                  >
                    Meet Our Team
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
                  alt="Atlante Realty office building"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10" />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To provide comprehensive, ethical, and innovative real estate services that empower 
                    our clients to achieve their property goals while contributing to the sustainable 
                    growth of the Treasure Coast community.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be the most trusted and comprehensive real estate partner in the Treasure Coast, 
                    known for our integrity, expertise, and commitment to transforming how people 
                    experience real estate transactions and investments.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every interaction, transaction, and relationship we build
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`value-title-${index}`}>
                            {value.title}
                          </h3>
                          <p className="text-muted-foreground" data-testid={`value-description-${index}`}>
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team-section" className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experienced professionals dedicated to your real estate success
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <img
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover ring-4 ring-primary/10"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-2" data-testid={`team-name-${index}`}>
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2" data-testid={`team-title-${index}`}>
                      {member.title}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4" data-testid={`team-credentials-${index}`}>
                      {member.credentials}
                    </p>
                    <p className="text-sm text-muted-foreground" data-testid={`team-bio-${index}`}>
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-form" className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ready to Work with Us?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're buying, selling, developing, or investing, our team is here to 
                  guide you through every step of your real estate journey.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Personalized service tailored to your needs</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Award-winning team with proven results</span>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Comprehensive real estate solutions</span>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <LeadForm
                  title="Get in Touch"
                  source="about"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}