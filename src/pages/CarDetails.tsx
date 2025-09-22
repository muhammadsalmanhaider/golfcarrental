import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  MessageSquare, 
  Phone, 
  ArrowLeft, 
  Check, 
  Users, 
  Fuel, 
  Settings, 
  Calendar,
  Shield,
  Plus,
  Minus,
  Star,
  Car,
  Palette,
  DoorOpen,
  Briefcase,
  Bluetooth,
  Video,
  Monitor,
  Music
} from 'lucide-react';
import { allCars } from '../data/cars';

const CarDetails = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const car = allCars.find(c => c.id === id);

  if (!car) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Car not found</h1>
        <Link to="/" className="text-yellow-600 hover:underline">Return to home</Link>
      </div>
    );
  }

  const handleWhatsApp = () => {
    window.open(`https://wa.me/971501234567?text=I'm interested in renting ${car.name}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+971501234567', '_self');
  };

  const faqs = [
    {
      question: "Why choose Rotana Star for luxury car rental in Dubai?",
      answer: "We offer premium vehicles with exceptional service and competitive rates."
    },
    {
      question: "What is the minimum time I can rent a luxury car in Dubai? What happens if I exceed it?",
      answer: "Minimum rental period is 24 hours. Extensions are charged at hourly rates."
    },
    {
      question: "What are the average costs of renting a luxury car in Dubai with Rotana Star?",
      answer: "Costs vary by vehicle type and rental duration. See our pricing above."
    },
    {
      question: "How to book a luxury rental car in Dubai via Rotana Star?",
      answer: "Contact us via WhatsApp or phone to make your reservation."
    },
    {
      question: "Is there a car delivery service available with your luxury car rental in Dubai?",
      answer: "Yes, we offer delivery service to your preferred location in Dubai."
    }
  ];

  // helper to detect simple keywords inside the features array (case-insensitive)
  const hasFeature = (keyword: string) =>
    Array.isArray(car.features) && car.features.some((f: string) => f.toLowerCase().includes(keyword.toLowerCase()));

  // derive friendly display values with sensible fallbacks
  const brand = car.brand || car.name.split(' ')[0] || '—';
  const engine = car.engine || (hasFeature('v12') ? 'V12' : (hasFeature('v8') ? 'V8' : '—'));
  const transmission = car.transmission || (hasFeature('auto') ? 'Auto' : 'Auto');
  const color = car.color || (hasFeature('black') ? 'Black' : '—');
  const seats = car.seats ?? (hasFeature('seats') ? 4 : 4);
  const doors = car.doors ?? 4;
  const luggage = car.luggage ?? 4;
  const airbags = (typeof car.airbags === 'boolean') ? car.airbags : hasFeature('airbag');
  const bluetooth = (typeof car.bluetooth === 'boolean') ? car.bluetooth : hasFeature('bluetooth');
  const navigation = (typeof car.navigation === 'boolean') ? car.navigation : hasFeature('navigation') || hasFeature('gps') || hasFeature('infotain');
  const camera = (typeof car.camera === 'boolean') ? car.camera : hasFeature('camera') || hasFeature('rear');
  const screen = (typeof car.screen === 'boolean') ? car.screen : hasFeature('screen') || hasFeature('display');
  const soundSystem = (typeof car.soundSystem === 'boolean') ? car.soundSystem : hasFeature('sound') || hasFeature('audio');

  // features items to render (icon + value)
  const featureItems = [
    { icon: <Car className="w-5 h-5 text-yellow-600" />, value: brand },
    { icon: <Settings className="w-5 h-5 text-yellow-600" />, value: engine },
    { icon: <Fuel className="w-5 h-5 text-yellow-600" />, value: transmission },
    { icon: <Palette className="w-5 h-5 text-yellow-600" />, value: color },
    { icon: <Users className="w-5 h-5 text-yellow-600" />, value: seats },
    { icon: <DoorOpen className="w-5 h-5 text-yellow-600" />, value: doors },
    { icon: <Briefcase className="w-5 h-5 text-yellow-600" />, value: luggage },
    { icon: <Shield className="w-5 h-5 text-yellow-600" />, value: airbags ? 'Yes' : 'No' },
    { icon: <Bluetooth className="w-5 h-5 text-yellow-600" />, value: bluetooth ? 'Yes' : 'No' },
    { icon: <Video className="w-5 h-5 text-yellow-600" />, value: camera ? 'Yes' : 'No' },
    { icon: <Monitor className="w-5 h-5 text-yellow-600" />, value: screen ? 'Yes' : 'No' },
    { icon: <Music className="w-5 h-5 text-yellow-600" />, value: soundSystem ? 'Yes' : 'No' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-white shadow">
    <div className="container mx-auto px-4 py-6 text-center">
      
      <h1 className="text-3xl font-bold text-gray-900">{car.name}</h1>
      {car.year && (
        <p className="text-gray-600 mt-1 text-lg">Model {car.year}</p>
      )}
    </div>
  </div>
      {/* Breadcrumb */}
    <div className="">
  <div className="container mx-auto px-4 text-center py-3">
    <nav className="text-sm text-gray-600">
      <Link to="/" className="hover:text-gray-800">Home</Link>
      <span className="mx-2">→</span>
      <Link to={`/category/${car.category}`} className="hover:text-gray-800">
        {car.category.charAt(0).toUpperCase() + car.category.slice(1)} Rental Cars
      </Link>
      <span className="mx-2">→</span>
      <span className="text-gray-800">{car.name} {car.year} with Rotana Star</span>
    </nav>
  </div>
</div>


      <div className="container mx-auto px-4 py-8">
        <div className="overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Sidebar - Car Details */}
            <div className="lg:w-1/2 p-6 ">
              <h1 className="text-2xl font-bold text-gray-800 mb-6">{car.name} {car.year}</h1>
              
              {/* Car Info Grid */}
              <div className="space-y-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Model</span>
                    <div className="font-medium">{car.model ?? car.year}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Daily</span>
                    <div className="font-medium">{car.dailyRate}</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Insurance</span>
                    <div className="font-medium">{car.insurance}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">KMs</span>
                    <div className="font-medium">300</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Age</span>
                    <div className="font-medium">{car.age}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Min Age</span>
                    <div className="font-medium">25</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Rental Period</span>
                    <div className="font-medium">Daily</div>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-yellow-500 text-white p-3 rounded">
                    <div className="text-xs">Weekly</div>
                    <div className="font-bold">Call for Price</div>
                  </div>
                  <div className="bg-yellow-500 text-white p-3 rounded">
                    <div className="text-xs">Monthly</div>
                    <div className="font-bold">Call for Price</div>
                  </div>
                  <div className="bg-yellow-500 text-white p-3 rounded">
                    <div className="text-xs">Yearly</div>
                    <div className="font-bold">Call for price</div>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="flex gap-4">
                <button 
                  onClick={handleWhatsApp}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare size={20} />
                  WhatsApp
                </button>
                
                <button 
                  onClick={handleCall}
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  Contact Us
                </button>
              </div>
            </div>

            {/* Right Side - Main Image */}
            <div className="lg:w-1/2 p-6">
              <div className="mb-6">
                <img 
                  src={car.gallery[selectedImage] || car.image} 
                  alt={car.name} 
                  className="w-full h-96 object-cover "
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4 mb-8">
                {car.gallery.length > 0 ? (
                  car.gallery.map((photo: string, index: number) => (
                    <img 
                      key={index}
                      src={photo} 
                      alt={`${car.name} ${index + 1}`}
                      className={`h-24 w-full object-cover rounded-lg cursor-pointer transition-all ${
                        selectedImage === index ? 'ring-2 ring-yellow-500' : 'hover:opacity-80'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    />
                  ))
                ) : (
                  <div className="col-span-4 text-center text-gray-500 py-4">
                    No additional images available
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Car Features (new styled grid like your screenshot) */}
        <div className="mt-8 p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Car Features</h2>

          <div className="grid grid-cols-3 gap-y-6 -t ">
            {featureItems.map((it, idx) => (
              <div key={idx} className="flex items-center gap-3 py-4">
                {it.icon}
                <span className="font-medium text-gray-700">{it.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Car Description */}
        <div className="mt-8 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Rent {car.name} Black in Dubai with Rotana Star</h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Rent a {car.name} Black in Dubai with Rotana Star</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            {car.description}
          </p>
          <p className="text-gray-600 leading-relaxed">
            At Rotana Star, we pride ourselves on delivering exceptional service and maintaining our fleet to the highest standards. Our {car.name} comes with comprehensive insurance coverage and 24/7 customer support to ensure your complete satisfaction.
          </p>
        </div>

        {/* FAQ Section */}
        <div className=" mt-8 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">FREQUENTLY ASKED QUESTIONS</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full py-4 text-left flex justify-between items-center hover:text-yellow-600"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {openFaq === index && (
                  <div className="pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Related Cars */}
        <div className="bg-white mt-8 p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-6">Related Cars</h2>
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 gap-6">
            {allCars
              .filter((c) => c.category === car.category && c.id !== car.id)
              .slice(0, 6)
              .map((relatedCar) => (
                <Link
                  key={relatedCar.id}
                  to={`/car/${relatedCar.id}`}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={relatedCar.image}
                    alt={relatedCar.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{relatedCar.name}</h3>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={16} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-800 mb-2">{relatedCar.dailyRate}</div>
                      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 rounded font-medium transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">+971504567921</p>
          <p className="mb-4">info@rotanastar.ae</p>
          <p className="text-gray-400">Sarajiyya Building - Al Barsha - Al Barsha 1 - Dubai, UAE</p>
        </div>
      </footer>
    </div>
  );
};

export default CarDetails;
