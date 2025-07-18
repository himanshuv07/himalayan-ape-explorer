
import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const destinationLinks = [
    { name: 'International', path: '/international' },
    { name: 'Domestic', path: '/domestic' },
    { name: 'Religious', path: '/religious' },
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
                      ? isScrolled
                        ? 'text-gray-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                        : 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                      : isScrolled
                      ? 'text-gray-700 hover:text-gray-900'
                      : 'text-white/80 hover:text-white'
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
              )
            ))}
            
            {/* Destinations Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={`text-sm font-medium transition-all duration-300 relative px-3 py-2 rounded-lg flex items-center space-x-1 ${
                destinationLinks.some(dest => location.pathname === dest.path)
                  ? isScrolled
                    ? 'text-gray-700 after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                    : 'text-white after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gray-400'
                  : isScrolled
                  ? 'text-gray-700 hover:text-gray-900'
                  : 'text-white/80 hover:text-white'
              }`}>
                <span>Destinations</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white shadow-lg border rounded-lg">
                {destinationLinks.map((dest) => (
                  <DropdownMenuItem key={dest.name} asChild>
                    <Link
                      to={dest.path}
                      className="block w-full px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    >
                      {dest.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
                        ? 'text-gray-700 border-b-2 border-gray-400 font-bold'
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
                        ? 'text-gray-700 border-b-2 border-gray-400 font-bold'
                        : 'text-gray-700 hover:text-white hover:bg-black'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              
              {/* Mobile Destinations */}
              <div className="border-t border-gray-200 pt-2">
                <p className="px-3 py-2 text-sm font-semibold text-gray-500">Destinations</p>
                {destinationLinks.map((dest) => (
                  <Link
                    key={dest.name}
                    to={dest.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-6 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      location.pathname === dest.path
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
