import { useState, useEffect } from 'react';
import { navLinks, companyInfo } from '../../data/content';
import logoImg from '/unnamed.jpg';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={isScrolled ? 'scrolled' : ''}>
      <div className="logo">
        <img src={logoImg} alt="Logo" className="logo-icon" />
        {companyInfo.name}
      </div>
      
      <button 
        className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} onClick={handleLinkClick}>
              {link.label}
            </a>
          </li>
        ))}
        <li>
          <a 
            href={companyInfo.shopeeUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="nav-shopee"
          >
            🛒 線上商店
          </a>
        </li>
      </ul>
    </nav>
  );
}
