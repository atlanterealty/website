import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PenTool, MapPin, Building, FileText, Users, Target, TrendingUp, Calendar, ExternalLink } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Feasibility Studies",
    description: "Comprehensive market analysis and financial modeling to evaluate project viability and potential returns.",
    features: [
      "Market demand analysis",
      "Financial projections",
      "Risk assessment",
      "ROI calculations",
    ],
    details: [
      "In-depth market demand analysis including demographic studies and competitor analysis",
      "Detailed financial projections with multiple scenario modeling (best case, worst case, most likely)",
      "Comprehensive risk assessment covering market, financial, regulatory, and construction risks",
      "ROI calculations including IRR, NPV, and cash-on-cash return analysis",
      "Absorption rate studies and pricing strategy recommendations",
      "Exit strategy planning and timing optimization",
      "Sensitivity analysis for key variables affecting project profitability",
      "Land use optimization studies to maximize development potential"
    ]
  },
  {
    icon: MapPin,
    title: "Site Acquisition",
    description: "Expert guidance in identifying, evaluating, and securing optimal development sites.",
    features: [
      "Site identification",
      "Due diligence support",
      "Negotiation assistance",
      "Contract review",
    ],
    details: [
      "Comprehensive site identification using GIS mapping and market analysis tools",
      "Detailed due diligence including environmental assessments and soil studies",
      "Professional negotiation support to secure favorable purchase terms",
      "Thorough contract review and legal documentation assistance",
      "Zoning analysis and development potential assessment",
      "Infrastructure evaluation including utilities, roads, and accessibility",
      "Entitlement risk assessment and timeline projections",
      "Market timing analysis for optimal acquisition strategy"
    ]
  },
  {
    icon: Building,
    title: "Entitlement Support",
    description: "Navigate complex zoning and permitting processes to ensure your project moves forward smoothly.",
    features: [
      "Zoning analysis",
      "Permit coordination",
      "Municipal relations",
      "Timeline management",
    ],
    details: [
      "Comprehensive zoning analysis and variance application support when needed",
      "Permit coordination across multiple agencies and jurisdictions",
      "Municipal relations management and stakeholder engagement",
      "Timeline management with milestone tracking and contingency planning",
      "Environmental impact assessment coordination and reporting",
      "Public hearing preparation and presentation support",
      "Traffic impact studies and mitigation planning",
      "Historic preservation compliance when applicable"
    ]
  },
  {
    icon: Users,
    title: "Project Management",
    description: "End-to-end project oversight from conception through completion and delivery.",
    features: [
      "Timeline coordination",
      "Budget management",
      "Quality control",
      "Stakeholder communication",
    ],
    details: [
      "Comprehensive timeline coordination with critical path method (CPM) scheduling",
      "Detailed budget management with cost controls and variance reporting",
      "Quality control inspections and compliance monitoring throughout construction",
      "Stakeholder communication management including investors, lenders, and municipal officials",
      "Contractor selection and management with performance monitoring",
      "Change order management and approval processes",
      "Progress reporting with photos, milestones, and budget updates",
      "Risk mitigation and contingency planning throughout project lifecycle"
    ]
  },
];

const projectTypes = [
  {
    name: "Residential Development",
    description: "Single-family, multi-family, and mixed-use residential projects",
    details: [
      "Single-family subdivisions and custom home communities",
      "Multi-family developments including apartments and condominiums", 
      "Mixed-use projects combining residential with retail/commercial",
      "Senior living and age-restricted communities",
      "Affordable housing and workforce housing projects",
      "Luxury resort-style communities with amenities"
    ]
  },
  {
    name: "Commercial Development",
    description: "Office buildings, retail centers, and commercial complexes",
    details: [
      "Office buildings and business parks with modern amenities",
      "Retail centers from neighborhood strips to regional shopping centers",
      "Medical office buildings and healthcare facilities",
      "Hospitality projects including hotels and conference centers",
      "Entertainment venues and recreational facilities",
      "Mixed-use commercial developments with multiple property types"
    ]
  },
  {
    name: "Industrial Development",
    description: "Warehouses, manufacturing facilities, and distribution centers",
    details: [
      "Warehouse and distribution centers with modern logistics features",
      "Manufacturing facilities with specialized infrastructure requirements",
      "Industrial parks and business incubators",
      "Cold storage and specialized storage facilities",
      "Flex space developments combining office and warehouse",
      "Data centers and technology infrastructure projects"
    ]
  },
  {
    name: "Infrastructure Projects",
    description: "Municipal and utility infrastructure development support",
    details: [
      "Municipal infrastructure including roads, utilities, and drainage",
      "Public-private partnership project development",
      "Utility infrastructure including water, sewer, and telecommunications",
      "Transportation infrastructure and mobility improvements",
      "Environmental remediation and sustainability projects",
      "Community facilities including parks, schools, and public buildings"
    ]
  }
];

const processPhases = [
  {
    step: "01",
    title: "Discovery & Analysis",
    description: "We start by understanding your vision, goals, and constraints to develop a comprehensive project strategy.",
    details: [
      "Initial client consultation to understand vision, goals, and investment criteria",
      "Site analysis including physical characteristics, zoning, and development potential",
      "Market research and competitive analysis for the proposed project type",
      "Financial capacity assessment and funding strategy development",
      "Risk identification and mitigation strategy planning",
      "Development timeline and milestone establishment",
      "Team assembly including architects, engineers, and consultants",
      "Preliminary budget development and cost estimation"
    ]
  },
  {
    step: "02", 
    title: "Planning & Design",
    description: "Our team creates detailed plans, conducts feasibility studies, and designs solutions that maximize value.",
    details: [
      "Detailed feasibility studies with financial modeling and market analysis",
      "Conceptual design development working with architects and engineers",
      "Land planning and site design optimization for maximum efficiency",
      "Infrastructure planning including utilities, roads, and drainage",
      "Environmental impact assessment and mitigation planning",
      "Community impact analysis and stakeholder engagement strategy",
      "Phasing strategy development for multi-phase projects",
      "Value engineering to optimize costs while maintaining quality"
    ]
  },
  {
    step: "03",
    title: "Approvals & Permits",
    description: "We navigate the regulatory landscape to secure all necessary approvals and permits efficiently.",
    details: [
      "Comprehensive permit application preparation and submission",
      "Municipal agency coordination and relationship management",
      "Public hearing preparation and community engagement",
      "Environmental regulatory compliance and agency coordination",
      "Utility coordination and infrastructure agreement negotiations",
      "Variance and special use permit applications when required",
      "Appeal processes and regulatory challenge management",
      "Final plat approval and recording processes"
    ]
  },
  {
    step: "04",
    title: "Execution & Delivery",
    description: "We oversee project implementation, ensuring quality standards and timely delivery within budget.",
    details: [
      "Contractor selection through competitive bidding processes",
      "Construction management and quality control oversight",
      "Budget monitoring and change order management",
      "Schedule management with milestone tracking and reporting",
      "Quality assurance inspections and compliance monitoring",
      "Marketing and sales coordination for revenue-generating projects",
      "Final inspections and certificate of occupancy coordination",
      "Project closeout and warranty management"
    ]
  },
];

const successMetrics = [
  {
    metric: "50+",
    description: "Projects Successfully Completed",
    details: "Across residential, commercial, and mixed-use developments"
  },
  {
    metric: "$200M+",
    description: "Total Development Value Managed",
    details: "From small infill projects to large-scale master-planned communities"
  },
  {
    metric: "95%",
    description: "On-Time Completion Rate",
    details: "Consistent delivery within planned timelines and budgets"
  },
  {
    metric: "25+",
    description: "Years of Combined Experience",
    details: "Deep expertise in Treasure Coast development market"
  }
];

const specializations = [
  {
    title: "Treasure Coast Expertise",
    description: "Deep knowledge of local market conditions, regulatory environment, and development opportunities specific to the Treasure Coast region.",
    icon: MapPin
  },
  {
    title: "Sustainable Development",
    description: "Focus on environmentally responsible development practices including LEED certification, green building standards, and sustainable site design.",
    icon: Target
  },
  {
    title: "Public-Private Partnerships",
    description: "Experience in structuring and managing public-private partnership projects including municipal infrastructure and community development initiatives.",
    icon: Users
  },
  {
    title: "Adaptive Reuse Projects",
    description: "Expertise in transforming existing structures for new uses, including historic preservation and urban redevelopment projects.",
    icon: Building
  }
];

export default function PlanningDevelopment() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center">
        <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
          <PenTool className="h-8 w-8 text-primary" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
          Strategic Development Consulting
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your vision into reality with our comprehensive development consulting services. 
          From feasibility studies to project completion, we guide you through every step of the development process.
        </p>
      </div>

      {/* Development Services Accordion */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Comprehensive Development Services</h3>
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
                      <h5 className="font-medium text-foreground mb-2">Core Services:</h5>
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
                      <h5 className="font-medium text-foreground mb-2">Detailed Capabilities:</h5>
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

      {/* Project Types Accordion */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Development Specialties</h3>
        <Accordion type="single" collapsible className="space-y-4">
          {projectTypes.map((project, index) => (
            <AccordionItem key={index} value={`project-${index}`} className="border rounded-lg px-4">
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center space-x-3">
                  <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Building className="h-4 w-4 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">{project.name}</h4>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pt-4">
                <div className="ml-11 space-y-2">
                  {project.details.map((detail, detailIndex) => (
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

      {/* Development Process Accordion */}
      <div>
        <h3 className="text-2xl font-semibold text-foreground mb-6">Our Development Process</h3>
        <Accordion type="single" collapsible className="space-y-4">
          {processPhases.map((phase, index) => (
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

      {/* Consultation CTA */}
      <Card>
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Ready to Start Your Development Project?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a consultation with our development experts to discuss your project goals and explore how we can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="gradient-gold text-white hover:opacity-90 transition-opacity"
                onClick={() => window.location.href = "/contact"}
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Learn More
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}