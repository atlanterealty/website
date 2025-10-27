import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Key, Users, Wrench, FileText, DollarSign, Shield, ExternalLink } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Tenant Screening",
    description: "Comprehensive background checks and credit screening to find qualified, reliable tenants for your property.",
    features: [
      "Credit and background checks",
      "Employment verification",
      "Rental history review",
      "Reference verification",
    ],
    details: [
      "We conduct thorough credit checks with FICO scores and payment history analysis",
      "Employment verification includes salary confirmation and job stability assessment", 
      "Previous landlord references and rental payment history verification",
      "Criminal background checks and eviction history screening",
      "Income verification requiring 3x rent qualification standards",
      "Professional tenant interviews and application review process"
    ]
  },
  {
    icon: Wrench,
    title: "Maintenance Coordination",
    description: "24/7 maintenance support with our network of licensed, insured contractors and service providers.",
    features: [
      "Emergency response",
      "Preventive maintenance",
      "Quality control",
      "Vendor management",
    ],
    details: [
      "24/7 emergency hotline for urgent maintenance issues like plumbing, electrical, and HVAC",
      "Scheduled preventive maintenance including HVAC servicing, gutter cleaning, and inspections",
      "Quality assurance inspections and photo documentation of all completed work",
      "Network of licensed, bonded, and insured contractors with competitive pricing",
      "Maintenance request portal for tenants with real-time status updates",
      "Annual property inspections and maintenance planning recommendations"
    ]
  },
  {
    icon: FileText,
    title: "Legal Compliance",
    description: "Stay compliant with all local, state, and federal regulations governing rental properties.",
    features: [
      "Lease agreement preparation",
      "Eviction proceedings",
      "Fair housing compliance",
      "Legal documentation",
    ],
    details: [
      "Legally compliant lease agreements updated with current Florida rental laws",
      "Professional eviction services with court representation when necessary",
      "Fair Housing Act compliance training and documentation procedures", 
      "Security deposit handling in accordance with state requirements",
      "Proper notice procedures for inspections, repairs, and lease violations",
      "Legal consultation network for complex landlord-tenant issues"
    ]
  },
  {
    icon: DollarSign,
    title: "Financial Management",
    description: "Complete financial oversight including rent collection, expense tracking, and detailed reporting.",
    features: [
      "Automated rent collection",
      "Monthly financial reports",
      "Tax preparation support",
      "Budget planning",
    ],
    details: [
      "Online rent collection with multiple payment options and late fee automation",
      "Detailed monthly statements with income, expenses, and net cash flow analysis",
      "Annual 1099 preparation and tax-ready financial summaries",
      "Operating expense tracking and budget variance reporting",
      "Security deposit accounting and interest calculations where required",
      "Profit and loss statements and year-over-year performance analysis"
    ]
  },
];

const benefits = [
  {
    title: "Maximize Rental Income",
    description: "Our market expertise ensures competitive pricing and minimal vacancy periods.",
    icon: DollarSign,
    details: [
      "Market rent analysis and competitive pricing strategies",
      "Professional marketing with high-quality photos and virtual tours",
      "Multi-platform listing distribution to maximize exposure",
      "Tenant retention programs to reduce turnover costs",
      "Regular rent reviews and market adjustments",
      "Vacancy loss minimization through efficient tenant placement"
    ]
  },
  {
    title: "Reduce Stress",
    description: "Let us handle tenant issues, maintenance, and day-to-day property management tasks.",
    icon: Shield,
    details: [
      "24/7 tenant communication and issue resolution",
      "Emergency response coordination and management",
      "Lease violation handling and enforcement procedures",
      "Move-in and move-out inspection coordination",
      "Vendor management and repair oversight",
      "Legal compliance monitoring and updates"
    ]
  },
  {
    title: "Professional Service",
    description: "Licensed property management with years of experience and local market knowledge.",
    icon: Users,
    details: [
      "Licensed real estate professionals with property management expertise",
      "Deep knowledge of Treasure Coast rental market conditions",
      "Established relationships with quality contractors and service providers",
      "Technology-driven management with owner and tenant portals",
      "Regular continuing education on industry best practices",
      "Proactive communication and transparent reporting"
    ]
  },
];

const pricingTiers = [
  {
    name: "Residential",
    description: "Perfect for single-family homes and small multi-unit properties",
    rate: "8%",
    features: [
      "Tenant screening & placement",
      "Rent collection & accounting",
      "Maintenance coordination",
      "Monthly financial reports",
      "24/7 emergency support",
      "Lease agreement preparation",
      "Move-in/move-out inspections",
      "Legal compliance oversight"
    ],
    additionalInfo: "No upfront fees - we only get paid when your property is occupied"
  },
  {
    name: "Commercial",
    description: "Comprehensive management for commercial and retail properties",
    rate: "Contact for quote",
    features: [
      "Lease administration",
      "Tenant relations",
      "Property maintenance",
      "Financial reporting",
      "Capital improvement planning",
      "CAM charge administration",
      "Lease renewal negotiations",
      "Market analysis and positioning"
    ],
    additionalInfo: "Custom pricing based on property type, size, and management complexity"
  },
  {
    name: "Portfolio",
    description: "Customized solutions for large property portfolios",
    rate: "Custom pricing",
    features: [
      "Dedicated account manager",
      "Custom reporting",
      "Volume discounts",
      "Strategic planning",
      "Performance analytics",
      "Investment advisory services",
      "Portfolio optimization",
      "Bulk maintenance contracting"
    ],
    additionalInfo: "Volume discounts available for portfolios of 10+ properties"
  },
];

const processSteps = [
  {
    step: "01",
    title: "Property Assessment",
    description: "We evaluate your property and provide market analysis and rental recommendations.",
    details: [
      "Comprehensive property inspection and condition assessment",
      "Market rent analysis and pricing recommendations",
      "Repair and improvement suggestions to maximize rent potential",
      "Investment return projections and cash flow analysis",
      "Rental market positioning strategy development"
    ]
  },
  {
    step: "02",
    title: "Marketing & Leasing",
    description: "Professional photography, listing creation, and tenant screening to find qualified renters.",
    details: [
      "Professional photography and virtual tour creation",
      "Multi-platform marketing on MLS, Zillow, Apartments.com, and more",
      "Showing coordination and tenant pre-qualification",
      "Application processing and comprehensive tenant screening",
      "Lease negotiation and agreement execution"
    ]
  },
  {
    step: "03",
    title: "Move-In & Management",
    description: "Handle lease signing, move-in coordination, and ongoing property management.",
    details: [
      "Move-in inspection documentation with photos",
      "Security deposit collection and proper escrow handling",
      "Tenant orientation and property management portal setup",
      "Rent collection setup and payment processing",
      "Ongoing maintenance coordination and property oversight"
    ]
  },
  {
    step: "04",
    title: "Ongoing Support",
    description: "Monthly reporting, maintenance coordination, and 24/7 support for you and your tenants.",
    details: [
      "Monthly financial statements and performance reports",
      "Annual property inspections and maintenance planning",
      "Lease renewal negotiations and market adjustments",
      "Tenant relations and issue resolution",
      "Owner portal access with real-time property performance data"
    ]
  },
];

export default function PropertyManagementService() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <Key className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Professional Property Management
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Maximize your investment returns with our comprehensive property management services. 
          We handle everything from tenant screening to maintenance coordination, so you can enjoy passive income stress-free.
        </p>
      </div>

      {/* Services Accordion */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Comprehensive Management Services</h3>
        <Accordion type="single" collapsible className="space-y-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <AccordionItem key={index} value={`service-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="ml-11 space-y-4">
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Key Features:</h5>
                      <div className="grid lg:grid-cols-2 gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-foreground mb-2">Detailed Services:</h5>
                      <div className="space-y-2">
                        {service.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-start">
                            <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0 mt-2" />
                            <span className="text-sm text-muted-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* Benefits Accordion */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Why Choose Our Management Services</h3>
        <Accordion type="single" collapsible className="space-y-4">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <AccordionItem key={index} value={`benefit-${index}`} className="border rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center space-x-3">
                    <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="ml-11 space-y-2">
                    {benefit.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0 mt-2" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>

      {/* Pricing Section */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Transparent Pricing</h3>
        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card key={index} className="relative hover:shadow-xl transition-all duration-300">
              {index === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    {tier.name}
                  </h4>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {tier.description}
                  </p>
                  <div className="text-2xl font-bold text-primary">
                    {tier.rate}
                    {tier.rate.includes('%') && <span className="text-sm text-muted-foreground"> of rent</span>}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground">{tier.additionalInfo}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Process Accordion */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">How It Works</h3>
        <Accordion type="single" collapsible className="space-y-4">
          {processSteps.map((phase, index) => (
            <AccordionItem key={index} value={`process-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{phase.step}</span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{phase.title}</h4>
                    <p className="text-sm text-muted-foreground">{phase.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="ml-11 space-y-2">
                  {phase.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary mr-2 flex-shrink-0 mt-2" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </div>
  );
}