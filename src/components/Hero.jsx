import { Sparkles, ArrowRight, CircleCheck, Globe, Monitor, ShoppingCart, Receipt, Cloud, TrendingUp } from 'lucide-react';
import './Hero.css';

const Hero = () => {
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

        {/* Right Content: 2D Flat Constellation Orbit */}
        <div className="orbit-container hidden-mobile animate-fade-in" style={{ animationDelay: '600ms' }}>
          
          <div className="orbit-scene">
            
            {/* Background Faint Concentric Rings */}
            <div className="orbit-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>

            {/* Central White Hub (Logo) */}
            <div className="orbit-center-hub">
              <span className="hub-text">Vebaura</span>
            </div>

            {/* The Main Orbit Path (Spins) */}
            <div className="orbit-path">
              
              {/* Planet 1: Web Development */}
              <div className="orbit-planet planet-1">
                <div className="planet-pill">
                  <div className="pill-icon bg-gradient-blue">
                    <Globe size={18} />
                  </div>
                  <span className="pill-title">Web Dev</span>
                </div>
              </div>

              {/* Planet 2: Web Applications */}
              <div className="orbit-planet planet-2">
                <div className="planet-pill">
                  <div className="pill-icon bg-gradient-purple">
                    <Monitor size={18} />
                  </div>
                  <span className="pill-title">Web Apps</span>
                </div>
              </div>

              {/* Planet 3: E-Commerce */}
              <div className="orbit-planet planet-3">
                <div className="planet-pill">
                  <div className="pill-icon bg-gradient-cyan">
                    <ShoppingCart size={18} />
                  </div>
                  <span className="pill-title">E-Commerce</span>
                </div>
              </div>

              {/* Planet 4: Billing Software */}
              <div className="orbit-planet planet-4">
                <div className="planet-pill">
                  <div className="pill-icon bg-gradient-blue">
                    <Receipt size={18} />
                  </div>
                  <span className="pill-title">Billing Soft</span>
                </div>
              </div>

              {/* Planet 5: Cloud Solutions */}
              <div className="orbit-planet planet-5">
                <div className="planet-pill">
                  <div className="pill-icon bg-gradient-purple">
                    <Cloud size={18} />
                  </div>
                  <span className="pill-title">Cloud AWS</span>
                </div>
              </div>

              {/* Planet 6: Digital Marketing */}
              <div className="orbit-planet planet-6">
                <div className="planet-pill">
                  <div className="pill-icon bg-gradient-cyan">
                    <TrendingUp size={18} />
                  </div>
                  <span className="pill-title">Marketing</span>
                </div>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
};

export default Hero;
