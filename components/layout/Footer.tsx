import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white font-bold text-xl mb-4">NAECLA</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              North American eCommerce Logistics Alliance - Your trusted partner for cross-border logistics solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#membership" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Membership
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="text-gray-400 mt-0.5" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">info@naecla.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-gray-400 mt-0.5" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">+1 (888) NAECLA-1</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-gray-400 mt-0.5" size={16} />
                <div>
                  <p className="text-gray-400 text-sm">
                    Toronto, Canada<br />
                    New York, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} NAECLA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}