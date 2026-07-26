import { Store, Pill, ShoppingCart, Utensils, Truck, Factory, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Solutions.css';

const Solutions = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  const solutions = [
    {
      id: "retail",
      title: "Retail",
      desc: "Complete operational control for retail outlets, multi-brand chains, and boutique stores.",
      icon: <Store size={28} />,
      delay: "0ms"
    },
    {
      id: "pharmacy",
      title: "Pharmacy",
      desc: "Comprehensive batch tracking, automatic medication expiry alerts, and precision prescription billing.",
      icon: <Pill size={28} />,
      delay: "100ms"
    },
    {
      id: "supermarket",
      title: "Supermarket",
      desc: "High-speed multi-counter billing and extensive automated inventory replenishment tracking.",
      icon: <ShoppingCart size={28} />,
      delay: "200ms"
    },
    {
      id: "restaurant",
      title: "Restaurant",
      desc: "Streamline dine-in orders, instant kitchen order tokens (KOT), and intelligent table management.",
      icon: <Utensils size={28} />,
      delay: "300ms"
    },
    {
      id: "wholesale",
      title: "Wholesale",
      desc: "Bulk inventory logistics, customized B2B pricing tier management, and credit tracking.",
      icon: <Truck size={28} />,
      delay: "400ms"
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      desc: "Track raw materials, monitor production line pipelines, and optimize factory throughput.",
      icon: <Factory size={28} />,
      delay: "500ms"
    }
  ];

  return (
    <section id="solutions" className="solutions-section" ref={sectionRef}>
      {/* Abstract Background Shapes */}
      <div className="solutions-bg-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container relative z-10">
        <div className={`section-header text-center ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Solutions for Every Business</h2>
          <p className="section-subtitle">Tailor-made software architectures engineered for industry-specific operational excellence.</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution) => (
            <div 
              key={solution.id} 
              id={solution.id}
              className={`solution-card group ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}
              style={{ animationDelay: solution.delay, animationFillMode: 'forwards' }}
            >
              <div className="solution-icon-wrapper bg-gradient-purple">
                {solution.icon}
              </div>
              <h3 className="solution-title">{solution.title}</h3>
              <p className="solution-desc">{solution.desc}</p>
              
              <a href="#contact" className="solution-link">
                <span>Explore {solution.title}</span>
                <ArrowRight size={16} className="solution-arrow" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
