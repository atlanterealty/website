import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

const services = [
  { name: "Search Properties", href: "/brokerage" },
  { name: "Our Services", href: "/services" },
  { name: "Residential Brokerage", href: "/services?service=residential-brokerage" },
  { name: "Property Management", href: "/services?service=property-management" },
  { name: "Planning & Development", href: "/services?service=planning-development" },
  { name: "Real Estate School", href: "/school" },
];

const resources = [
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
  { name: "Agent Directory", href: "/agents" },
];

const legal = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Accessibility", href: "/accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <img
                src="/atlante-logo.png"
                alt="Atlante Realty Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-serif font-semibold">Atlante</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your trusted partner for comprehensive real estate solutions across the Treasure Coast.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/1JhRfHt7mq/"
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label="Facebook"
                data-testid="social-facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                    data-testid={`footer-service-${service.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <Link 
                    href={resource.href} 
                    className="text-gray-300 hover:text-primary transition-colors"
                    data-testid={`footer-resource-${resource.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {resource.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Connected</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                <span data-testid="contact-phone">(561) 494-5026</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                <span data-testid="contact-email">info@atlanterealtytc.com</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-3 text-primary mt-1" />
                <div data-testid="contact-address">
                  789 SW Federal Highway, STE 201<br />
                  Stuart, FL 34994
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm" data-testid="copyright">
            © 2024 Atlante Real Estate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legal.map((item) => (
              <Link 
                key={item.name}
                href={item.href} 
                className="text-gray-400 hover:text-primary text-sm transition-colors"
                data-testid={`footer-legal-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
