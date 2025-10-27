import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Lightbulb, TrendingUp, Shield, BarChart3, FileSearch } from "lucide-react";

const consultingServices = [
  {
    icon: BarChart3,
    title: "Market Analysis",
    description: "In-depth market research and trend analysis for informed decision-making"
  },
  {
    icon: TrendingUp,
    title: "Investment Strategy",
    description: "Custom investment strategies tailored to your goals and risk tolerance"
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Comprehensive risk evaluation and mitigation strategies"
  },
  {
    icon: FileSearch,
    title: "Due Diligence",
    description: "Thorough property and transaction analysis before major decisions"
  }
];

const specialties = [
  {
    title: "Portfolio Optimization",
    description: "Analyze and optimize your current real estate portfolio for maximum returns"
  },
  {
    title: "Market Entry Strategy",
    description: "Strategic guidance for entering new markets or property types"
  },
  {
    title: "Exit Planning",
    description: "Develop comprehensive strategies for property dispositions and 1031 exchanges"
  },
  {
    title: "Feasibility Studies",
    description: "Detailed analysis of potential investments and development opportunities"
  }
];

const clientTypes = [
  "Individual Investors",
  "Institutional Investors", 
  "Real Estate Funds",
  "Family Offices",
  "Corporations",
  "Developers"
];

export default function RealEstateConsulting() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Real Estate Consulting
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Strategic real estate consulting services for investors, institutions, and businesses. 
          Leverage our market expertise to make informed decisions and maximize your real estate investments.
        </p>
      </div>

      {/* Core Services */}
      <div className="grid lg:grid-cols-2 gap-8">
        {consultingServices.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Consulting Specialties */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Our Consulting Specialties</h3>
        <div className="grid lg:grid-cols-2 gap-6">
          {specialties.map((specialty, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-200">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">{specialty.title}</h4>
                <p className="text-muted-foreground text-sm">{specialty.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      {/* Consultation Process */}
      <div className="grid lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">01</div>
            <h4 className="font-semibold text-foreground mb-2">Discovery</h4>
            <p className="text-sm text-muted-foreground">
              Understand your objectives, constraints, and timeline
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">02</div>
            <h4 className="font-semibold text-foreground mb-2">Analysis</h4>
            <p className="text-sm text-muted-foreground">
              Conduct thorough market and financial analysis
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">03</div>
            <h4 className="font-semibold text-foreground mb-2">Strategy</h4>
            <p className="text-sm text-muted-foreground">
              Develop customized recommendations and action plans
            </p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-primary mb-2">04</div>
            <h4 className="font-semibold text-foreground mb-2">Implementation</h4>
            <p className="text-sm text-muted-foreground">
              Support execution and provide ongoing guidance
            </p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}