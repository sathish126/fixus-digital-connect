import { MessageCircle, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in FixUs services and would like to get more information.";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    "Custom Software Development",
    "IoT & Automation Solutions",
    "Cybersecurity Services",
    "Cloud Computing",
    "Data Analytics",
    "Robotics Development"
  ];

  const industries = [
    "Healthcare",
    "Manufacturing",
    "Financial Services", 
    "Education",
    "Government",
    "Retail & E-commerce"
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
              FixUs
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Comprehensive IT and engineering solutions provider, delivering innovation, 
              security, and excellence to businesses worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white/90">+91 96294 63964</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white/90">India</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-secondary mr-3" />
                <span className="text-white/90">24/7 Support Available</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-secondary transition-colors cursor-pointer flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xl font-bold mb-6">Industries We Serve</h4>
            <ul className="space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href="#clients" 
                    className="text-white/80 hover:text-secondary transition-colors cursor-pointer flex items-center group"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform" />
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-xl font-bold mb-6">Get In Touch</h4>
            <p className="text-white/80 mb-6">
              Ready to transform your business? Contact us via WhatsApp for instant support and quotes.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold mb-4 shadow-secondary"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>

            <div className="text-sm text-white/60">
              <p className="mb-2">🚀 Instant Quotes Available</p>
              <p className="mb-2">💬 24/7 Customer Support</p>
              <p>🔒 Secure & Confidential</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} FixUs. All rights reserved. | Comprehensive IT & Engineering Solutions
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#about" className="text-white/60 hover:text-white transition-colors">
                About Us
              </a>
              <a href="#services" className="text-white/60 hover:text-white transition-colors">
                Services
              </a>
              <a href="#clients" className="text-white/60 hover:text-white transition-colors">
                Clients
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="text-secondary hover:text-secondary-light transition-colors font-medium"
              >
                Contact Support
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-accent to-secondary opacity-50" />
    </footer>
  );
};

export default Footer;