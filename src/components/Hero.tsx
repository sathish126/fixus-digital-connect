import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleGetStarted = () => {
    const message = "Hi! I'm interested in FixUs IT solutions. Please tell me more about your services.";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 sm:left-20 w-16 sm:w-32 h-16 sm:h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-8 sm:right-16 w-12 sm:w-24 h-12 sm:h-24 bg-primary-light/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-accent/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Professional
            <span className="block bg-gradient-to-r from-secondary-light to-accent bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto px-4">
            Custom software development, cybersecurity services, and IT consulting 
            to help your business grow and succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-white shadow-secondary transform hover:scale-105 transition-bounce px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-xl mx-auto">
            {[
              { number: "200+", label: "Projects Delivered" },
              { number: "50+", label: "Happy Clients" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in p-2"
                style={{ animationDelay: `${1 + index * 0.3}s` }}
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
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