import { ArrowRight, CheckCircle, Zap, Shield, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleGetStarted = () => {
    const message = "Hi! I'm interested in FixUs comprehensive IT solutions. Please tell me more about your services.";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  const features = [
    { icon: CheckCircle, text: "Custom Software Development" },
    { icon: Zap, text: "Advanced IoT & Automation Solutions" },
    { icon: Shield, text: "Comprehensive Cybersecurity" },
    { icon: Cpu, text: "AI-Powered Engineering Solutions" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/80" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-primary-light/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Comprehensive
            <span className="block bg-gradient-to-r from-secondary-light to-accent bg-clip-text text-transparent">
              IT & Engineering
            </span>
            Solutions
          </h1>
          
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            From custom software development to advanced IoT solutions and cybersecurity - 
            we transform your business with cutting-edge technology.
          </p>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <feature.icon className="w-5 h-5 text-secondary-light" />
                <span className="text-white font-medium text-sm">{feature.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="bg-secondary hover:bg-secondary-light text-white shadow-secondary transform hover:scale-105 transition-bounce px-8 py-4 text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${1 + index * 0.3}s` }}
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;