import React from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollToTop';

const brands = [
  { name: 'Ferrari', logo: '🏎️', slug: 'ferrari' },
  { name: 'Lamborghini', logo: '🐂', slug: 'lamborghini' },
  { name: 'Rolls Royce', logo: '👑', slug: 'rolls-royce' },
  { name: 'Mercedes', logo: '⭐', slug: 'mercedes' },
  { name: 'Porsche', logo: '🏁', slug: 'porsche' },
  { name: 'Audi', logo: '🔵', slug: 'audi' }
];

const BrandSelector = () => {
  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">SELECT A CAR FOR RENT BY BRAND</h2>
        <div className="text-right">
          <Link to="/brands" className="text-red-600 hover:text-red-700 text-sm transition-colors">
            All Brands →
          </Link>
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand, index) => (
          <Link
            to={`/brand/${brand.slug}`}
            onClick={scrollToTop}
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-1 text-center group block"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
              {brand.logo}
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-red-600 transition-colors">
              {brand.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default BrandSelector;