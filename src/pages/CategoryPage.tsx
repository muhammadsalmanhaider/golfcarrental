import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CarCard from '../components/CarCard';
import { luxuryCars, sportsCars, suvCars, economyCars } from '../data/cars';

const CategoryPage = () => {
  const { category } = useParams();
  
  const getCategoryData = () => {
    switch (category) {
      case 'luxury':
        return { cars: luxuryCars, title: 'LUXURY CARS', subtitle: 'Premium luxury vehicles for the ultimate driving experience' };
      case 'sports':
        return { cars: sportsCars, title: 'SPORTS CARS', subtitle: 'High-performance sports cars for thrill seekers' };
      case 'suv':
        return { cars: suvCars, title: 'SUV CARS', subtitle: 'Spacious and comfortable SUVs for family trips' };
      case 'economy':
        return { cars: economyCars, title: 'ECONOMY CARS', subtitle: 'Budget-friendly cars without compromising quality' };
      case 'exotic':
        return { cars: exoticCars, title: 'EXOTIC CARS', subtitle: 'Ultra-rare hypercars and exclusive supercars' };
      default:
        return { cars: [], title: 'CARS', subtitle: '' };
    }
  };

  const { cars, title, subtitle } = getCategoryData();

  if (!cars.length) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Category not found</h1>
        <Link to="/" className="text-yellow-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 mb-6"
      >
        <FaArrowLeft />
        Back to Home
      </Link>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{title} FOR RENT IN DUBAI</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;