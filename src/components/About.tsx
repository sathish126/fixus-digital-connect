import { Target, Eye, Award, Users, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import teamImage from '@/assets/team-image.jpg';

const About = () => {
  const handleContactUs = () => {
    const message = "Hi! I'd like to learn more about FixUs and how you can help transform our business with your comprehensive IT solutions.";
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
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Expert Engineers" },
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">FixUs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in comprehensive IT and engineering solutions, 
            driving innovation and digital transformation for businesses worldwide.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Target className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To empower businesses with comprehensive IT and engineering solutions that drive growth, 
                enhance security, and foster innovation. We believe in transforming complex challenges 
                into streamlined, efficient systems that propel our clients toward success.
              </p>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-secondary mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading provider of integrated IT and engineering solutions, setting new 
                standards for innovation, reliability, and customer satisfaction in the technology sector. 
                We envision a future where businesses thrive through intelligent automation and secure digital ecosystems.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4">Why Choose FixUs?</h3>
              <ul className="space-y-3">
                {[
                  "End-to-end solutions from software development to cybersecurity",
                  "Cutting-edge technologies including AI, IoT, and robotics",
                  "24/7 support and monitoring for peace of mind",
                  "Customized solutions tailored to your specific needs",
                  "Proven track record with 500+ successful projects"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={handleContactUs}
              className="bg-gradient-secondary hover:opacity-90 transition-smooth px-8 py-3 text-lg font-semibold shadow-secondary"
            >
              Partner With Us
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-elegant">
              <img 
                src={teamImage} 
                alt="FixUs Team" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-elegant border">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-2 hover:border-primary/20"
              >
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="bg-gradient-hero rounded-3xl p-12 text-white">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl sm:text-5xl font-bold">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;