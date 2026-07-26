import { BookOpen, FileText, HelpCircle, MessageCircle, Download, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Resources.css';

const Resources = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  const resources = [
    {
      id: "blog",
      title: "Blog",
      desc: "In-depth technological trend analyses, software architectural guides, and industry business intelligence.",
      icon: <BookOpen size={30} />,
      delay: "0ms"
    },
    {
      id: "case-studies",
      title: "Case Studies",
      desc: "Real-world transformation stories and verifiable ROI metrics from enterprise clients powered by Vebaura.",
      icon: <FileText size={30} />,
      delay: "100ms"
    },
    {
      id: "help-center",
      title: "Help Center",
      desc: "Step-by-step product walkthroughs, configuration manuals, and operational video tutorials.",
      icon: <HelpCircle size={30} />,
      delay: "200ms"
    },
    {
      id: "faqs",
      title: "FAQs",
      desc: "Quick answers regarding deployment security, cloud compliance, SLA terms, and billing cycles.",
      icon: <MessageCircle size={30} />,
      delay: "300ms"
    },
    {
      id: "downloads",
      title: "Downloads",
      desc: "Access client software binaries, developer API SDKs, technical documentation, and presentation decks.",
      icon: <Download size={30} />,
      delay: "400ms"
    }
  ];

  return (
    <section id="resources" className="resources-section" ref={sectionRef}>
      <div className="container relative z-10">
        <div className={`section-header text-center ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Resources</h2>
          <p className="section-subtitle">Everything you need to successfully evaluate, integrate, and master Vebaura enterprise platforms.</p>
        </div>

        <div className="resources-grid">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              id={resource.id}
              className={`resource-card group ${sectionVisible ? 'animate-scale' : 'opacity-0'}`}
              style={{ animationDelay: resource.delay, animationFillMode: 'forwards' }}
            >
              <div className="resource-icon bg-gradient-green">
                {resource.icon}
              </div>
              <h3 className="resource-title">{resource.title}</h3>
              <p className="resource-desc">{resource.desc}</p>
              <a href="#contact" className="resource-btn">
                Access Resource <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
