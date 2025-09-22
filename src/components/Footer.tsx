import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="text-gray-600 hover:text-red-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-red-600">About Us</a>
          <a href="#" className="text-gray-600 hover:text-red-600">Blogs</a>
          <a href="#" className="text-gray-600 hover:text-red-600">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-red-600">Contact Us</a>
        </div>

        {/* Contact Info */}
        <div className="text-center text-gray-600 text-sm mb-6">
          <p>📧 info@luxurycarrental.ae</p>
          <p className="mt-2">📞 +971501234567</p>
          <p className="mt-2">📍 Business Bay Dubai - Al Khaleej Rd - Dubai, UAE</p>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-6 text-center text-gray-500 text-xs">
          <p>© 2024 - All Rights are Reserved - Copyright Luxury Car Rental in Dubai Search Boy</p>
          <p className="mt-1">Privacy Policy - Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;