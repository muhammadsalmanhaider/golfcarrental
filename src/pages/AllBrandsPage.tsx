import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const AllBrandsPage = () => {
  const brands = [
    { name: 'Ferrari', logo: '🏎️', description: 'Italian luxury sports cars' },
    { name: 'Lamborghini', logo: '🐂', description: 'Exotic supercars from Italy' },
    { name: 'Rolls-Royce', logo: '👑', description: 'Ultimate luxury automobiles' },
    { name: 'Mercedes', logo: '⭐', description: 'German engineering excellence' },
    { name: 'Porsche', logo: '🏁', description: 'Sports car perfection' },
    { name: 'Audi', logo: '🔵', description: 'Vorsprung durch Technik' },
    { name: 'BMW', logo: '🔷', description: 'The ultimate driving machine' },
    { name: 'Bentley', logo: '🦅', description: 'British luxury craftsmanship' },
    { name: 'McLaren', logo: '🚀', description: 'Formula 1 inspired supercars' },
    { name: 'Cadillac', logo: '💎', description: 'American luxury standard' },
    { name: 'GMC', logo: '🛡️', description: 'Professional grade vehicles' },
    { name: 'Land-Rover', logo: '🏔️', description: 'Go beyond adventure' },
    { name: 'Kia', logo: '🌟', description: 'Movement that inspires' },
    { name: 'Hyundai', logo: '🔶', description: 'New thinking, new possibilities' },
    { name: 'Citroen', logo: '🔺', description: 'French innovation and comfort' },
    { name: 'Mazda', logo: '🌀', description: 'Driving matters' }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">ALL CAR BRANDS</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our extensive collection of premium car brands available for rent in Dubai
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <Link
            key={index}
            to={`/brand/${brand.name.toLowerCase().replace(' ', '-')}`}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
          >
            <div className="text-center">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {brand.logo}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
                {brand.name}
              </h3>
              <p className="text-gray-600 text-sm">
                {brand.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBrandsPage;