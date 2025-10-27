import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadForm from "@/components/forms/LeadForm";
import WhyAtlante from "@/components/sections/WhyAtlante";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building2, 
  Home, 
  TrendingUp, 
  Key, 
  Users, 
  PenTool, 
  MessageSquare,
  ArrowRight
} from "lucide-react";

// Import service components
import CommercialBrokerage from "@/components/services/CommercialBrokerage";
import ResidentialBrokerage from "@/components/services/ResidentialBrokerage";
import Acquisitions from "@/components/services/Acquisitions";
import PropertyManagementService from "@/components/services/PropertyManagementService";
import Leasing from "@/components/services/Leasing";
import PlanningDevelopment from "@/components/services/PlanningDevelopment";
import RealEstateConsulting from "@/components/services/RealEstateConsulting";

const services = [
  {
    id: "commercial-brokerage",
    name: "Commercial Brokerage",
    icon: Building2,
    description: "Expert commercial real estate services for investors and businesses",
    component: CommercialBrokerage
  },
  {
    id: "residential-brokerage", 
    name: "Residential Brokerage",
    icon: Home,
    description: "Comprehensive residential buying and selling services",
    component: ResidentialBrokerage
  },
  {
    id: "acquisitions",
    name: "Acquisitions",
    icon: TrendingUp,
    description: "Strategic property acquisition and investment consulting",
    component: Acquisitions
  },
  {
    id: "property-management",
    name: "Property Management",
    icon: Key,
    description: "Full-service property management for maximum returns",
    component: PropertyManagementService
  },
  {
    id: "leasing",
    name: "Leasing",
    icon: Users,
    description: "Professional leasing services for landlords and tenants",
    component: Leasing
  },
  {
    id: "planning-development",
    name: "Planning & Development",
    icon: PenTool,
    description: "Development consulting and project planning expertise",
    component: PlanningDevelopment
  },
  {
    id: "real-estate-consulting",
    name: "Real Estate Consulting",
    icon: MessageSquare,
    description: "Strategic real estate consulting for all your needs",
    component: RealEstateConsulting
  }
];

export default function Services() {
  const [location] = useLocation();
  const [activeService, setActiveService] = useState("commercial-brokerage");

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Check for service parameter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const serviceParam = urlParams.get('service');
    if (serviceParam && services.find(s => s.id === serviceParam)) {
      setActiveService(serviceParam);
    } else {
      // Default to commercial-brokerage if no service specified
      setActiveService("commercial-brokerage");
    }
  }, [location]);

  // Listen for popstate events to handle browser navigation
  useEffect(() => {
    const handlePopState = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const serviceParam = urlParams.get('service');
      if (serviceParam && services.find(s => s.id === serviceParam)) {
        setActiveService(serviceParam);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const currentService = services.find(s => s.id === activeService);
  const ServiceComponent = currentService?.component;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                {currentService ? currentService.name : "Our Services"}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {currentService ?
                  currentService.description :
                  "Comprehensive real estate solutions tailored to your unique needs. From commercial transactions to residential sales, we're your trusted partner every step of the way."
                }
              </p>
            </div>
          </div>
        </section>

        {/* Selected Service Content */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {ServiceComponent && <ServiceComponent />}
          </div>
        </section>

        {/* Why Choose Atlante Section */}
        <WhyAtlante />

        {/* CTA Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're looking to buy, sell, lease, or develop, our expert team 
                  is here to guide you through every step of your real estate journey.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Free initial consultation</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Customized service solutions</span>
                  </div>
                  <div className="flex items-center">
                    <ArrowRight className="h-5 w-5 text-primary mr-3" />
                    <span className="text-muted-foreground">Expert market insights</span>
                  </div>
                </div>

                <Button 
                  className="gradient-gold text-white hover:opacity-90 transition-opacity"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule Consultation
                </Button>
              </div>
              
              <div id="contact-form" className="flex justify-center">
                <LeadForm
                  title="Get Expert Guidance"
                  source="services"
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