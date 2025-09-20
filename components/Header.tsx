
import React, { useState, useEffect } from 'react';
import type { NavLink } from '../types';

interface HeaderProps {
  navLinks: NavLink[];
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ navLinks, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const NavLinks: React.FC<{ mobile?: boolean }> = ({ mobile = false }) => (
    <ul className={`flex ${mobile ? 'flex-col space-y-6 text-2xl text-center' : 'flex-row space-x-8 text-sm'}`}>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={`#${link.id}`}
            onClick={() => isMenuOpen && toggleMenu()}
            className={`font-semibold tracking-wider uppercase transition-colors duration-300 ${
              activeSection === link.id
                ? 'text-accent'
                : 'text-text-secondary hover:text-text-primary'
            }`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-4 focus:left-4 focus:px-4 focus:py-2 focus:bg-surface focus:text-accent focus:rounded-lg">
        Skip to main content
      </a>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#me" className="text-xl font-extrabold text-text-primary group">
              [Your Name] <span className="text-accent group-hover:animate-pulse transition-transform duration-300 inline-block">.</span>
            </a>
            <nav className="hidden md:block">
              <NavLinks />
            </nav>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-text-primary focus:outline-none focus:ring-2 focus:ring-accent rounded">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-base/95 backdrop-blur-lg flex items-center justify-center transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <nav>
          <NavLinks mobile />
        </nav>
      </div>
    </>
  );
};

export default Header;
