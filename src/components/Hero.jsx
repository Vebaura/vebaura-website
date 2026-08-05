import { Sparkles, ArrowRight, CircleCheck, Globe, Monitor, ShoppingCart, Receipt, Cloud, TrendingUp } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handlePlanetClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      element.classList.add('service-card-highlight');
      setTimeout(() => {
        element.classList.remove('service-card-highlight');
      }, 2500);
    } else {
      const fallback = document.getElementById('services');
      if (fallback) fallback.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Network Constellation Background Layer */}
      <div className="hero-network-bg"></div>
      
      {/* Background Glow Effects (Logo Colors) */}
      <div className="hero-blobs-container">
        <div className="hero-blob blob-cyan animate-float"></div>
        <div className="hero-blob blob-purple animate-float-slow"></div>
        <div className="hero-blob blob-magenta animate-float"></div>
      </div>

      {/* Main Content */}
      <div className="container hero-content-container">
        
        {/* Left Content */}
        <div className="hero-content">
          <div className="hero-badge animate-fade-in" style={{ animationDelay: '0ms' }}>
            <span className="hero-badge-inner">
              <Sparkles size={16} className="hero-badge-icon" />
              Technology Solutions & Products
            </span>
          </div>
          
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '120ms' }}>
            Build Your <span className="gradient-text">Digital Aura</span><br/>
            with Vebaura
          </h1>
          
          <p className="hero-description animate-fade-in" style={{ animationDelay: '240ms' }}>
            At Vebaura, we combine creativity, technology and strategy to deliver powerful digital experiences that drive success.
          </p>
          
          <div className="hero-actions animate-fade-in" style={{ animationDelay: '360ms' }}>
            <a href="#services" className="btn-explore group">
              Explore Our Services
              <ArrowRight size={20} className="nav-arrow-right" />
            </a>
            <a href="#products" className="btn-products">
              See Our Products
            </a>
          </div>
          
          <div className="hero-trust-badges animate-fade-in" style={{ animationDelay: '480ms' }}>
            <span className="trust-badge">
              <CircleCheck size={16} className="trust-icon" />
              Trusted delivery
            </span>
            <span className="trust-badge">
              <CircleCheck size={16} className="trust-icon" />
              Transparent pricing
            </span>
            <span className="trust-badge hidden-sm">
              <CircleCheck size={16} className="trust-icon" />
              Dedicated support
            </span>
          </div>
        </div>

        {/* Right Content: Modern Neural Network Constellation & Satellite Pills */}
        <div className="hero-visual-container animate-fade-in" style={{ animationDelay: '600ms' }}>
          
          {/* Reverted/Restored Background Neural Mesh (Intricate Network Constellation) */}
          <div className="neural-network-bg">
            <svg viewBox="0 0 600 600" className="network-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="netGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#00AEEF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#2dd4bf" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Constellation Connecting Lines */}
              <path d="M 120,80 L 280,150 L 190,260 Z" stroke="url(#netGrad1)" strokeWidth="1.2" strokeDasharray="4 2" />
              <path d="M 280,150 L 450,110 L 390,240 Z" stroke="url(#netGrad1)" strokeWidth="1.2" />
              <path d="M 390,240 L 520,280 L 440,420 Z" stroke="url(#netGrad1)" strokeWidth="1" strokeDasharray="3 3" />
              <path d="M 440,420 L 320,490 L 230,400 Z" stroke="url(#netGrad1)" strokeWidth="1.5" />
              <path d="M 230,400 L 100,340 L 190,260 Z" stroke="url(#netGrad1)" strokeWidth="1.2" />
              <path d="M 280,150 L 320,490" stroke="rgba(139, 92, 246, 0.25)" strokeWidth="1" />
              <path d="M 190,260 L 390,240 L 230,400" stroke="rgba(0, 174, 239, 0.3)" strokeWidth="1" />

              {/* Glowing Network Nodes & Junction points */}
              <circle cx="120" cy="80" r="4" fill="#00AEEF" className="pulse-fast" />
              <circle cx="280" cy="150" r="6" fill="#8b5cf6" className="pulse-slow" />
              <circle cx="450" cy="110" r="5" fill="#2dd4bf" className="pulse-fast" />
              <circle cx="190" cy="260" r="5" fill="#00AEEF" className="pulse-medium" />
              <circle cx="390" cy="240" r="7" fill="#8b5cf6" className="pulse-fast" />
              <circle cx="520" cy="280" r="4" fill="#00AEEF" />
              <circle cx="440" cy="420" r="6" fill="#2dd4bf" className="pulse-slow" />
              <circle cx="320" cy="490" r="5" fill="#8b5cf6" className="pulse-medium" />
              <circle cx="230" cy="400" r="6" fill="#00AEEF" className="pulse-fast" />
              <circle cx="100" cy="340" r="4" fill="#8b5cf6" />
            </svg>
          </div>

          {/* Multi-Layered Central Brand Hub */}
          <div className="center-brand-hub">
            <div className="hub-aura-glow"></div>
            <div className="hub-glass-ring"></div>
            <div className="hub-white-sphere">
              <span className="hub-logo-text">Vebaura</span>
            </div>
          </div>

          {/* Rotating 360° Orbit Ring with Free-Floating Satellite Planets (No Inner Lines!) */}
          <div className="orbit-rotating-ring">
            
            {/* Planet 1: Web Dev */}
            <div className="orbit-planet planet-1">
              <div className="planet-counter-rot counter-1">
                <a href="#service-web-dev" onClick={(e) => handlePlanetClick(e, 'service-web-dev')} className="planet-pill">
                  <div className="pill-icon bg-gradient-blue">
                    <Globe size={18} />
                  </div>
                  <span className="pill-title">Web Dev</span>
                </a>
              </div>
            </div>

            {/* Planet 2: Web Apps */}
            <div className="orbit-planet planet-2">
              <div className="planet-counter-rot counter-2">
                <a href="#service-web-apps" onClick={(e) => handlePlanetClick(e, 'service-web-apps')} className="planet-pill">
                  <div className="pill-icon bg-gradient-purple">
                    <Monitor size={18} />
                  </div>
                  <span className="pill-title">Web Apps</span>
                </a>
              </div>
            </div>

            {/* Planet 3: E-Commerce */}
            <div className="orbit-planet planet-3">
              <div className="planet-counter-rot counter-3">
                <a href="#service-ecommerce" onClick={(e) => handlePlanetClick(e, 'service-ecommerce')} className="planet-pill">
                  <div className="pill-icon bg-gradient-cyan">
                    <ShoppingCart size={18} />
                  </div>
                  <span className="pill-title">E-Commerce</span>
                </a>
              </div>
            </div>

            {/* Planet 4: Billing Software */}
            <div className="orbit-planet planet-4">
              <div className="planet-counter-rot counter-4">
                <a href="#service-billing" onClick={(e) => handlePlanetClick(e, 'service-billing')} className="planet-pill">
                  <div className="pill-icon bg-gradient-blue">
                    <Receipt size={18} />
                  </div>
                  <span className="pill-title">Billing Soft</span>
                </a>
              </div>
            </div>

            {/* Planet 5: Cloud Solutions */}
            <div className="orbit-planet planet-5">
              <div className="planet-counter-rot counter-5">
                <a href="#service-cloud" onClick={(e) => handlePlanetClick(e, 'service-cloud')} className="planet-pill">
                  <div className="pill-icon bg-gradient-purple">
                    <Cloud size={18} />
                  </div>
                  <span className="pill-title">Cloud AWS</span>
                </a>
              </div>
            </div>

            {/* Planet 6: Digital Marketing */}
            <div className="orbit-planet planet-6">
              <div className="planet-counter-rot counter-6">
                <a href="#service-marketing" onClick={(e) => handlePlanetClick(e, 'service-marketing')} className="planet-pill">
                  <div className="pill-icon bg-gradient-cyan">
                    <TrendingUp size={18} />
                  </div>
                  <span className="pill-title">Marketing</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
