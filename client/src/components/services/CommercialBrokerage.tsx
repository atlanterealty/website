import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, TrendingUp, MapPin, Calculator, FileText, Award } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Retail, Office, Multi-Family, & Industrial Spaces",
    description: "Expertise in office buildings, retail centers, multi-family, industrial, and mixed-use developments"
  },
  {
    icon: TrendingUp,
    title: "Investment Analysis",
    description: "Comprehensive market analysis and ROI projections for informed decisions"
  },
  {
    icon: MapPin,
    title: "Residential Development Tracts and Acreage",
    description: "Specialized services for residential development opportunities and large acreage transactions"
  },
  {
    icon: Calculator,
    title: "Financial Modeling",
    description: "Detailed financial analysis and cash flow projections"
  }
];

const services = [
  "Commercial sales and acquisitions",
  "Lease negotiations and renewals", 
  "Market research and analysis",
  "Investment property evaluation",
  "Site selection and feasibility studies",
  "Portfolio management consulting"
];

export default function CommercialBrokerage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Building2 className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Commercial Brokerage
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Specialized commercial real estate services for investors, businesses, and developers. 
          Our expertise spans office, retail, industrial, and mixed-use properties across the Treasure Coast.
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

      {/* Services List */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
            <Award className="h-5 w-5 text-primary mr-2" />
            Our Commercial Services
          </h3>
          <div className="grid lg:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex items-center">
                <div className="h-2 w-2 rounded-full bg-primary mr-3 flex-shrink-0" />
                <span className="text-muted-foreground">{service}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Process Overview */}
      <div className="grid lg:grid-cols-3 gap-8">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">01</div>
            <h4 className="font-semibold text-foreground mb-2">Market Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Comprehensive market research and property evaluation to identify opportunities
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">02</div>
            <h4 className="font-semibold text-foreground mb-2">Strategic Planning</h4>
            <p className="text-sm text-muted-foreground">
              Develop customized strategies based on your investment goals and timeline
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">03</div>
            <h4 className="font-semibold text-foreground mb-2">Transaction Management</h4>
            <p className="text-sm text-muted-foreground">
              Expert guidance through negotiations, due diligence, and closing processes
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}