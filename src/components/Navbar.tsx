import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10 || location.pathname !== '/');
    };

    handleScroll();

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
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const destinationLinks = [
    { name: 'International', path: '/international' },
    { name: 'Domestic', path: '/domestic' },
    { name: 'Religious', path: '/religious' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={handleLogoClick} className="flex items-center space-x-2">
            <img src={logo} alt="Himalayan Ape" className="h-16 w-auto object-contain" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Home */}
            <button
              onClick={handleHomeClick}
              className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${location.pathname === '/'
                ? isScrolled
                  ? 'text-gray-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                  : 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                : isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/80 hover:text-white'
                }`}
            >
              Home
            </button>

            {/* Destinations Dropdown */}
            <div
              className="relative inline-block"
              onMouseEnter={() => {
                if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                setIsDestinationsOpen(true);
              }}
              onMouseLeave={() => {
                dropdownTimeoutRef.current = setTimeout(() => {
                  setIsDestinationsOpen(false);
                }, 500);
              }}
            >
              <div
                className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg flex items-center space-x-1 cursor-pointer ${destinationLinks.some(dest => location.pathname === dest.path)
                  ? isScrolled
                    ? 'text-gray-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                    : 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                <span>Destinations</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${isDestinationsOpen ? 'rotate-180' : ''}`} />
              </div>

              {/* Dropdown Content */}
              {isDestinationsOpen && (
                <div
                  className="absolute left-0 top-full mt-2 w-44 bg-white border shadow-lg rounded-lg z-50 animate-fade-in-down"
                  onMouseEnter={() => {
                    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
                  }}
                  onMouseLeave={() => {
                    dropdownTimeoutRef.current = setTimeout(() => {
                      setIsDestinationsOpen(false);
                    }, 2000);
                  }}
                >
                  {destinationLinks.map((dest) => (
                    <Link
                      key={dest.name}
                      to={dest.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
                    >
                      {dest.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Navigation Links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg ${location.pathname === link.path
                  ? isScrolled
                    ? 'text-gray-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                    : 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                  : isScrolled
                    ? 'text-gray-700 hover:text-gray-900'
                    : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md transition-colors duration-300 ${isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg rounded-lg mt-2 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  handleHomeClick();
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === '/'
                  ? 'text-gray-700 border-b-2 border-gray-400 font-bold'
                  : 'text-gray-700 hover:text-white hover:bg-black'
                  }`}
              >
                Home
              </button>

              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === link.path
                    ? 'text-gray-700 border-b-2 border-gray-400 font-bold'
                    : 'text-gray-700 hover:text-white hover:bg-black'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Destinations */}
              <div className="border-t border-gray-200 pt-2">
                <p className="px-3 py-2 text-sm font-semibold text-gray-500">Destinations</p>
                {destinationLinks.map((dest) => (
                  <Link
                    key={dest.name}
                    to={dest.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${location.pathname === dest.path
                      ? 'text-gray-700 border-b-2 border-gray-400 font-bold'
                      : 'text-gray-700 hover:text-white hover:bg-black'
                      }`}
                  >
                    {dest.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
