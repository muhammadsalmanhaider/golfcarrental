import React from 'react';

const brands = [
  { name: 'Ferrari', logo: '🏎️' },
  { name: 'Lamborghini', logo: '🐂' },
  { name: 'Rolls Royce', logo: '👑' },
  { name: 'Mercedes', logo: '⭐' },
  { name: 'Porsche', logo: '🏁' },
  { name: 'Audi', logo: '🔵' }
];

const BrandSelector = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">SELECT A CAR FOR RENT BY BRAND</h2>
        <div className="text-right">
          <span className="text-yellow-600 text-sm">All Brands →</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <button 
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {brand.logo}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-yellow-600 transition-colors">
              {brand.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
};

export default BrandSelector;