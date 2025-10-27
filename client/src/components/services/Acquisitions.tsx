import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, Target, Search, BarChart3, FileSearch, Handshake } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Property Sourcing",
    description: "Identify off-market and exclusive investment opportunities"
  },
  {
    icon: BarChart3,
    title: "Due Diligence",
    description: "Comprehensive property analysis and risk assessment"
  },
  {
    icon: Target,
    title: "Investment Strategy",
    description: "Customized acquisition strategies aligned with your goals"
  },
  {
    icon: Handshake,
    title: "Deal Negotiation",
    description: "Expert negotiation to secure the best terms and pricing"
  }
];

const process = [
  {
    step: "01",
    title: "Investment Goals Assessment",
    description: "Define your investment criteria, budget, and timeline"
  },
  {
    step: "02", 
    title: "Market Research & Sourcing",
    description: "Identify potential properties matching your investment profile"
  },
  {
    step: "03",
    title: "Financial Analysis",
    description: "Detailed ROI analysis, cash flow projections, and risk assessment"
  },
  {
    step: "04",
    title: "Acquisition & Closing",
    description: "Handle negotiations, due diligence, and transaction management"
  }
];

export default function Acquisitions() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <TrendingUp className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Acquisitions
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Strategic property acquisition services for investors seeking to build or expand their real estate portfolio. 
          We help you identify, evaluate, and secure profitable investment opportunities.
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

      {/* Process Overview */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Our Acquisition Process</h3>
        <div className="grid lg:grid-cols-2 gap-8">
          {process.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Investment Types */}
      <Card>
        <CardContent className="p-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
            <FileSearch className="h-5 w-5 text-primary mr-2" />
            Property Types We Specialize In
          </h3>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">Commercial</Badge>
              <p className="text-sm text-muted-foreground">Office buildings, retail centers, warehouses</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">Residential</Badge>
              <p className="text-sm text-muted-foreground">Single-family, multi-family, condominiums</p>
            </div>
            <div className="text-center">
              <Badge variant="secondary" className="mb-2">Mixed-Use</Badge>
              <p className="text-sm text-muted-foreground">Combined residential and commercial properties</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}