import { 
  Code2, Cloud, Shield, Settings, Database, Headphones
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const handleServiceInquiry = (service: string) => {
    const message = `Hi! I'm interested in your ${service} services. Could you provide more details and a quote?`;
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const services = [
    {
      icon: Code2,
      title: "Software Development",
      description: "Custom web and mobile applications tailored to your business needs",
      features: ["Web Applications", "Mobile Apps", "API Development", "Database Design"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      features: ["Cloud Migration", "Infrastructure Setup", "Cloud Security", "24/7 Monitoring"],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business",
      features: ["Security Audits", "Data Protection", "Network Security", "Compliance"],
      gradient: "bg-gradient-to-r from-accent to-destructive"
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic IT guidance and digital transformation services",
      features: ["IT Strategy", "Digital Transformation", "Process Optimization", "Training"],
      gradient: "bg-gradient-primary"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Data analytics and business intelligence solutions",
      features: ["Data Analytics", "Business Intelligence", "Data Migration", "Reporting"],
      gradient: "bg-gradient-secondary"
    },
    {
      icon: Headphones,
      title: "IT Support",
      description: "24/7 technical support and managed IT services",
      features: ["24/7 Support", "System Maintenance", "Help Desk", "Remote Assistance"],
      gradient: "bg-gradient-to-r from-accent to-destructive"
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Professional IT solutions designed to help your business succeed and grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 bg-gradient-card backdrop-blur-sm"
            >
              <CardHeader className="pb-4">
                <div className={`w-12 sm:w-16 h-12 sm:h-16 rounded-lg ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-sm sm:text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full bg-gradient-primary hover:opacity-90 transition-smooth text-sm sm:text-base"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-hero rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white shadow-elegant">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
              Let's discuss how we can help your business succeed.
            </p>
            <Button 
              size="lg"
              onClick={() => handleServiceInquiry("IT solutions")}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-lg"
            >
              Get a Quote Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;