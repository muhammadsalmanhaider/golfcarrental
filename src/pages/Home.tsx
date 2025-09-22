import React from 'react';
import { Link } from 'react-router-dom';
import CarCard from '../components/CarCard';
import BrandSelector from '../components/BrandSelector';
import { luxuryCars, sportsCars, suvCars, economyCars } from '../data/cars';
import Header from '../components/Header';

const Home = () => {
  return (
   <>
   <Header />
    <main className="container mx-auto px-4 py-8">
      {/* Hero section */}
      <section className="mb-12 text-center">
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Relax the luxury car rental in Dubai offers a fair and competitive pricing structure, to be included all brands with FREE delivery. Choose your luxury car from our fleet including Ferrari, Lamborghini, BMW, Audi, McLaren, Mercedes, Rolls Royce, Porsche, Range Rover, Bentley, and more. We have a clear zero deposit policy, straight forward terms and conditions, and no hidden fees or costs.
        </p>
      </section>

      {/* Brand selector */}
      <BrandSelector />

      {/* Luxury Cars Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">LUXURY CARS FOR RENT IN DUBAI</h2>
          <p className="text-gray-600">Browse our wide catalog of luxury cars for rent by category</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {luxuryCars.slice(0, 4).map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/category/luxury" 
            className="inline-block bg-white border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            All Luxury Cars →
          </Link>
        </div>
      </section>

      {/* Sports Cars Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">SPORTS CARS FOR RENT IN DUBAI</h2>
          <p className="text-gray-600">Browse our wide catalog of sports cars for rent by category</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {sportsCars.slice(0, 4).map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/category/sports" 
            className="inline-block bg-white border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            All Sports Cars →
          </Link>
        </div>
      </section>

      {/* SUV Cars Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">SUV CARS FOR RENT IN DUBAI</h2>
          <p className="text-gray-600">Browse our wide catalog of SUV cars for rent by category</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {suvCars.slice(0, 4).map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/category/suv" 
            className="inline-block bg-white border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            All SUV Cars →
          </Link>
        </div>
      </section>

      {/* Economy Cars Section */}
      <section className="mb-16">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">ECONOMY CARS FOR RENT IN DUBAI</h2>
          <p className="text-gray-600">Browse our wide catalog of Economy cars for rent by category</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {economyCars.slice(0, 4).map(car => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
        <div className="text-center">
          <Link 
            to="/category/economy" 
            className="inline-block bg-white border-2 border-red-600 text-red-600 px-6 py-2 rounded hover:bg-red-600 hover:text-white transition-colors"
          >
            All Economy Cars →
          </Link>
        </div>
      </section>
    </main>
    </>
  );
};

export default Home;