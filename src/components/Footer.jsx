import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        
        <div className="footer-box brand-box">
          <h2>VEBAURA</h2>
          <p>
            Modern digital solutions for startups and enterprises. We build the future of software.
          </p>
        </div>

        <div className="footer-box">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Website Development</a></li>
            <li><a href="#services">Billing Software</a></li>
            <li><a href="#services">SaaS Solutions</a></li>
            <li><a href="#services">CRM Software</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box contact-box">
          <h3>Get in Touch</h3>
          <p>Email: vebaura.tech@gmail.com</p>
          <p>PB-3/5, Police Quarters, Vengadamangalam, TN - Chennai 600127.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Vebaura Technologies. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
