import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Home, Heart, Key, DollarSign, Camera, Users } from "lucide-react";

const features = [
  {
    icon: Home,
    title: "Buyer Representation",
    description: "Dedicated support throughout your home buying journey"
  },
  {
    icon: DollarSign,
    title: "Seller Services", 
    description: "Expert marketing and pricing strategies for maximum returns"
  },
  {
    icon: Camera,
    title: "Professional Marketing",
    description: "High-quality photography, virtual tours, and digital marketing"
  },
  {
    icon: Key,
    title: "First-Time Buyers",
    description: "Specialized guidance for first-time homebuyers"
  }
];

const services = [
  "Buyer consultation and home search",
  "Comparative market analysis (CMA)",
  "Professional photography and staging advice",
  "Contract negotiation and management",
  "Closing coordination and support",
  "Post-sale follow-up and referrals"
];

export default function ResidentialBrokerage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Home className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Residential Brokerage
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you're buying your first home or selling a longtime residence, our residential team 
          provides personalized service to make your real estate transaction smooth and successful.
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
            <Heart className="h-5 w-5 text-primary mr-2" />
            Comprehensive Residential Services
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

    </div>
  );
}