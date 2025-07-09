
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10 || location.pathname !== '/');
    };
  
    handleScroll(); // Trigger once on page load / route change
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location]);

  const handleLogoClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };
  
  const navLinks = [
    { name: 'Home', path: '/', onClick: handleHomeClick },
    { name: 'International', path: '/international' },
    { name: 'Domestic', path: '/domestic' },
    { name: 'Religious', path: '/religious' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Himalayan Ape"
              className="h-16 w-auto object-contain "
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              link.onClick ? (
                <button
                  key={link.name}
                  onClick={link.onClick}
                  className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-white bg-black hover:bg-gray-800 shadow-lg'
                      : isScrolled
                      ? 'text-gray-700 hover:text-white hover:bg-black hover:shadow-md'
                      : 'text-white/80 hover:text-black hover:bg-white hover:shadow-md'
                  }`}                
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-white bg-black hover:bg-gray-800 shadow-lg'
                      : isScrolled
                      ? 'text-gray-700 hover:text-white hover:bg-black hover:shadow-md'
                      : 'text-white/80 hover:text-black hover:bg-white hover:shadow-md'
                  }`}                
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.onClick ? (
                  <button
                    key={link.name}
                    onClick={() => {
                      link.onClick();
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-white bg-black font-bold'
                        : 'text-gray-700 hover:text-white hover:bg-black'
                    }`}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === link.path
                        ? 'text-white bg-black font-bold'
                        : 'text-gray-700 hover:text-white hover:bg-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
