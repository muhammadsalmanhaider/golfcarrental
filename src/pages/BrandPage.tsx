import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CarCard from '../components/CarCard';
import { allCars } from '../data/cars';

const BrandPage = () => {
  const { brand } = useParams();
  
  const brandName = brand?.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()) || '';
  const brandCars = allCars.filter(car => 
    car.brand.toLowerCase() === brandName.toLowerCase()
  );

  if (!brandCars.length) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">No cars found for {brandName}</h1>
        <Link to="/" className="text-yellow-600 hover:underline">Return to home</Link>
      </div>
    );
  }

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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{brandName.toUpperCase()} CARS FOR RENT IN DUBAI</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our complete collection of {brandName} vehicles across all categories - from luxury sedans to high-performance sports cars
        </p>
      </div>

      {/* Cars by Category */}
      {['luxury', 'sports', 'suv', 'economy'].map(category => {
        const categoryCars = brandCars.filter(car => car.category === category);
        if (categoryCars.length === 0) return null;

        return (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 capitalize">
              {brandName} {category} Cars
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categoryCars.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BrandPage;