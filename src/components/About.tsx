import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import teamImage from '@/assets/team-image.jpg';

const About = () => {
  const handleContactUs = () => {
    const message = "Hi! I'd like to learn more about FixUs and how you can help my business with IT solutions.";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver forward-thinking solutions"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "24/7 support and robust security ensure your business stays protected"
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with clients to understand and exceed their expectations"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Quality and precision in every project we deliver"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "15+", label: "IT Experts" },
    { number: "200+", label: "Projects Completed" },
    { number: "99%", label: "Client Satisfaction" }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">FixUs</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Your trusted IT partner, delivering reliable solutions that help businesses grow.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-5 sm:w-6 h-5 sm:h-6 text-primary mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                To provide professional IT solutions that help businesses succeed. We focus on 
                delivering quality services with reliable support and clear communication.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-secondary mr-3" />
                <h3 className="text-xl sm:text-2xl font-bold">Our Approach</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                We believe in simple, effective solutions. Our team works closely with clients 
                to understand their needs and deliver results that make a real difference.
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <h3 className="text-lg sm:text-xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  "Professional software development services",
                  "Reliable cybersecurity solutions",
                  "24/7 technical support",
                  "Customized solutions for your business",
                  "Experienced team of IT professionals"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 sm:mt-3 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={handleContactUs}
              className="bg-gradient-secondary hover:opacity-90 transition-smooth px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold shadow-secondary"
            >
              Get in Touch
            </Button>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={teamImage} 
                alt="FixUs Team" 
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-elegant border">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-primary">200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Our Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center p-4 sm:p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-2 hover:border-primary/20"
              >
                <CardContent className="pt-4 sm:pt-6">
                  <div className="w-12 sm:w-16 h-12 sm:h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-hero rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold">{stat.number}</div>
                <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;