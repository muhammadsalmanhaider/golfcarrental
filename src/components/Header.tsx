import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full relative z-10">      
      {/* Main header */}
      <div className="bg-gray-700 text-white py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <Link to="/" className="text-2xl font-bold tracking-wide hover:text-yellow-400 transition-colors">
              LUXURY CAR RENTAL DUBAI
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-4">
            <input 
              type="text" 
              placeholder="Search for cars..."
              className="w-full px-4 py-2 rounded text-gray-800"
            />
          </div>
          
          {/* Navigation tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/category/luxury" className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded text-sm font-medium transition-colors">
              LUXURY CARS
            </Link>
            <Link to="/category/sports" className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded text-sm font-medium transition-colors">
              SPORTS CARS
            </Link>
            <Link to="/category/suv" className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded text-sm font-medium transition-colors">
              SUV'S
            </Link>
            <Link to="/category/economy" className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded text-sm font-medium transition-colors">
              ECONOMY CARS
            </Link>
          </div>
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;