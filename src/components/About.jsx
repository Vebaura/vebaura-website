import { Target, Lightbulb, Shield, Clock, Award } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './About.css';

const About = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="container">
        <div className="about-split-layout">
          
          {/* Left Content */}
          <div className={`about-content ${sectionVisible ? 'animate-fade-right' : 'opacity-0'}`}>
            <h2 className="section-title">About Vebaura</h2>
            <p className="about-lead">
              We are a team of passionate engineers, designers, and strategists dedicated to building the future of enterprise software.
            </p>
            <p className="about-text">
              Vebaura was founded with a singular mission: to make powerful, scalable technology accessible to businesses of all sizes. From high-performance cloud applications to intuitive UI/UX design, we don't just write code—we craft digital ecosystems that drive real, measurable growth.
            </p>

            <div className="about-features">
              <div className="about-feature">
                <div className="about-icon-navy">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="feature-title">Our Mission</h4>
                  <p className="feature-desc">To empower businesses globally through innovative, secure, and highly scalable software solutions.</p>
                </div>
              </div>

              <div className="about-feature">
                <div className="about-icon-navy">
                  <Lightbulb size={24} />
                </div>
                <div>
                  <h4 className="feature-title">Our Vision</h4>
                  <p className="feature-desc">To become the industry standard for enterprise technology and digital transformation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content (Stats / Image) */}
          <div className={`about-stats-container ${sectionVisible ? 'animate-fade-left' : 'opacity-0'}`}>
            <div className="about-image-wrapper">
              {/* Abstract / Graphic placeholder instead of a basic stock image */}
              <div className="about-abstract-graphic">
                <div className="abstract-circle c1"></div>
                <div className="abstract-circle c2"></div>
                <Shield size={64} className="abstract-icon" />
              </div>
            </div>
            
            <div className="stats-grid">
              <div className="stat-card">
                <h3 className="stat-number">15+</h3>
                <p className="stat-label">Projects Delivered</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">98%</h3>
                <p className="stat-label">Client Retention</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">24/7</h3>
                <p className="stat-label">Expert Support</p>
              </div>
              <div className="stat-card">
                <h3 className="stat-number">1+</h3>
                <p className="stat-label">Years Experience</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
