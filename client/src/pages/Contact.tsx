import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LeadForm from "@/components/forms/LeadForm";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Calendar, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "(561) 494-5026",
    action: "tel:(561) 494-5026",
    actionText: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@atlanterealtytc.com",
    action: "mailto:info@atlanterealtytc.com",
    actionText: "Send Email",
  },
  {
    icon: MapPin,
    title: "Office Location",
    details: "789 SW Federal Highway, STE 201\nStuart, FL 34994",
    action: "https://maps.google.com/?q=789+SW+Federal+Highway+STE+201+Stuart+FL+34994",
    actionText: "Get Directions",
  },
];

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "By Appointment" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to start your real estate journey? Our team of experts is here to help you every step of the way.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <Card key={index} className="text-center hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground mb-3" data-testid={`contact-title-${index}`}>
                        {info.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 whitespace-pre-line" data-testid={`contact-details-${index}`}>
                        {info.details}
                      </p>
                      <Button
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        onClick={() => window.open(info.action, info.action.startsWith('http') ? '_blank' : '_self')}
                        data-testid={`contact-action-${index}`}
                      >
                        {info.actionText}
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <LeadForm
                  title="Send Us a Message"
                  source="contact-page"
                />
              </div>
              
              {/* Additional Info */}
              <div className="space-y-8">
                {/* Office Hours */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-primary" />
                      Office Hours
                    </h3>
                    <div className="space-y-3">
                      {officeHours.map((schedule, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-muted-foreground" data-testid={`hours-day-${index}`}>
                            {schedule.day}
                          </span>
                          <span className="font-medium text-foreground" data-testid={`hours-time-${index}`}>
                            {schedule.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>


                {/* Schedule Meeting */}
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      Schedule a Meeting
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Prefer to schedule a consultation at your convenience? Book a meeting with one of our specialists.
                    </p>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                      data-testid="button-schedule-meeting"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Schedule Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-foreground mb-4">
                Visit Our Office
              </h2>
              <p className="text-muted-foreground">
                Located in the heart of Stuart, convenient to all Treasure Coast communities
              </p>
            </div>
            
            {/* Interactive OpenStreetMap */}
            <div className="bg-muted rounded-2xl h-96 overflow-hidden">
              <iframe
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${-80.25505284690742 - 0.01},${27.192753056680115 - 0.005},${-80.25505284690742 + 0.01},${27.192753056680115 + 0.005}&layer=mapnik&marker=${27.192753056680115},${-80.25505284690742}`}
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atlante Realty Office Location"
              ></iframe>
            </div>
            <div className="text-center mt-4">
              <Button
                variant="outline"
                onClick={() => window.open("https://maps.google.com/?q=789+SW+Federal+Highway+STE+201+Stuart+FL+34994", "_blank")}
                data-testid="button-view-map"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View in Google Maps
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
