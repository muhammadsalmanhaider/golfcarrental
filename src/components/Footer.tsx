import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        {/* Our Branches */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">OUR BRANCHES</h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-8">
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">BUSINESS BAY PARK</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">JUMEIRA BEACH</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">BURJ AL ARAB</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">VIDA HOTELS</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">SOFITEL</span>
            </div>
            <div className="h-16 w-32 bg-gray-100 rounded flex items-center justify-center">
              <span className="text-xs font-bold text-gray-600">PALACE DOWNTOWN</span>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a href="#" className="text-gray-600 hover:text-yellow-600">Home</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600">About Us</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600">Blogs</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600">FAQ</a>
          <a href="#" className="text-gray-600 hover:text-yellow-600">Contact Us</a>
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