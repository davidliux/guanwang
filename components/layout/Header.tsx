'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // 检测当前活动板块
      const sections = ['services', 'membership', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
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
      isScrolled ? 'bg-dark-wash/95 backdrop-blur-lg shadow-2xl border-b border-dark-charcoal' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="/"
            className="text-accent-banana font-bold text-2xl cursor-pointer hover:text-accent-hover transition-colors"
          >
            NAECLA
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center">
            {pathname === '/' ? (
              <button
                onClick={() => scrollToSection('services')}
                className={`transition-colors font-medium ${
                  activeSection === 'services' 
                    ? 'text-accent-banana font-semibold' 
                    : 'text-gray-300 hover:text-accent-banana'
                }`}
              >
                Services
              </button>
            ) : (
              <div className="relative"
                onMouseEnter={() => setShowServicesDropdown(true)}
                onMouseLeave={() => setShowServicesDropdown(false)}
              >
                <Link 
                  href="/#services" 
                  className="flex items-center gap-1 transition-colors font-medium text-gray-300 hover:text-accent-banana"
                >
                  Services
                  <ChevronDown size={16} />
                </Link>
                {showServicesDropdown && (
                  <div className="absolute top-full left-0 mt-2 bg-dark-coal shadow-lg rounded-lg py-2 min-w-[160px] border border-dark-charcoal">
                    <Link href="/canada" className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-accent-banana transition-colors">
                      Canada Logistics
                    </Link>
                    <Link href="/usa" className="block px-4 py-2 text-gray-300 hover:bg-white/10 hover:text-accent-banana transition-colors">
                      USA Logistics
                    </Link>
                  </div>
                )}
              </div>
            )}
            
            <Link 
              href="/canada" 
              className={`transition-colors font-medium ${
                pathname === '/canada' 
                  ? 'text-accent-banana font-semibold' 
                  : 'text-gray-300 hover:text-accent-banana'
              }`}
            >
              Canada
            </Link>
            
            <Link 
              href="/usa" 
              className={`transition-colors font-medium ${
                pathname === '/usa' 
                  ? 'text-accent-banana font-semibold' 
                  : 'text-gray-300 hover:text-accent-banana'
              }`}
            >
              USA
            </Link>
            
            {pathname === '/' ? (
              <>
                <button
                  onClick={() => scrollToSection('membership')}
                  className={`transition-colors font-medium ${
                    activeSection === 'membership' 
                      ? 'text-accent-banana font-semibold' 
                      : 'text-gray-300 hover:text-accent-banana'
                  }`}
                >
                  Membership
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`transition-colors font-medium ${
                    activeSection === 'contact' 
                      ? 'text-accent-banana font-semibold' 
                      : 'text-gray-300 hover:text-accent-banana'
                  }`}
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link 
                  href="/#membership" 
                  className="transition-colors font-medium text-gray-300 hover:text-accent-banana"
                >
                  Membership
                </Link>
                <Link 
                  href="/#contact" 
                  className="transition-colors font-medium text-gray-300 hover:text-accent-banana"
                >
                  Contact
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-accent-banana p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-dark-charcoal">
            {pathname === '/' ? (
              <button
                onClick={() => scrollToSection('services')}
                className={`block w-full text-left py-2 transition-colors ${
                  activeSection === 'services'
                    ? 'text-accent-banana font-semibold'
                    : 'text-gray-300 hover:text-accent-banana'
                }`}
              >
                Services
              </button>
            ) : (
              <Link
                href="/#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-2 transition-colors text-gray-300 hover:text-accent-banana"
              >
                Services
              </Link>
            )}
            
            <Link
              href="/canada"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${
                pathname === '/canada'
                  ? 'text-accent-banana font-semibold'
                  : 'text-gray-300 hover:text-accent-banana'
              }`}
            >
              Canada
            </Link>
            
            <Link
              href="/usa"
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full text-left py-2 transition-colors ${
                pathname === '/usa'
                  ? 'text-accent-banana font-semibold'
                  : 'text-gray-300 hover:text-accent-banana'
              }`}
            >
              USA
            </Link>
            
            {pathname === '/' ? (
              <>
                <button
                  onClick={() => scrollToSection('membership')}
                  className={`block w-full text-left py-2 transition-colors ${
                    activeSection === 'membership'
                      ? 'text-accent-banana font-semibold'
                      : 'text-gray-300 hover:text-accent-banana'
                  }`}
                >
                  Membership
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`block w-full text-left py-2 transition-colors ${
                    activeSection === 'contact'
                      ? 'text-accent-banana font-semibold'
                      : 'text-gray-300 hover:text-accent-banana'
                  }`}
                >
                  Contact
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/#membership"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-2 transition-colors text-gray-300 hover:text-accent-banana"
                >
                  Membership
                </Link>
                <Link
                  href="/#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full text-left py-2 transition-colors text-gray-300 hover:text-accent-banana"
                >
                  Contact
                </Link>
              </>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}