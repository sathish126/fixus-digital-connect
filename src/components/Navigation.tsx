import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Clients', href: '#clients' }
  ];

  const handleQuoteClick = () => {
    const message = "Hi! I'm interested in FixUs IT services. Could you please provide more information?";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">{/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              FixUs
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-6 lg:ml-10 flex items-baseline space-x-3 lg:space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-2 lg:px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth"
                >
                  {item.name}
                </a>
              ))}
              <Button 
                onClick={handleQuoteClick}
                className="ml-3 lg:ml-4 bg-gradient-secondary hover:opacity-90 transition-smooth text-sm lg:text-base px-4 lg:px-6 py-2"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-1 lg:mr-2" />
                Get Quote
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-b border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm sm:text-base font-medium text-muted-foreground hover:text-primary transition-smooth"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button 
                onClick={handleQuoteClick}
                className="w-full bg-gradient-secondary hover:opacity-90 transition-smooth text-sm sm:text-base"
                size="sm"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;