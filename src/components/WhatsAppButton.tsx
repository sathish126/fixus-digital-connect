import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip after button appears for first-time users
      const tooltipTimer = setTimeout(() => {
        if (!localStorage.getItem('whatsapp-tooltip-shown')) {
          setShowTooltip(true);
          localStorage.setItem('whatsapp-tooltip-shown', 'true');
          // Auto-hide tooltip after 3 seconds
          setTimeout(() => setShowTooltip(false), 3000);
        }
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const message = "Hi! I found your website and I'm interested in FixUs services. Could you please provide more information?";
    window.open(`https://wa.me/919629463964?text=${encodeURIComponent(message)}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 w-64 animate-slide-in-right">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-foreground mb-1">
                Need help? Chat with us!
              </p>
              <p className="text-xs text-muted-foreground">
                Get instant quotes and support via WhatsApp
              </p>
            </div>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-muted-foreground hover:text-foreground ml-2"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute -bottom-1 right-6 w-3 h-3 bg-white rotate-45 border-r border-b border-border" />
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative bg-secondary hover:bg-secondary-light text-white rounded-full p-4 shadow-secondary hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-pulse-glow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
        
        {/* Ripple Effect */}
        <div className="absolute inset-0 rounded-full border-4 border-secondary/30 animate-ping" />
        
        {/* Online Indicator */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        </div>

        {/* Hover Text */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
          <div className="absolute top-full right-3 w-2 h-2 bg-foreground rotate-45 -mt-1" />
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;