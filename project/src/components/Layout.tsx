import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sprout, Flower2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

// Cartoon-style icon wrapper component
const CartoonIcon = ({ children, className = "" }) => (
  <div className={`transform hover:scale-110 transition-transform duration-300 ${className}`}>
    {children}
  </div>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-[#fafbfa] flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <CartoonIcon className="bg-rose-100 p-3 rounded-2xl">
                <Sprout className="w-10 h-10 text-emerald-500 stroke-[1.5]" />
              </CartoonIcon>
              <span className="text-2xl font-bold text-[#98677a]">HopeBride</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-12">
              <Link to="/about" className={`text-[#98677a] hover:text-emerald-500 transition-colors font-medium ${location.pathname === '/about' ? 'text-emerald-500' : ''}`}>About Us</Link>
              <Link to="/donate" className={`text-[#98677a] hover:text-emerald-500 transition-colors font-medium ${location.pathname === '/donate' ? 'text-emerald-500' : ''}`}>Donate</Link>
              <Link to="/get-involved" className={`text-[#98677a] hover:text-emerald-500 transition-colors font-medium ${location.pathname === '/get-involved' ? 'text-emerald-500' : ''}`}>Get Involved</Link>
              <Link to="/services" className={`text-[#98677a] hover:text-emerald-500 transition-colors font-medium ${location.pathname === '/services' ? 'text-emerald-500' : ''}`}>Services</Link>
              <Link to="/donate" className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                Donate
              </Link>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden text-[#98677a]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-emerald-50">
            <div className="container mx-auto px-6 py-6 space-y-6">
              <Link to="/about" className="block text-[#98677a] hover:text-emerald-500 transition-colors font-medium">About Us</Link>
              <Link to="/donate" className="block text-[#98677a] hover:text-emerald-500 transition-colors font-medium">Donate</Link>
              <Link to="/get-involved" className="block text-[#98677a] hover:text-emerald-500 transition-colors font-medium">Get Involved</Link>
              <Link to="/services" className="block text-[#98677a] hover:text-emerald-500 transition-colors font-medium">Services</Link>
              <Link to="/donate" className="block w-full bg-rose-400 hover:bg-rose-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                Donate
              </Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow pt-24">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <Link to="/" className="flex items-center gap-3">
                <CartoonIcon className="bg-rose-100 p-2 rounded-xl">
                  <Flower2 className="w-8 h-8 text-emerald-500 stroke-[1.5]" />
                </CartoonIcon>
                <span className="text-2xl font-bold text-white">HopeBride</span>
              </Link>
              <p className="text-gray-400">
                Dedicated to environmental conservation and sustainable development through 
                innovative projects and community engagement.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li><Link to="/about" className="text-gray-400 hover:text-rose-400 transition-colors">About Us</Link></li>
                <li><Link to="/donate" className="text-gray-400 hover:text-rose-400 transition-colors">Donate</Link></li>
                <li><Link to="/get-involved" className="text-gray-400 hover:text-rose-400 transition-colors">Get Involved</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-rose-400 transition-colors">Services</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-6">Resources</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">Blog</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">News</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">Events</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-6">Legal</h3>
              <ul className="space-y-4">
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">Terms of Service</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">Cookie Policy</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-rose-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400">
                © {new Date().getFullYear()} HopeBride. All rights reserved.
              </div>
              <div className="flex gap-6">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <CartoonIcon key={index}>
                    <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  </CartoonIcon>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;