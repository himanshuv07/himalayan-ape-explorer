
import React from 'react';
import ContactForm from '../components/ContactForm';
const Contact = () => {
  return (
    <div className="pt-16">
      <div
        className="relative text-white py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to start your adventure? Get in touch with us and let's plan your perfect trip together
          </p>
        </div>
      </div>
      <ContactForm />
    </div>
  );
};
export default Contact;
