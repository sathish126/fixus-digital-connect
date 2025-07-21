import { 
  Code2, Cloud, Shield, Smartphone, Database, Zap, 
  Bot, Cpu, Lock, Settings, BarChart3, Headphones 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const handleServiceInquiry = (service: string) => {
    const message = `Hi! I'm interested in your ${service} services. Could you provide more details and a quote?`;
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const serviceCategories = [
    {
      title: "Core IT & Digital Solutions",
      description: "Comprehensive software development and IT consulting services",
      gradient: "bg-gradient-primary",
      services: [
        {
          icon: Code2,
          title: "Custom Software Development",
          description: "App development, ERP/CRM systems, SaaS solutions, and cloud-native applications",
          features: ["Mobile & Web Apps", "Enterprise Software", "SaaS Development", "Cloud Migration"]
        },
        {
          icon: Settings,
          title: "IT Consulting & Strategy",
          description: "Digital transformation, infrastructure consulting, and specialized training",
          features: ["Digital Transformation", "AI/ML Training", "IoT Security", "Cloud Architecture"]
        },
        {
          icon: Database,
          title: "Data Management & Analytics",
          description: "Business intelligence, data backup, recovery, and governance strategies",
          features: ["Data Analytics", "BI Solutions", "Backup & Recovery", "Data Governance"]
        },
        {
          icon: Headphones,
          title: "Managed IT Services",
          description: "24/7 network monitoring, Office 365 management, and VoIP services",
          features: ["Network Monitoring", "Email Management", "VoIP Services", "Device Management"]
        }
      ]
    },
    {
      title: "Advanced Engineering & Automation",
      description: "Cutting-edge IoT, robotics, and mechanical simulation solutions",
      gradient: "bg-gradient-secondary",
      services: [
        {
          icon: Zap,
          title: "IoT Solutions",
          description: "Custom IoT devices, Industrial IoT, AIoT solutions, and cloud integration",
          features: ["Custom IoT Devices", "Industrial IoT", "AIoT Solutions", "Cloud Integration"]
        },
        {
          icon: Bot,
          title: "Robotics & Automation",
          description: "Custom robotics design, robo kits, software development, and RaaS models",
          features: ["Custom Robotics", "Robo Kits", "AI Integration", "RaaS Models"]
        },
        {
          icon: Cpu,
          title: "Mechanical Simulation",
          description: "FEA, CFD analysis, digital twin development, and multiphysics optimization",
          features: ["FEA & CFD", "Digital Twins", "Multiphysics Analysis", "Industry Solutions"]
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions and regulatory compliance",
      gradient: "bg-gradient-to-r from-accent to-destructive",
      services: [
        {
          icon: Shield,
          title: "Cybersecurity Services",
          description: "Network security, endpoint protection, VAPT, and AI-enhanced security",
          features: ["Network Security", "VAPT Testing", "Incident Response", "AI Security"]
        },
        {
          icon: Lock,
          title: "Data Privacy & Compliance",
          description: "DPDP Act compliance consulting and ISO 27001 implementation support",
          features: ["DPDP Compliance", "ISO 27001", "Privacy Consulting", "Audit Support"]
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From software development to advanced automation - we provide comprehensive solutions 
            that drive innovation and growth for your business.
          </p>
        </div>

        <div className="space-y-20">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="animate-fade-in">
              {/* Category Header */}
              <div className="text-center mb-12">
                <div className={`inline-block px-6 py-3 rounded-full ${category.gradient} text-white font-semibold text-lg mb-4 shadow-elegant`}>
                  {category.title}
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card 
                    key={serviceIndex} 
                    className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-primary/20 bg-gradient-card backdrop-blur-sm"
                  >
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-lg ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-secondary rounded-full mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button 
                        onClick={() => handleServiceInquiry(service.title)}
                        className="w-full bg-gradient-primary hover:opacity-90 transition-smooth"
                      >
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-hero rounded-3xl p-12 text-white shadow-elegant">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how our comprehensive solutions can drive your success forward.
            </p>
            <Button 
              size="lg"
              onClick={() => handleServiceInquiry("comprehensive IT solutions")}
              className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4 text-lg shadow-lg"
            >
              Start Your Project Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;