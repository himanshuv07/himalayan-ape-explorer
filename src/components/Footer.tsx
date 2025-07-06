
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://source.unsplash.com/100x60/?logo,mountain"
                alt="Himalayan Ape"
                className="h-10 w-auto rounded-lg"
              />
              <span className="font-bold text-xl">Himalayan Ape</span>
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
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/international" className="text-gray-300 hover:text-white transition-colors duration-200">International</a></li>
              <li><a href="/domestic" className="text-gray-300 hover:text-white transition-colors duration-200">Domestic</a></li>
              <li><a href="/religious" className="text-gray-300 hover:text-white transition-colors duration-200">Religious</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
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

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a
                href="https://www.instagram.com/himalayanape/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
              >
                📷 Instagram
              </a>
              <a
                href="https://www.facebook.com/himalayanape/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
              >
                📘 Facebook
              </a>
              <a
                href="https://www.youtube.com/@himalayanape01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-400 transition-colors duration-200"
              >
                ▶️ YouTube
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © 2024 Himalayan Ape. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
