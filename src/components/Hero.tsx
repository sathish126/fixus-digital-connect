import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  const handleGetStarted = () => {
    const message = "Hi! I'm interested in FixUs IT solutions. Please tell me more about your services.";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-secondary/70" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-4 sm:left-10 lg:left-20 w-12 sm:w-16 lg:w-32 h-12 sm:h-16 lg:h-32 bg-secondary/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-32 right-4 sm:right-8 lg:right-16 w-8 sm:w-12 lg:w-24 h-8 sm:h-12 lg:h-24 bg-primary-light/30 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/4 w-6 sm:w-8 lg:w-16 h-6 sm:h-8 lg:h-16 bg-accent/20 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-secondary-light to-accent bg-clip-text text-transparent">
              IT Solutions
            </span>
          </h1>
          
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-4xl mx-auto px-2 sm:px-4 leading-relaxed">
            Custom software development, cybersecurity services, and IT consulting 
            to help your business grow and succeed.
          </p>

          {/* Quote */}
          <div className="mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-4">
            <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white/95 italic leading-relaxed">
              "Restart is better than regret"
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 sm:gap-4 lg:gap-6 max-w-5xl mx-auto mb-6 sm:mb-8 lg:mb-12 px-2">
            {[
              { number: "25+", label: "Projects Delivered" },
              { number: "15+", label: "Happy Clients" },
              { number: "2+", label: "Years Experience" },
              { number: "10+", label: "IT Experts" },
              { number: "200+", label: "Projects Completed" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-fade-in p-2 sm:p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
                style={{ animationDelay: `${1 + index * 0.2}s` }}
              >
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-white/80 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons moved below */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center sm:justify-start items-center sm:items-start px-2 sm:px-4">
            <Button 
              size="lg"
              onClick={handleGetStarted}
              className="w-full sm:w-auto bg-secondary hover:bg-secondary-light text-white shadow-lg transform hover:scale-105 transition-all duration-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold rounded-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
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