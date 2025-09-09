'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="/"
            className="text-white font-bold text-2xl cursor-pointer hover:opacity-90 transition-opacity"
          >
            NAECLA
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('membership')}
              className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors"
            >
              Membership
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white py-2 transition-colors"
            >
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}