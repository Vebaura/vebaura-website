import { Receipt, Archive, CreditCard, Users, Smartphone, Code, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Products.css';

const Products = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  const products = [
    {
      id: "billing",
      title: "Vebaura Billing",
      desc: "An ultra-fast, modern billing and accounting engine engineered for zero-latency checkout and comprehensive financial precision.",
      features: [
        "Automated Tax & GST Calculations",
        "Instant Professional Invoice Generation",
        "Multi-branch & Multi-user Access Control"
      ],
      icon: <Receipt size={26} />,
      delay: "0ms"
    },
    {
      id: "inventory",
      title: "Inventory Management",
      desc: "Real-time stock tracking and warehouse intelligence that eliminates stockouts, automates re-ordering, and optimizes supply chains.",
      features: [
        "Real-time Batch & Expiry Date Tracking",
        "Automated Low-Stock Alerts & Purchase Orders",
        "Multi-warehouse Transfer Management"
      ],
      icon: <Archive size={26} />,
      delay: "100ms"
    },
    {
      id: "pos",
      title: "POS System",
      desc: "A responsive, high-throughput Point of Sale system built for high-traffic retail environments with seamless hardware integration.",
      features: [
        "Offline Mode with Automatic Cloud Sync",
        "Barcode Scanner & Thermal Printer Ready",
        "Split Billing & Custom Discount Engine"
      ],
      icon: <CreditCard size={26} />,
      delay: "200ms"
    },
    {
      id: "crm",
      title: "CRM Software",
      desc: "Centralize your customer relationships, sales pipelines, and automated lead nurturing to drive conversion rates and retention.",
      features: [
        "360-degree Customer Timeline & Profiles",
        "Automated Follow-ups & Pipeline Kanban",
        "WhatsApp & Email Communication Integration"
      ],
      icon: <Users size={26} />,
      delay: "300ms"
    },
    {
      id: "mobile-apps",
      title: "Mobile Applications",
      desc: "Custom-branded, enterprise-grade mobile apps for iOS and Android that empower your field team, customers, and operations.",
      features: [
        "Native Performance for iOS & Android",
        "Push Notifications & Live Order Tracking",
        "Secure Biometric & Role-based Login"
      ],
      icon: <Smartphone size={26} />,
      delay: "400ms"
    },
    {
      id: "custom-software",
      title: "Custom Software",
      desc: "Bespoke digital architecture tailored specifically to your enterprise workflows, legacy integrations, and complex business logic.",
      features: [
        "Scalable Cloud-Native Architecture",
        "Custom API & Third-Party ERP Integration",
        "Enterprise-Grade Data Security & Compliance"
      ],
      icon: <Code size={26} />,
      delay: "500ms"
    }
  ];

  return (
    <section id="products" className="products-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header text-center ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Powerful software enterprise suites engineered to streamline and elevate your business operations.</p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <div 
              key={product.id} 
              id={product.id}
              className={`product-card group ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: product.delay, animationFillMode: 'forwards' }}
            >
              <div className="product-card-header">
                <div className="product-icon-wrapper bg-vebaura-gradient">
                  <div className="product-icon">
                    {product.icon}
                  </div>
                </div>
                <h3 className="product-title">{product.title}</h3>
              </div>
              
              <p className="product-desc">{product.desc}</p>
              
              <div className="product-features-list">
                {product.features.map((feature, i) => (
                  <div key={i} className="product-feature-item">
                    <CheckCircle2 size={16} className="feature-check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="product-card-border-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
