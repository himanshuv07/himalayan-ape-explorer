import React from 'react';
import logo from '../assets/logo.png';
import { Phone, Mail } from 'lucide-react';
import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={logo}
                alt="Himalayan Ape"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted travel companion for unforgettable adventures across the Himalayas and beyond.
              Experience the world with "The Real Survivor".
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'International', path: '/international' },
                { name: 'Domestic', path: '/domestic' },
                { name: 'Religious', path: '/religious' },
                { name: 'Contact', path: '/contact' },
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <span className="text-gray-300">+91 7909674407</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <span className="text-gray-300">himalayanape@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/himalayanape/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-500 transition"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/himalayanape/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-500 transition"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://www.youtube.com/@himalayanape01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              © 2025 Himalayan Ape. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
