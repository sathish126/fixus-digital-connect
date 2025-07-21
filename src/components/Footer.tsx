import { MessageCircle, Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const handleWhatsAppClick = () => {
    const message = "Hi! I'm interested in FixUs IT services and would like to get more information.";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    "Software Development",
    "Cloud Solutions", 
    "Cybersecurity",
    "IT Consulting",
    "Data Management",
    "Technical Support"
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white to-secondary-light bg-clip-text text-transparent">
              FixUs
            </h3>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Professional IT solutions provider, delivering quality services and reliable support to help businesses succeed.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 sm:w-5 h-4 sm:h-5 text-secondary mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-white/90 text-sm sm:text-base">+91 96294 63964</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-secondary mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-white/90 text-sm sm:text-base">India</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 sm:w-5 h-4 sm:h-5 text-secondary mr-2 sm:mr-3 flex-shrink-0" />
                <span className="text-white/90 text-sm sm:text-base">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Our Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#services" 
                    className="text-white/80 hover:text-secondary transition-colors cursor-pointer flex items-center group text-sm sm:text-base"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform flex-shrink-0" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Industries</h4>
            <ul className="space-y-2 sm:space-y-3">
              {industries.map((industry, index) => (
                <li key={index}>
                  <a 
                    href="#clients" 
                    className="text-white/80 hover:text-secondary transition-colors cursor-pointer flex items-center group text-sm sm:text-base"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 group-hover:scale-125 transition-transform flex-shrink-0" />
                    {industry}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Contact */}
          <div>
            <h4 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Contact Us</h4>
            <p className="text-white/80 mb-4 sm:mb-6 text-sm sm:text-base">
              Ready to get started? Contact us via WhatsApp for instant support.
            </p>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold mb-4 shadow-secondary text-sm sm:text-base"
            >
              <MessageCircle className="w-4 sm:w-5 h-4 sm:h-5 mr-2" />
              Chat on WhatsApp
            </Button>

            <div className="text-xs sm:text-sm text-white/60 space-y-1">
              <p>🚀 Quick Quotes Available</p>
              <p>💬 24/7 Customer Support</p>
              <p>🔒 Secure & Confidential</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
              © {new Date().getFullYear()} FixUs. All rights reserved. | Professional IT Solutions
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              <a href="#about" className="text-white/60 hover:text-white transition-colors">
                About
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
                Contact
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