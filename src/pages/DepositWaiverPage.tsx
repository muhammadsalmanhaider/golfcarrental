import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaShieldAlt, FaCheckCircle, FaCreditCard, FaHandshake } from 'react-icons/fa';

const DepositWaiverPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <FaShieldAlt className="text-6xl text-yellow-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ZERO DEPOSIT POLICY</h1>
          <p className="text-xl text-gray-600">
            Rent luxury cars in Dubai without paying any cash deposit
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is Our Zero Deposit Policy?</h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our revolutionary zero deposit policy means you can rent any luxury or sports car from our fleet 
            without paying a traditional cash deposit. This policy is designed to make luxury car rentals 
            more accessible and convenient for our customers while maintaining the highest standards of service.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaCheckCircle className="text-green-500 mr-3" />
                How It Works
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  No cash deposit required upfront
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Credit card authorization for security
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Transparent pricing with no hidden fees
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Immediate vehicle availability
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <FaCreditCard className="text-blue-500 mr-3" />
                Requirements
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Valid credit card (Visa/Mastercard)
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Valid driving license
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Passport and visa copy
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-600 mr-2">•</span>
                  Minimum age requirements met
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <FaHandshake className="text-4xl text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Trust-Based System</h3>
            <p className="text-gray-600">Built on mutual trust and respect</p>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <FaShieldAlt className="text-4xl text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">Fully Insured</h3>
            <p className="text-gray-600">Comprehensive insurance coverage</p>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6 text-center">
            <FaCheckCircle className="text-4xl text-yellow-600 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-gray-800 mb-2">No Hidden Costs</h3>
            <p className="text-gray-600">Transparent and fair pricing</p>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Benefits of Zero Deposit Policy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">✓ Financial Flexibility</h4>
              <p className="text-gray-600 mb-4">Keep your cash for other expenses during your Dubai visit</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">✓ Faster Processing</h4>
              <p className="text-gray-600 mb-4">Quick rental process without deposit verification delays</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">✓ Peace of Mind</h4>
              <p className="text-gray-600 mb-4">No worry about deposit refund processing times</p>
              
              <h4 className="font-semibold text-gray-800 mb-2">✓ Premium Service</h4>
              <p className="text-gray-600">Same luxury experience without the deposit hassle</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Ready to Experience Zero Deposit Luxury?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded font-medium transition-colors"
            >
              Browse Our Fleet
            </Link>
            <Link 
              to="/contact" 
              className="bg-white border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-white px-8 py-3 rounded font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositWaiverPage;