import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { allCars } from '../data/cars';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="w-full relative z-10">      
      {/* Main header */}
      <div className="bg-black text-white py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-4">
            <Link to="/" className="text-2xl font-bold tracking-wide hover:text-red-400 transition-colors">
              LUXURY CAR RENTAL DUBAI
            </Link>
          </div>
          
          {/* Search bar */}
          <div className="max-w-md mx-auto mb-4">
            <form onSubmit={handleSearch} className="flex">
              <input 
                type="text" 
                placeholder="Search for cars or brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2 rounded-l text-gray-800"
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r text-white transition-colors"
              >
                Search
              </button>
            </form>
          </div>
          
          {/* Navigation tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            <Link to="/category/luxury" className="bg-gray-800 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition-colors">
              LUXURY CARS
            </Link>
            <Link to="/category/sports" className="bg-gray-800 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition-colors">
              SPORTS CARS
            </Link>
            <Link to="/category/suv" className="bg-gray-800 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition-colors">
              SUV'S
            </Link>
            <Link to="/category/economy" className="bg-gray-800 hover:bg-red-600 px-4 py-2 rounded text-sm font-medium transition-colors">
              ECONOMY CARS
            </Link>
          </div>
        </div>
      </div>
      
      
    </header>
  );
};

export default Header;