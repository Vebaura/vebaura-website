import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

const Contact = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal();

  return (
    <section id="contact" className="contact-section" ref={sectionRef}>
      <div className="container">
        <div className={`section-header text-center ${sectionVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">We would love to hear from you. Reach out to our enterprise team today.</p>
        </div>

        <div className="contact-split-layout">
          {/* Left - Contact Form */}
          <div className={`contact-form-card ${sectionVisible ? 'animate-fade-right' : 'opacity-0'}`}>
            <h3 className="form-title">Send us a message</h3>
            <form className="modern-form">
              <div className="form-group">
                <input type="text" id="name" required placeholder=" " />
                <label htmlFor="name">Full Name</label>
              </div>
              <div className="form-group">
                <input type="email" id="email" required placeholder=" " />
                <label htmlFor="email">Email Address</label>
              </div>
              <div className="form-group">
                <input type="text" id="subject" required placeholder=" " />
                <label htmlFor="subject">Subject</label>
              </div>
              <div className="form-group">
                <textarea id="message" rows="4" required placeholder=" "></textarea>
                <label htmlFor="message">Your Message</label>
              </div>
              <button type="submit" className="btn-submit">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className={`contact-info-wrapper ${sectionVisible ? 'animate-fade-left' : 'opacity-0'}`}>
            <div className="contact-info-grid">
              <div className="contact-info-card">
                <div className="contact-icon-teal"><MapPin size={20} /></div>
                <div>
                  <h4 className="info-title">Office Address</h4>
                  <p className="info-text">123 Tech Park, Innovation Way<br/>Chennai, TN 600001</p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon-teal"><Phone size={20} /></div>
                <div>
                  <h4 className="info-title">Phone Number</h4>
                  <p className="info-text">+91 98949 15998<br/>+91 12345 67890</p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon-teal"><Mail size={20} /></div>
                <div>
                  <h4 className="info-title">Email Address</h4>
                  <p className="info-text">contact@vebaura.com<br/>support@vebaura.com</p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-icon-teal"><Clock size={20} /></div>
                <div>
                  <h4 className="info-title">Business Hours</h4>
                  <p className="info-text">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="map-placeholder">
              <div className="map-overlay">
                <MapPin size={32} className="map-pin-icon" />
                <p>Google Maps Integration Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
