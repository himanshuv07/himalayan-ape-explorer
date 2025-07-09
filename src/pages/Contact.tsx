
import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="pt-16">
      <div 
        className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(79, 70, 229, 0.8), rgba(126, 34, 206, 0.8)), url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Ready to start your adventure? Get in touch with us and let's plan your perfect trip together
          </p>
        </div>
      </div>

      <ContactForm />
    </div>
  );
};

export default Contact;
