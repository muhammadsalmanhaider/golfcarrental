import { Car } from '../types/car';

export const luxuryCars: Car[] = [
  {
    id: 'bentley-flying-spur',
    name: 'Bentley Flying Spur',
    image: 'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,500',
    engine: '6.0L W12 Twin-Turbo',
    bluetooth: true,
    airbags: true,
    camera: true,
    screen: true,
    description: 'Experience ultimate luxury with the Bentley Flying Spur. This exquisite sedan combines unparalleled comfort with powerful performance, featuring handcrafted interiors and cutting-edge technology.',
    features: ['Premium Leather Interior', 'Massaging Seats', 'Panoramic Sunroof', 'Advanced Infotainment', 'Premium Sound System', 'Climate Control'],
    gallery: [
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Bentley'
  },
  {
    id: 'rolls-royce-cullinan',
    name: 'Rolls Royce Cullinan 2023',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '5,000',
    description: 'The epitome of luxury SUVs, the Rolls Royce Cullinan offers unmatched elegance and comfort for those who demand the very best in automotive excellence.',
    features: ['Starlight Headliner', 'Suicide Doors', 'Premium Wood Trim', 'Rear Entertainment', 'Champagne Cooler', 'Magic Carpet Ride'],
    gallery: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Rolls-Royce'
  },
  {
    id: 'rolls-royce-spectre',
    name: 'Rolls Royce Spectre 2024',
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '5,500',
    description: 'The first fully electric Rolls-Royce, the Spectre represents the future of luxury motoring with silent operation and zero emissions.',
    features: ['Electric Powertrain', 'Spirit of Ecstasy', 'Bespoke Interior', 'Whisper Quiet', 'Starlight Doors', 'Advanced Driver Assistance'],
    gallery: [
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Rolls-Royce'
  },
  {
    id: 'mercedes-s-class',
    name: 'Mercedes S-Class 2024',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,800',
    description: 'The flagship Mercedes sedan offering the pinnacle of luxury, technology, and comfort with innovative features and premium materials.',
    features: ['MBUX Hyperscreen', 'Air Suspension', 'Massage Seats', 'Burmester Sound', 'Night Vision', 'Executive Rear Seating'],
    gallery: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Mercedes'
  },
  {
    id: 'bmw-7-series',
    name: 'BMW 7 Series 2024',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,500',
    description: 'BMW\'s flagship luxury sedan combining dynamic performance with executive comfort and cutting-edge technology.',
    features: ['iDrive 8', 'Sky Lounge Panoramic Roof', 'Executive Lounge Seating', 'Bowers & Wilkins Audio', 'Laser Headlights', 'Gesture Control'],
    gallery: [
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'BMW'
  },
  {
    id: 'audi-a8',
    name: 'Audi A8 L 2024',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,200',
    description: 'Audi\'s luxury flagship featuring advanced technology, premium materials, and exceptional comfort for the discerning driver.',
    features: ['Virtual Cockpit Plus', 'Matrix LED Headlights', 'Bang & Olufsen Sound', 'Massage Seats', 'AI Traffic Jam Pilot', 'Ambient Lighting'],
    gallery: [
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Audi'
  },
  {
    id: 'bentley-continental-gt',
    name: 'Bentley Continental GT 2024',
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '4,200',
    description: 'The perfect grand tourer combining Bentley luxury with exhilarating performance and handcrafted British elegance.',
    features: ['W12 Engine', 'Diamond Quilted Leather', 'Rotating Display', 'Naim Audio', 'All-Wheel Drive', 'Handcrafted Interior'],
    gallery: [
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Bentley'
  },
  {
    id: 'mercedes-maybach-s580',
    name: 'Mercedes Maybach S580 2024',
    image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '4,800',
    description: 'The ultimate expression of luxury with Maybach\'s exclusive appointments and unparalleled comfort features.',
    features: ['Maybach Exclusive Interior', 'Executive Rear Seats', 'Champagne Flutes', 'Fragrance System', 'Maybach Driving Modes', 'Premium Leather'],
    gallery: [
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Mercedes'
  },
  {
    id: 'rolls-royce-phantom',
    name: 'Rolls Royce Phantom 2024',
    image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '6,000',
    description: 'The pinnacle of automotive luxury, the Phantom represents the ultimate in craftsmanship and prestige.',
    features: ['Gallery Art Space', 'Starlight Headliner', 'Whisper Quiet Cabin', 'Bespoke Interior', 'Self-Leveling Wheel Badges', 'Magic Carpet Ride'],
    gallery: [
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Rolls-Royce'
  },
  {
    id: 'bentley-mulsanne',
    name: 'Bentley Mulsanne 2024',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '4,500',
    description: 'Bentley\'s flagship sedan offering uncompromising luxury with traditional British craftsmanship and modern technology.',
    features: ['Twin-Turbo V8', 'Mulliner Driving Specification', 'Picnic Tables', 'Rear Entertainment', 'Handcrafted Wood Veneers', 'Premium Leather'],
    gallery: [
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Bentley'
  },
  {
    id: 'audi-a8-hybrid',
    name: 'Audi A8 60 TFSI e Hybrid',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,600',
    description: 'Combining luxury with efficiency, this hybrid A8 offers impressive performance while maintaining environmental consciousness.',
    features: ['Plug-in Hybrid', 'Predictive Efficiency Assistant', 'Virtual Cockpit', 'Matrix LED', 'Air Suspension', 'Bang & Olufsen'],
    gallery: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Audi'
  },
  {
    id: 'bmw-alpina-b7',
    name: 'BMW Alpina B7 2024',
    image: 'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,200',
    description: 'The ultimate luxury performance sedan combining BMW engineering with Alpina\'s exclusive tuning and craftsmanship.',
    features: ['Twin-Turbo V8', 'Alpina Wheels', 'Exclusive Interior', 'Sport Suspension', 'Performance Exhaust', 'Alpina Badging'],
    gallery: [
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'BMW'
  },
  {
    id: 'mercedes-eqs',
    name: 'Mercedes EQS 580 2024',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,800',
    description: 'Mercedes\' flagship electric luxury sedan offering cutting-edge technology and sustainable luxury without compromise.',
    features: ['Electric Powertrain', 'MBUX Hyperscreen', 'Air Suspension', 'Massage Seats', 'Augmented Reality HUD', 'Zero Emissions'],
    gallery: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Mercedes'
  },
  {
    id: 'audi-rs7',
    name: 'Audi RS7 Sportback 2024',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,000',
    description: 'The perfect blend of luxury and performance, the RS7 offers supercar performance in a practical luxury package.',
    features: ['Twin-Turbo V8', 'Quattro AWD', 'Sport Differential', 'RS Suspension', 'Carbon Fiber Trim', 'RS Performance Mode'],
    gallery: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Audi'
  },
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls Royce Ghost 2024',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '4,800',
    description: 'The Ghost offers a more dynamic Rolls-Royce experience while maintaining the brand\'s legendary luxury and refinement.',
    features: ['Twin-Turbo V12', 'Planar Suspension', 'Starlight Headliner', 'Whisper Quiet', 'Bespoke Audio', 'Spirit of Ecstasy'],
    gallery: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'luxury',
    brand: 'Rolls-Royce'
  }
];

export const sportsCars: Car[] = [
  {
    id: 'lamborghini-revuelto',
    name: 'Lamborghini Revuelto 2024',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '4,500',
    description: 'The latest flagship from Lamborghini, combining hybrid technology with traditional V12 power for an unprecedented driving experience.',
    features: ['Hybrid V12 Engine', 'Carbon Fiber Body', 'Active Aerodynamics', 'Track Mode', 'Launch Control', 'Premium Interior'],
    gallery: [
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Lamborghini'
  },
  {
    id: 'ferrari-f8-spider',
    name: 'Ferrari F8 Spider 2024',
    image: 'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,500',
    description: 'Experience the thrill of open-top Ferrari driving with the F8 Spider, featuring a powerful V8 engine and stunning Italian design.',
    features: ['Twin-Turbo V8', 'Retractable Hardtop', 'Side Slip Control', 'Ferrari Dynamic Enhancer', 'Carbon Fiber Details', 'Racing Heritage'],
    gallery: [
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Ferrari'
  },
  {
    id: 'mclaren-artura',
    name: 'McLaren Artura Spider',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,000',
    description: 'The McLaren Artura Spider combines hybrid technology with pure McLaren DNA, delivering exceptional performance and handling.',
    features: ['Hybrid V6 Engine', 'Retractable Hardtop', 'Carbon Fiber Construction', 'Active Dynamics', 'Track Telemetry', 'Premium Audio'],
    gallery: [
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'McLaren'
  },
  {
    id: 'porsche-911-gt3',
    name: 'Porsche 911 GT3 RS',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,500',
    description: 'The ultimate track-focused 911, the GT3 RS delivers pure driving excitement with race-bred technology and aerodynamics.',
    features: ['Naturally Aspirated Flat-6', 'PDK Transmission', 'Active Aerodynamics', 'Track Mode', 'Roll Cage', 'Racing Seats'],
    gallery: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Porsche'
  },
  {
    id: 'porsche-panamera',
    name: 'Porsche Panamera Turbo S E-Hybrid',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,200',
    description: 'The perfect blend of sports car performance and luxury sedan comfort, the Panamera Turbo S E-Hybrid offers the best of both worlds.',
    features: ['Hybrid V8 Engine', 'Sport Chrono Package', 'Adaptive Air Suspension', 'Porsche Communication Management', 'Premium Interior', 'Launch Control'],
    gallery: [
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Porsche'
  },
  {
    id: 'ferrari-sf90',
    name: 'Ferrari SF90 Stradale 2024',
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '5,000',
    description: 'Ferrari\'s first plug-in hybrid supercar, the SF90 Stradale represents the pinnacle of Ferrari performance and technology.',
    features: ['Hybrid V8 System', '1000HP Total Power', 'All-Wheel Drive', 'eManettino', 'Carbon Fiber Body', 'Track Mode'],
    gallery: [
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Ferrari'
  },
  {
    id: 'lamborghini-huracan',
    name: 'Lamborghini Huracán EVO Spyder',
    image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,200',
    description: 'The Huracán EVO Spyder offers the perfect combination of Lamborghini performance with open-air driving excitement.',
    features: ['V10 Engine', 'Lamborghini Dinamica Veicolo Integrata', 'Soft-Top Convertible', 'All-Wheel Drive', 'Performance Traction Control', 'Anima Drive Modes'],
    gallery: [
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Lamborghini'
  },
  {
    id: 'mclaren-720s',
    name: 'McLaren 720S Spider 2024',
    image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,800',
    description: 'The 720S Spider delivers breathtaking performance with McLaren\'s signature handling and aerodynamic excellence.',
    features: ['Twin-Turbo V8', 'Carbon Fiber Monocage', 'Retractable Hard Top', 'Proactive Chassis Control', 'Track Mode', 'Lightweight Construction'],
    gallery: [
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'McLaren'
  },
  {
    id: 'porsche-taycan',
    name: 'Porsche Taycan Turbo S 2024',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,800',
    description: 'Porsche\'s first all-electric sports car, the Taycan Turbo S combines instant acceleration with traditional Porsche handling.',
    features: ['Dual Electric Motors', 'All-Wheel Drive', '800V Architecture', 'Adaptive Air Suspension', 'Sport Chrono Package', 'Fast Charging'],
    gallery: [
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Porsche'
  },
  {
    id: 'ferrari-roma',
    name: 'Ferrari Roma 2024',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,000',
    description: 'The Ferrari Roma embodies timeless Italian elegance with modern performance, perfect for grand touring adventures.',
    features: ['Twin-Turbo V8', 'Retractable Hard Top', '8-Speed DCT', 'Ferrari Dynamic Enhancer+', 'Manettino Drive Modes', 'Premium Interior'],
    gallery: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Ferrari'
  },
  {
    id: 'audi-r8',
    name: 'Audi R8 V10 Performance 2024',
    image: 'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,600',
    description: 'Audi\'s flagship supercar featuring a naturally aspirated V10 engine and quattro all-wheel drive for ultimate performance.',
    features: ['V10 Engine', 'Quattro AWD', 'Carbon Fiber Trim', 'Magnetic Ride', 'Virtual Cockpit', 'Performance Mode'],
    gallery: [
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Audi'
  },
  {
    id: 'bmw-m8',
    name: 'BMW M8 Competition Convertible',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,400',
    description: 'BMW\'s most powerful production car, the M8 Competition offers luxury grand touring with track-ready performance.',
    features: ['Twin-Turbo V8', 'M xDrive AWD', 'Carbon Fiber Roof', 'M Suspension', 'Competition Package', 'Harman Kardon Audio'],
    gallery: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'BMW'
  },
  {
    id: 'mercedes-amg-gt',
    name: 'Mercedes AMG GT 63 S 4MATIC+',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,800',
    description: 'The AMG GT 63 S combines supercar performance with four-door practicality and Mercedes luxury.',
    features: ['Twin-Turbo V8', 'AMG Performance 4MATIC+', 'AMG Ride Control', 'AMG Track Pace', 'Burmester Sound', 'AMG Drive Modes'],
    gallery: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Mercedes'
  },
  {
    id: 'lamborghini-urus',
    name: 'Lamborghini Urus Performante',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '3,500',
    description: 'The world\'s first Super Sport Utility Vehicle, combining Lamborghini performance with SUV versatility.',
    features: ['Twin-Turbo V8', 'All-Wheel Drive', 'Carbon Fiber Aero', 'Anima Drive Modes', 'Air Suspension', 'Track Package'],
    gallery: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'Lamborghini'
  },
  {
    id: 'mclaren-gt',
    name: 'McLaren GT 2024',
    image: 'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,500',
    description: 'McLaren\'s grand tourer combines supercar performance with long-distance comfort and practicality.',
    features: ['Twin-Turbo V8', 'Carbon Fiber Monocell', 'Adaptive Suspension', 'Touring Mode', 'Premium Interior', 'Luggage Space'],
    gallery: [
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'sports',
    brand: 'McLaren'
  }
];

export const suvCars: Car[] = [
  {
    id: 'cadillac-escalade',
    name: 'Cadillac Escalade 2025',
    image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '800',
    description: 'The ultimate luxury SUV, the Cadillac Escalade offers commanding presence, advanced technology, and exceptional comfort for up to 8 passengers.',
    features: ['V8 Engine', '7-Seater Configuration', 'Premium Leather', 'Curved OLED Display', 'Super Cruise', 'Magnetic Ride Control'],
    gallery: [
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Cadillac'
  },
  {
    id: 'gmc-yukon',
    name: 'GMC Yukon Denali 2024',
    image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '550',
    description: 'Spacious and capable, the GMC Yukon provides premium comfort and advanced safety features for family adventures.',
    features: ['Spacious Interior', 'Towing Capacity', 'Advanced Safety', 'Infotainment System', 'Premium Materials', 'All-Terrain Capable'],
    gallery: [
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2365572/pexels-photo-2365572.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'GMC'
  },
  {
    id: 'range-rover-defender',
    name: 'Land Rover Defender 130 2024',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '600',
    description: 'The iconic Defender combines legendary off-road capability with modern luxury and technology for any adventure.',
    features: ['Terrain Response', 'Wade Sensing', 'Air Suspension', 'Premium Interior', 'Off-Road Capable', 'Modern Technology'],
    gallery: [
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Land-Rover'
  },
  {
    id: 'mercedes-g63',
    name: 'Mercedes G Class G63 AMG 2025',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '1,800',
    description: 'The legendary G-Wagon combines uncompromising luxury with incredible performance and iconic design that stands out anywhere.',
    features: ['AMG V8 Biturbo', 'Three Differential Locks', 'Luxury Interior', 'Off-Road Package', 'Premium Sound', 'Distinctive Design'],
    gallery: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Mercedes'
  },
  {
    id: 'bmw-x7',
    name: 'BMW X7 M60i 2024',
    image: 'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '1,200',
    description: 'BMW\'s flagship SUV offering luxury, performance, and space for seven passengers with advanced technology.',
    features: ['Twin-Turbo V8', '7-Seater Layout', 'Sky Lounge Roof', 'Gesture Control', 'Harman Kardon Audio', 'xDrive AWD'],
    gallery: [
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'BMW'
  },
  {
    id: 'audi-q8',
    name: 'Audi Q8 55 TFSI 2024',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '900',
    description: 'Audi\'s flagship SUV combines coupe styling with SUV practicality and advanced quattro all-wheel drive.',
    features: ['Mild Hybrid V6', 'Quattro AWD', 'Virtual Cockpit Plus', 'Matrix LED Headlights', 'Bang & Olufsen Sound', 'Air Suspension'],
    gallery: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Audi'
  },
  {
    id: 'porsche-cayenne',
    name: 'Porsche Cayenne Turbo 2024',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '1,500',
    description: 'The sports car among SUVs, the Cayenne Turbo delivers Porsche performance in a practical luxury package.',
    features: ['Twin-Turbo V8', 'Sport Chrono Package', 'Air Suspension', 'Porsche Traction Management', 'Premium Interior', 'Sport Exhaust'],
    gallery: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Porsche'
  },
  {
    id: 'range-rover-sport',
    name: 'Range Rover Sport HSE Dynamic 2024',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '1,100',
    description: 'The Range Rover Sport combines luxury with dynamic performance and unmatched off-road capability.',
    features: ['Mild Hybrid Engine', 'Terrain Response 2', 'Air Suspension', 'Meridian Sound', 'Pivi Pro Infotainment', 'Wade Sensing'],
    gallery: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Land-Rover'
  },
  {
    id: 'mercedes-gls',
    name: 'Mercedes GLS 580 4MATIC 2024',
    image: 'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '1,300',
    description: 'The S-Class of SUVs, the GLS 580 offers three rows of luxury with advanced technology and comfort features.',
    features: ['Twin-Turbo V8', '7-Seater Layout', 'MBUX System', 'Air Suspension', 'Burmester Sound', 'Executive Rear Seating'],
    gallery: [
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Mercedes'
  },
  {
    id: 'bentley-bentayga',
    name: 'Bentley Bentayga Speed 2024',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '2,200',
    description: 'The world\'s most luxurious SUV, the Bentayga Speed combines Bentley craftsmanship with SUV versatility.',
    features: ['W12 Engine', 'All-Wheel Drive', 'Handcrafted Interior', 'Naim Audio', 'Bentley Dynamic Ride', 'Mulliner Specification'],
    gallery: [
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Bentley'
  },
  {
    id: 'ferrari-purosangue',
    name: 'Ferrari Purosangue 2024',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '4,000',
    description: 'Ferrari\'s first SUV maintains the brand\'s racing DNA while offering four-door practicality and luxury.',
    features: ['V12 Engine', 'All-Wheel Drive', 'Active Suspension', 'Ferrari Dynamic Enhancer', 'Carbon Fiber Details', 'Racing Heritage'],
    gallery: [
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Ferrari'
  },
  {
    id: 'maserati-levante',
    name: 'Maserati Levante Trofeo 2024',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '1,600',
    description: 'Italian luxury meets SUV practicality in the Levante Trofeo, featuring Ferrari-derived V8 power.',
    features: ['Ferrari V8 Engine', 'All-Wheel Drive', 'Air Suspension', 'Harman Kardon Audio', 'Sport Mode', 'Italian Craftsmanship'],
    gallery: [
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Maserati'
  },
  {
    id: 'lincoln-navigator',
    name: 'Lincoln Navigator Black Label 2024',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '700',
    description: 'American luxury at its finest, the Navigator Black Label offers spacious comfort and premium amenities.',
    features: ['Twin-Turbo V6', '8-Seater Layout', 'Revel Audio', 'Massage Seats', 'Panoramic Roof', 'Black Label Interior'],
    gallery: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Lincoln'
  },
  {
    id: 'lexus-lx',
    name: 'Lexus LX 600 2024',
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '800',
    description: 'The ultimate luxury off-roader, the LX 600 combines Lexus luxury with legendary Toyota reliability.',
    features: ['Twin-Turbo V6', 'Multi-Terrain Select', 'Mark Levinson Audio', 'Executive Seating', 'Crawl Control', 'Premium Interior'],
    gallery: [
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Lexus'
  },
  {
    id: 'infiniti-qx80',
    name: 'Infiniti QX80 Luxe 2024',
    image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '600',
    description: 'Japanese luxury with American size, the QX80 offers spacious comfort and advanced safety features.',
    features: ['V8 Engine', '8-Seater Layout', 'Bose Audio', 'Around View Monitor', 'Intelligent AWD', 'Premium Materials'],
    gallery: [
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'suv',
    brand: 'Infiniti'
  }
];

export const economyCars: Car[] = [
  {
    id: 'kia-k5',
    name: 'Kia K5 GT-Line 2024',
    image: 'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '190',
    description: 'Stylish and efficient, the Kia K5 offers excellent value with modern features, comfortable seating, and impressive fuel economy.',
    features: ['Fuel Efficient Engine', 'Modern Infotainment', 'Safety Features', 'Comfortable Seats', 'Spacious Interior', 'Warranty Coverage'],
    gallery: [
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Kia'
  },
  {
    id: 'hyundai-i30',
    name: 'Hyundai i30 N Line 2024',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '249',
    description: 'Reliable and well-equipped, the Hyundai i30 provides comfort and technology at an affordable price point.',
    features: ['Advanced Safety', 'Apple CarPlay', 'Android Auto', 'Efficient Performance', 'Quality Interior', 'Comprehensive Warranty'],
    gallery: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Hyundai'
  },
  {
    id: 'citroen-c4',
    name: 'Citroen C4 X Shine 2024',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '199',
    description: 'French sophistication meets practical design in the Citroen C4 X, offering unique styling and comfortable ride quality.',
    features: ['Distinctive Design', 'Comfortable Suspension', 'Modern Technology', 'Efficient Engine', 'Practical Space', 'European Engineering'],
    gallery: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Citroen'
  },
  {
    id: 'mazda-cx5',
    name: 'Mazda CX-5 Signature 2024',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '150',
    description: 'Premium compact SUV with excellent build quality, engaging driving dynamics, and upscale interior appointments.',
    features: ['Skyactiv Technology', 'Premium Interior', 'All-Wheel Drive Available', 'Advanced Safety', 'Infotainment System', 'Reliable Performance'],
    gallery: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Mazda'
  },
  {
    id: 'toyota-camry',
    name: 'Toyota Camry XSE 2024',
    image: 'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '180',
    description: 'America\'s best-selling sedan offers reliability, comfort, and advanced safety features with excellent fuel economy.',
    features: ['Hybrid Available', 'Toyota Safety Sense', 'Premium Audio', 'Comfortable Seating', 'Spacious Interior', 'Proven Reliability'],
    gallery: [
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Toyota'
  },
  {
    id: 'honda-accord',
    name: 'Honda Accord Touring 2024',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '170',
    description: 'Honda\'s flagship sedan combines efficiency with performance, offering premium features and legendary reliability.',
    features: ['Turbocharged Engine', 'Honda Sensing', 'Leather Interior', 'Wireless Charging', 'Premium Audio', 'Advanced Safety'],
    gallery: [
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Honda'
  },
  {
    id: 'nissan-altima',
    name: 'Nissan Altima Platinum 2024',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '160',
    description: 'The Altima offers a perfect balance of comfort, technology, and efficiency with Nissan\'s advanced safety features.',
    features: ['Variable Compression Engine', 'ProPILOT Assist', 'Zero Gravity Seats', 'Bose Audio', 'Remote Start', 'Intelligent AWD'],
    gallery: [
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Nissan'
  },
  {
    id: 'volkswagen-jetta',
    name: 'Volkswagen Jetta SEL Premium 2024',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '140',
    description: 'German engineering meets affordability in the Jetta, offering premium features and solid build quality.',
    features: ['Turbocharged Engine', 'Digital Cockpit', 'Leatherette Seating', 'Wireless Charging', 'IQ.DRIVE Safety', 'Premium Interior'],
    gallery: [
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Volkswagen'
  },
  {
    id: 'subaru-legacy',
    name: 'Subaru Legacy Limited XT 2024',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '165',
    description: 'All-wheel drive comes standard with the Legacy, offering confidence in all weather conditions with premium comfort.',
    features: ['Standard AWD', 'Turbocharged Engine', 'EyeSight Safety', 'Harman Kardon Audio', 'Leather Interior', 'Starlink System'],
    gallery: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Subaru'
  },
  {
    id: 'ford-fusion',
    name: 'Ford Fusion Titanium 2024',
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '155',
    description: 'The Fusion combines American style with global engineering, offering a comfortable and feature-rich driving experience.',
    features: ['EcoBoost Engine', 'Co-Pilot360', 'Sony Audio', 'Leather Seating', 'Adaptive Cruise Control', 'Sync 3 System'],
    gallery: [
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Ford'
  },
  {
    id: 'chevrolet-malibu',
    name: 'Chevrolet Malibu Premier 2024',
    image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '145',
    description: 'The Malibu offers a spacious interior, advanced technology, and efficient performance in an attractive package.',
    features: ['Turbocharged Engine', 'Chevrolet Safety Assist', 'Bose Audio', 'Leather Seating', 'Wireless Charging', 'Teen Driver'],
    gallery: [
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Chevrolet'
  },
  {
    id: 'mitsubishi-outlander',
    name: 'Mitsubishi Outlander SEL 2024',
    image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '135',
    description: 'The Outlander provides three-row seating, advanced safety features, and excellent warranty coverage.',
    features: ['7-Seater Layout', 'Super All-Wheel Control', 'Multi-Communication System', 'Forward Collision Mitigation', '10-Year Warranty', 'Cargo Space'],
    gallery: [
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Mitsubishi'
  },
  {
    id: 'jeep-compass',
    name: 'Jeep Compass Limited 2024',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '175',
    description: 'The Compass brings Jeep\'s legendary capability to the compact SUV segment with modern technology and comfort.',
    features: ['Trail Rated 4x4', 'Uconnect System', 'Leather Seating', 'Advanced Safety', 'Cargo Management', 'Selec-Terrain'],
    gallery: [
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Jeep'
  },
  {
    id: 'dodge-charger',
    name: 'Dodge Charger SXT 2024',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '185',
    description: 'American muscle meets modern technology in the Charger, offering performance and style in a full-size sedan.',
    features: ['V6 Engine', 'Uconnect 4C NAV', 'Sport Mode', 'Premium Audio', 'Performance Suspension', 'Aggressive Styling'],
    gallery: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Dodge'
  },
  {
    id: 'buick-regal',
    name: 'Buick Regal Sportback Essence 2024',
    image: 'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '165',
    description: 'The Regal Sportback combines European styling with American comfort, offering a unique blend of luxury and practicality.',
    features: ['Turbocharged Engine', 'Intelligent AWD', 'Bose Audio', 'Leather Seating', 'Driver Confidence Plus', 'Sportback Design'],
    gallery: [
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'economy',
    brand: 'Buick'
  }
];

export const exoticCars: Car[] = [
  {
    id: 'bugatti-chiron',
    name: 'Bugatti Chiron Super Sport 2024',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '15,000',
    description: 'The ultimate hypercar, the Bugatti Chiron represents the pinnacle of automotive engineering and luxury.',
    features: ['Quad-Turbo W16', '1500+ Horsepower', 'Carbon Fiber Body', 'Luxury Interior', 'Active Aerodynamics', 'Exclusive Design'],
    gallery: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Bugatti'
  },
  {
    id: 'koenigsegg-regera',
    name: 'Koenigsegg Regera 2024',
    image: 'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '12,000',
    description: 'Revolutionary hybrid hypercar with direct drive transmission and unmatched performance capabilities.',
    features: ['Hybrid V8 System', 'Direct Drive', 'Carbon Fiber Construction', 'Active Aerodynamics', 'Luxury Interior', 'Swedish Engineering'],
    gallery: [
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Koenigsegg'
  },
  {
    id: 'pagani-huayra',
    name: 'Pagani Huayra BC Roadster 2024',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '10,000',
    description: 'Italian artistry meets extreme performance in this handcrafted hypercar masterpiece.',
    features: ['AMG V12 Twin-Turbo', 'Carbon-Titanium Body', 'Active Aerodynamics', 'Handcrafted Interior', 'Art-Level Craftsmanship', 'Limited Production'],
    gallery: [
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Pagani'
  },
  {
    id: 'mclaren-senna',
    name: 'McLaren Senna GTR 2024',
    image: 'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '8,000',
    description: 'Track-focused hypercar named after the legendary Ayrton Senna, built for ultimate performance.',
    features: ['Twin-Turbo V8', 'Carbon Fiber Monocage', 'Active Aerodynamics', 'Track-Only Design', 'Racing Technology', 'Lightweight Construction'],
    gallery: [
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/707046/pexels-photo-707046.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'McLaren'
  },
  {
    id: 'ferrari-laferrari',
    name: 'Ferrari LaFerrari Aperta 2024',
    image: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '9,500',
    description: 'Ferrari\'s flagship hybrid hypercar combining F1 technology with open-top driving pleasure.',
    features: ['Hybrid V12 System', 'F1 Technology', 'Carbon Fiber Body', 'Active Aerodynamics', 'Racing Heritage', 'Limited Edition'],
    gallery: [
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Ferrari'
  },
  {
    id: 'lamborghini-centenario',
    name: 'Lamborghini Centenario Roadster',
    image: 'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '11,000',
    description: 'Limited edition hypercar celebrating Lamborghini\'s centenary with extreme performance and design.',
    features: ['V12 Engine', 'Carbon Fiber Body', 'Active Aerodynamics', 'Rear-Wheel Steering', 'Limited Production', 'Extreme Design'],
    gallery: [
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3954449/pexels-photo-3954449.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Lamborghini'
  },
  {
    id: 'aston-martin-valkyrie',
    name: 'Aston Martin Valkyrie 2024',
    image: 'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '13,000',
    description: 'F1-derived hypercar developed with Red Bull Racing, representing the ultimate in automotive technology.',
    features: ['V12 Hybrid', 'F1 Technology', 'Carbon Fiber Monocoque', 'Active Aerodynamics', 'Racing Suspension', 'Extreme Performance'],
    gallery: [
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Aston-Martin'
  },
  {
    id: 'rimac-nevera',
    name: 'Rimac Nevera 2024',
    image: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '7,500',
    description: 'The world\'s most powerful electric hypercar, setting new standards for performance and technology.',
    features: ['Quad Electric Motors', '1900+ Horsepower', 'All-Wheel Drive', 'Advanced AI', 'Carbon Fiber Body', 'Instant Torque'],
    gallery: [
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1638459/pexels-photo-1638459.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Rimac'
  },
  {
    id: 'gordon-murray-t50',
    name: 'Gordon Murray T.50 2024',
    image: 'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '14,000',
    description: 'The spiritual successor to the McLaren F1, featuring a central driving position and fan-assisted aerodynamics.',
    features: ['V12 Engine', 'Central Driving Position', 'Fan Aerodynamics', 'Manual Transmission', 'Lightweight Design', 'Pure Engineering'],
    gallery: [
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Gordon-Murray'
  },
  {
    id: 'hennessey-venom',
    name: 'Hennessey Venom F5 2024',
    image: 'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '6,500',
    description: 'American hypercar designed to break speed records with extreme aerodynamics and power.',
    features: ['Twin-Turbo V8', '1800+ Horsepower', 'Carbon Fiber Body', 'Active Aerodynamics', 'Speed Record Capable', 'American Engineering'],
    gallery: [
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Hennessey'
  },
  {
    id: 'czinger-21c',
    name: 'Czinger 21C 2024',
    image: 'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '8,500',
    description: '3D-printed hypercar with revolutionary manufacturing and tandem seating configuration.',
    features: ['Hybrid V8 System', '3D Printed Components', 'Tandem Seating', 'Active Aerodynamics', 'Revolutionary Design', 'Advanced Manufacturing'],
    gallery: [
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Czinger'
  },
  {
    id: 'devel-sixteen',
    name: 'Devel Sixteen 2024',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '5,000',
    description: 'Dubai-based hypercar with extreme power figures and aggressive styling, built for ultimate performance.',
    features: ['Quad-Turbo V16', '5000+ Horsepower', 'Extreme Design', 'Carbon Fiber Body', 'Dubai Engineering', 'Record Breaking Power'],
    gallery: [
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1077785/pexels-photo-1077785.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Devel'
  },
  {
    id: 'ssc-tuatara',
    name: 'SSC Tuatara 2024',
    image: 'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '7,000',
    description: 'American hypercar designed for speed records with advanced aerodynamics and extreme power.',
    features: ['Twin-Turbo V8', '1750 Horsepower', 'Carbon Fiber Body', 'Active Aerodynamics', 'Speed Record Holder', 'American Supercar'],
    gallery: [
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1070981/pexels-photo-1070981.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'SSC'
  },
  {
    id: 'apollo-intensa',
    name: 'Apollo Intensa Emozione 2024',
    image: 'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '6,000',
    description: 'Track-focused hypercar with extreme aerodynamics and naturally aspirated V12 power.',
    features: ['V12 Engine', 'Extreme Aerodynamics', 'Carbon Fiber Construction', 'Track-Only Design', 'Racing Technology', 'Limited Production'],
    gallery: [
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Apollo'
  },
  {
    id: 'lotus-evija',
    name: 'Lotus Evija 2024',
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600',
    dailyRate: '5,500',
    description: 'British electric hypercar with revolutionary design and extreme performance capabilities.',
    features: ['Quad Electric Motors', '2000 Horsepower', 'Carbon Fiber Body', 'Active Aerodynamics', 'British Engineering', 'Electric Performance'],
    gallery: [
      'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1719645/pexels-photo-1719645.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/909907/pexels-photo-909907.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    category: 'exotic',
    brand: 'Lotus'
  }
];

export const allCars = [...luxuryCars, ...sportsCars, ...suvCars, ...economyCars, ...exoticCars];