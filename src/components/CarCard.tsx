import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaPhone } from 'react-icons/fa';
import { scrollToTop } from '../utils/scrollToTop';
import { Car } from '../types/car';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const handleWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open(`https://wa.me/971501234567?text=I'm interested in renting ${car.name}`, '_blank');
  };

  const handleCall = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    window.open('tel:+971501234567', '_self');
  };

  return (
    <Link to={`/car/${car.id}`} onClick={scrollToTop} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
            {car.dailyRate} AED
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-red-600 transition-colors">
            {car.name}
          </h3>
          
          <div className="flex gap-2">
            <button 
              onClick={handleCall}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <FaPhone size={12} />
              Call Us
            </button>
            <button 
              onClick={handleWhatsApp}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded text-sm font-medium transition-colors flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={14} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;