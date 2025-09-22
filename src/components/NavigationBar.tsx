import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const NavigationBar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const carTypes = [
    {
      name: 'Luxury Cars',
      path: '/category/luxury',
      subcategories: [
        { name: 'High Range Luxury', path: '/category/luxury/high-range' },
        { name: 'Mid Range Luxury', path: '/category/luxury/mid-range' }
      ]
    },
    {
      name: 'Sports Cars',
      path: '/category/sports',
      subcategories: [
        { name: 'High Range Sports', path: '/category/sports/high-range' },
        { name: 'Mid Range Sports', path: '/category/sports/mid-range' }
      ]
    },
    {
      name: 'SUV Cars',
      path: '/category/suv',
      subcategories: [
        { name: 'High Range SUV', path: '/category/suv/high-range' },
        { name: 'Mid Range SUV', path: '/category/suv/mid-range' }
      ]
    },
    {
      name: 'Economy Cars',
      path: '/category/economy',
      subcategories: [
        { name: 'High Range Economy', path: '/category/economy/high-range' },
        { name: 'Mid Range Economy', path: '/category/economy/mid-range' }
      ]
    }
  ];

  const carBrands = [
    'Ferrari', 'Lamborghini', 'Rolls Royce', 'Mercedes', 'Porsche', 'Audi',
    'BMW', 'Bentley', 'McLaren', 'Cadillac', 'GMC', 'Land Rover', 'Kia',
    'Hyundai', 'Citroen', 'Mazda'
  ];

  return (
    <nav className="bg-white shadow-md border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-8 py-4">
          
          {/* Home */}
          <Link 
            to="/" 
            className="text-gray-700 hover:text-red-600 font-medium transition-colors"
          >
            Home
          </Link>

          {/* About Us */}
          <Link 
            to="/about" 
            className="text-gray-700 hover:text-red-600 font-medium transition-colors"
          >
            About Us
          </Link>

          {/* Rent by Car Type */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('carType')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors">
              Rent by Car Type
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {activeDropdown === 'carType' && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                {carTypes.map((type, index) => (
                  <div key={index} className="relative group">
                    <Link
                      to={type.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      {type.name}
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Rent by Brand */}
          <div 
            className="relative"
            onMouseEnter={() => handleMouseEnter('brand')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center text-gray-700 hover:text-red-600 font-medium transition-colors">
              Rent by Brand
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {activeDropdown === 'brand' && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-md shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                <Link
                  to="/brands"
                  className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 font-semibold"
                >
                  All Brands
                </Link>
                {carBrands.map((brand, index) => (
                  <Link
                    key={index}
                    to={`/brand/${brand.toLowerCase().replace(' ', '-')}`}
                    className="block px-4 py-3 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors border-b border-gray-100 last:border-b-0"
                  >
                    {brand}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* FAQ */}
          <Link 
            to="/faq" 
            className="text-gray-700 hover:text-red-600 font-medium transition-colors"
          >
            FAQ
          </Link>

          {/* Contact Us */}
          <Link 
            to="/contact" 
            className="text-gray-700 hover:text-red-600 font-medium transition-colors"
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;