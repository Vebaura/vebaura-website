import { Globe, Smartphone, Cloud, Settings, TrendingUp, PenTool, Wrench, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  const services = [
    {
      id: "service-web-dev",
      title: "Website Development",
      desc: "Architecting high-performance, responsive web platforms and custom portals built with modern frameworks to deliver seamless scalability and blazing-fast loading speeds.",
      highlights: ["React, Next.js & Modern Stacks", "SEO & Core Web Vitals Optimized", "Enterprise Grade Security"],
      icon: <Globe size={26} />,
      delay: "0ms"
    },
    {
      id: "service-web-apps",
      title: "Web & Mobile Applications",
      desc: "Engineering world-class custom progressive web applications and native mobile software focusing on fluent experiences, robust APIs, and zero crashes.",
      highlights: ["Custom Web Apps & Portals", "React Native & Flutter iOS/Android", "Real-time Cloud Sync & Push Alerts"],
      icon: <Smartphone size={26} />,
      delay: "100ms"
    },
    {
      id: "service-ecommerce",
      title: "E-Commerce Solutions",
      desc: "Developing high-conversion, scalable online retail platforms and custom marketplaces engineered with secure payment gateways and instantaneous inventory syncing.",
      highlights: ["High-Conversion Online Stores", "Multi-Currency & Secure Gateways", "Automated Order Tracking Engine"],
      icon: <TrendingUp size={26} />,
      delay: "200ms"
    },
    {
      id: "service-billing",
      title: "Billing & ERP Systems",
      desc: "Custom enterprise accounting engines and smart Point of Sale billing architectures designed for rapid checkout, real-time analytics, and total tax compliance.",
      highlights: ["Automated GST & Tax Invoicing", "Real-time Multi-branch Inventory", "Customizable Financial Dashboards"],
      icon: <Settings size={26} />,
      delay: "300ms"
    },
    {
      id: "service-cloud",
      title: "Cloud & AWS Solutions",
      desc: "Modernizing corporate infrastructure with distributed cloud computing on AWS, zero-downtime migrations, microservices, and elastic serverless deployment.",
      highlights: ["AWS, GCP & Azure Architecture", "Auto-Scaling Microservices", "Disaster Recovery & Security"],
      icon: <Cloud size={26} />,
      delay: "400ms"
    },
    {
      id: "service-marketing",
      title: "Digital Marketing & SEO",
      desc: "Data-driven performance marketing campaigns, omnichannel brand expansion, SEO dominance, and conversion optimization designed to consistently multiply ROI.",
      highlights: ["Targeted Omnichannel Campaigns", "SEO Dominance & Organic Lead Gen", "Advanced Conversion Rate Optimization"],
      icon: <TrendingUp size={26} />,
      delay: "500ms"
    },
    {
      id: "service-uiux",
      title: "UI / UX Design",
      desc: "Crafting captivating digital user experiences through deep user behavior research, dynamic micro-interactions, intuitive wireframing, and premium aesthetics.",
      highlights: ["Figma Interactive Prototypes", "Modern Design Systems & Tokens", "High-Engagement UI Engineering"],
      icon: <PenTool size={26} />,
      delay: "600ms"
    },
    {
      id: "service-devops",
      title: "DevOps & 24/7 Support",
      desc: "Automating end-to-end continuous integration and delivery pipelines alongside comprehensive 24/7 technical surveillance, security patch updates, and maintenance.",
      highlights: ["Zero-Downtime Automated CI/CD", "Docker, Kubernetes & Terraform", "24/7 Dedicated Technical Surveillance"],
      icon: <Wrench size={26} />,
      delay: "700ms"
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
