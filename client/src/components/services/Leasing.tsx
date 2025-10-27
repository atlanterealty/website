import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Building, FileCheck, Handshake, Calculator, Shield } from "lucide-react";

const features = [
  {
    icon: Building,
    title: "Landlord Services",
    description: "Complete leasing solutions for property owners"
  },
  {
    icon: Users,
    title: "Tenant Representation",
    description: "Expert guidance for tenants seeking the perfect space"
  },
  {
    icon: FileCheck,
    title: "Lease Administration",
    description: "Professional lease preparation and management"
  },
  {
    icon: Calculator,
    title: "Market Analysis",
    description: "Competitive rent analysis and market positioning"
  }
];

const landlordServices = [
  "Property marketing and advertising",
  "Tenant screening and qualification",
  "Lease negotiation and execution",
  "Rental rate optimization",
  "Property showings and tours",
  "Market analysis and reporting"
];

const tenantServices = [
  "Space requirements analysis",
  "Property search and selection",
  "Lease terms negotiation",
  "Site visits and evaluations",
  "Due diligence assistance",
  "Lease renewal management"
];

export default function Leasing() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Users className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Leasing Services
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional leasing services for both landlords and tenants. We facilitate successful 
          lease agreements that benefit all parties through expert negotiation and market knowledge.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Services for Landlords and Tenants */}
      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Building className="h-5 w-5 text-primary mr-2" />
              For Landlords
            </h3>
            <div className="space-y-3">
              {landlordServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Users className="h-5 w-5 text-primary mr-2" />
              For Tenants
            </h3>
            <div className="space-y-3">
              {tenantServices.map((service, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{service}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Process */}
      <div className="grid lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">01</div>
            <h4 className="font-semibold text-foreground mb-2">Consultation</h4>
            <p className="text-sm text-muted-foreground">
              Understand your specific leasing needs and requirements
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">02</div>
            <h4 className="font-semibold text-foreground mb-2">Market Research</h4>
            <p className="text-sm text-muted-foreground">
              Analyze current market conditions and comparable properties
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">03</div>
            <h4 className="font-semibold text-foreground mb-2">Negotiation</h4>
            <p className="text-sm text-muted-foreground">
              Expert negotiation to achieve favorable lease terms
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">04</div>
            <h4 className="font-semibold text-foreground mb-2">Execution</h4>
            <p className="text-sm text-muted-foreground">
              Handle all documentation and lease finalization
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}