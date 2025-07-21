import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Clients = () => {
  const handleJoinClients = () => {
    const message = "Hi! I'm interested in becoming a FixUs client. Could you tell me more about your services and success stories?";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const testimonials = [
    {
      company: "TechFlow Solutions",
      industry: "Software Development",
      rating: 5,
      text: "FixUs transformed our entire IT infrastructure with their comprehensive approach. The IoT integration and cybersecurity solutions have significantly improved our operational efficiency.",
      author: "Sarah Chen",
      position: "CTO",
      logo: "T"
    },
    {
      company: "Manufacturing Plus",
      industry: "Industrial Manufacturing",
      rating: 5,
      text: "The robotics automation solutions from FixUs revolutionized our production line. We've seen a 40% increase in efficiency and zero security incidents since implementation.",
      author: "Michael Rodriguez",
      position: "Operations Director",
      logo: "M"
    },
    {
      company: "DataSecure Corp",
      industry: "Financial Services",
      rating: 5,
      text: "Outstanding cybersecurity services and DPDP compliance consulting. FixUs helped us achieve ISO 27001 certification seamlessly while maintaining operational excellence.",
      author: "Dr. Priya Sharma",
      position: "Chief Security Officer",
      logo: "D"
    },
    {
      company: "InnovateTech Labs",
      industry: "Research & Development",
      rating: 5,
      text: "The custom software development and AI integration services exceeded our expectations. Their team's expertise in emerging technologies is unmatched.",
      author: "James Wilson",
      position: "Research Director",
      logo: "I"
    },
    {
      company: "SmartCity Initiative",
      industry: "Government/Public Sector",
      rating: 5,
      text: "FixUs delivered a comprehensive IoT ecosystem for our smart city project. Their digital twin solutions provide real-time insights that help us serve citizens better.",
      author: "Lisa Thompson",
      position: "Project Manager",
      logo: "S"
    },
    {
      company: "CloudFirst Enterprises",
      industry: "Cloud Services",
      rating: 5,
      text: "Exceptional cloud migration services and managed IT support. The 24/7 monitoring and proactive maintenance have eliminated our downtime concerns completely.",
      author: "Robert Kumar",
      position: "Infrastructure Head",
      logo: "C"
    }
  ];

  const clientLogos = [
    { name: "TechFlow", logo: "T" },
    { name: "ManufacturingPlus", logo: "M" },
    { name: "DataSecure", logo: "D" },
    { name: "InnovateTech", logo: "I" },
    { name: "SmartCity", logo: "S" },
    { name: "CloudFirst", logo: "C" },
    { name: "AutoSystems", logo: "A" },
    { name: "SecureNet", logo: "SN" }
  ];

  const industries = [
    "Healthcare & Medical",
    "Financial Services",
    "Manufacturing & Industrial",
    "Education & Research",
    "Government & Public Sector",
    "Retail & E-commerce",
    "Transportation & Logistics",
    "Energy & Utilities"
  ];

  return (
    <section id="clients" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Trusted by leading organizations across diverse industries for comprehensive IT and engineering solutions.
          </p>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Trusted By Industry Leaders</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clientLogos.map((client, index) => (
              <div 
                key={index}
                className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-primary hover:scale-110 transition-transform cursor-pointer"
              >
                {client.logo}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-2 hover:border-primary/20"
              >
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-6">
                    <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                    <p className="text-muted-foreground italic pl-6">{testimonial.text}</p>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                      {testimonial.logo}
                    </div>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.company}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.industry}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Industries Served */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Industries We Serve</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="bg-white border-2 border-border hover:border-primary/30 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-lg font-semibold">{industry}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Success Metrics */}
        <div className="mb-16">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold text-center mb-12">Our Success in Numbers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">99.9%</div>
                <div className="text-white/80">Client Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">500+</div>
                <div className="text-white/80">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">50+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div>
                <div className="text-4xl sm:text-5xl font-bold mb-2">24/7</div>
                <div className="text-white/80">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us help you achieve the same level of success with our comprehensive IT and engineering solutions.
          </p>
          <Button 
            size="lg"
            onClick={handleJoinClients}
            className="bg-gradient-primary hover:opacity-90 transition-smooth px-8 py-4 text-lg font-semibold shadow-primary"
          >
            Start Your Success Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Clients;