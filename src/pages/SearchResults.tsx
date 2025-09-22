import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CarCard from '../components/CarCard';
import { allCars } from '../data/cars';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchResults = allCars.filter(car => 
    car.name.toLowerCase().includes(query.toLowerCase()) ||
    car.brand.toLowerCase().includes(query.toLowerCase())
  );

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
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          SEARCH RESULTS FOR "{query.toUpperCase()}"
        </h1>
        <p className="text-gray-600">
          {searchResults.length > 0 
            ? `Found ${searchResults.length} car${searchResults.length > 1 ? 's' : ''} matching your search`
            : 'No cars found matching your search criteria'
          }
        </p>
      </div>

      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {searchResults.map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className="text-6xl mb-4">🚗</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Car Not Available</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find any cars matching "{query}". 
            Please try searching with different keywords or browse our categories.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-medium transition-colors"
            >
              Browse All Cars
            </Link>
            <Link 
              to="/brands" 
              className="bg-white border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded font-medium transition-colors"
            >
              View All Brands
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;