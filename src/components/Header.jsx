import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOverDark, setIsOverDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 50);

      const headerCheckPos = currentScroll + 70; // Position check for sticky navbar
      const allSections = document.querySelectorAll('section, footer');
      let foundDark = true;

      allSections.forEach((sec) => {
        const top = sec.offsetTop;
        const bottom = top + sec.offsetHeight;
        if (headerCheckPos >= top && headerCheckPos < bottom) {
          const isDark = sec.id === 'home' || sec.id === 'services' || sec.classList.contains('services-section-dark');
          foundDark = isDark;
        }
      });

      setIsOverDark(foundDark);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''} ${isOverDark ? 'over-dark-bg' : 'over-light-bg'}`}>
      <div className="container header-container">
        
        {/* Logo Section */}
        <div className="header-logo-wrapper">
          <a href="#home" className="logo">
            <img src="assets/images/logo.png" alt="Vebaura Logo" className="logo-img" />
          </a>
        </div>
        
        {/* Desktop Navigation Centered */}
        <nav className="nav-links-desktop">
          <ul className="nav-list">
            <li>
              <a href="#home" className="nav-item group">
                Home
                <span className="nav-item-underline gradient-brand"></span>
              </a>
            </li>
            <li>
              <a href="#products" className="nav-item group">
                Products
                <span className="nav-item-underline gradient-brand"></span>
              </a>
            </li>
            <li>
              <a href="#solutions" className="nav-item group">
                Solutions
                <span className="nav-item-underline gradient-brand"></span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-item group">
                Services
                <span className="nav-item-underline gradient-brand"></span>
              </a>
            </li>
            <li>
              <a href="#resources" className="nav-item group">
                Resources
                <span className="nav-item-underline gradient-brand"></span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-item group">
                About Us
                <span className="nav-item-underline gradient-brand"></span>
              </a>
            </li>
          </ul>
        </nav>

        {/* Call to Actions on Right */}
        <div className="nav-actions hidden-mobile">
          <a href="https://wa.me/919894915998" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
            <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
            WhatsApp
          </a>
          <a href="#contact" className="btn-get-in-touch group">
            Get in Touch
            <ArrowUpRight className="nav-arrow-right" size={16} />
          </a>
        </div>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <Menu size={24} color="#fff" />
        </button>
      </div>
      
      {/* Mobile Menu Dropdown */}
      <div className={`mobile-dropdown ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a></li>
          <li><a href="#solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a></li>
          <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a></li>
          <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
          <li className="mobile-actions">
             <a href="#contact" className="btn-get-in-touch w-full flex-center" onClick={() => setMobileMenuOpen(false)}>Get in Touch</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
