import { Globe, Smartphone, Cloud, Settings, TrendingUp, PenTool, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  const services = [
    {
      id: "web-dev",
      title: "Website Development",
      desc: "Architecting high-performance, responsive web platforms and custom portals built with modern frameworks to deliver seamless scalability and blazing-fast loading speeds.",
      highlights: ["React, Next.js & Modern Stacks", "SEO & Core Web Vitals Optimized", "Enterprise Grade Security"],
      icon: <Globe size={26} />,
      delay: "0ms"
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      desc: "Engineering world-class native and cross-platform applications for iOS and Android, focusing on fluent user experiences, robust backend integration, and zero crashes.",
      highlights: ["React Native & Flutter Solutions", "Smooth Biometrics & Hardware API", "Real-time Cloud Sync & Push Alert"],
      icon: <Smartphone size={26} />,
      delay: "100ms"
    },
    {
      id: "ui-ux",
      title: "UI / UX Design",
      desc: "Crafting captivating, immersive digital experiences through intuitive design engineering, user behavior research, dynamic micro-interactions, and premium aesthetics.",
      highlights: ["Figma Interactive Prototypes", "Deep User Research & Wireframing", "Modern Design Systems & Design Tokens"],
      icon: <PenTool size={26} />,
      delay: "200ms"
    },
    {
      id: "cloud",
      title: "Cloud Solutions",
      desc: "Modernizing corporate infrastructure with distributed cloud computing, zero-downtime database migrations, microservices, and elastic serverless deployment strategies.",
      highlights: ["AWS, GCP & Azure Architecture", "Auto-Scaling Microservices", "Cost Optimization & Disaster Recovery"],
      icon: <Cloud size={26} />,
      delay: "300ms"
    },
    {
      id: "devops",
      title: "DevOps Services",
      desc: "Automating end-to-end continuous integration and delivery (CI/CD) pipelines, containerization, and infrastructure as code to dramatically accelerate deployment velocity.",
      highlights: ["Docker, Kubernetes & Terraform", "Zero-Downtime Automated CI/CD", "Comprehensive Logs & Monitoring"],
      icon: <Settings size={26} />,
      delay: "400ms"
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      desc: "Data-driven performance campaigns, omnichannel lead generation, SEO dominance, and high-conversion brand strategies designed to consistently multiply ROI.",
      highlights: ["Targeted Omnichannel Campaigns", "SEO Dominance & Organic Traffic", "Advanced Conversion Rate Optimization"],
      icon: <TrendingUp size={26} />,
      delay: "500ms"
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      desc: "Comprehensive 24/7 technical surveillance, security patch updates, proactive server maintenance, and instantaneous Bug Squashing to keep your enterprise running flawlessly.",
      highlights: ["24/7 Dedicated Tech Support", "Proactive Security Vulnerability Patches", "Instant Performance Tuning & Backups"],
      icon: <Wrench size={26} />,
      delay: "600ms"
    }
  ];

  return (
    <section id="services" className="services-section-dark" ref={sectionRef}>
      {/* Decorative Brand Gradient Glows in Background */}
      <div className="services-glow-overlay glow-1"></div>
      <div className="services-glow-overlay glow-2"></div>

      <div className="container relative z-10">
        <div className={`section-header text-center ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <span className="section-badge-gradient">
            <Sparkles size={14} className="badge-sparkle" />
            Our Services
          </span>
          <h2 className="section-title text-white mt-3">Comprehensive Corporate Capabilities</h2>
          <p className="section-subtitle text-gray-300">End-to-end technical mastery and cutting-edge engineering to supercharge your digital evolution.</p>
        </div>

        <div className="services-grid-dark">
          {services.map((service) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`service-card-dark group ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: service.delay, animationFillMode: 'forwards' }}
            >
              <div className="service-card-top">
                <div className="service-icon-dark bg-vebaura-gradient">
                  {service.icon}
                </div>
              </div>

              <h3 className="service-title-dark">{service.title}</h3>
              <p className="service-desc-dark">{service.desc}</p>
              
              <div className="service-highlights-box">
                {service.highlights.map((item, idx) => (
                  <div key={idx} className="service-highlight-item">
                    <span className="highlight-bullet"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="service-btn-brand-gradient">
                <span>Request details</span> <ArrowRight size={16} className="btn-arrow" />
              </a>

              <div className="service-card-glow-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
