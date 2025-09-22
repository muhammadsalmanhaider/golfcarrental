export interface Car {
  id: string;
  name: string;
  image: string;
  dailyRate: string;
  description: string;
  features: string[];
  gallery: string[];
  category: 'luxury' | 'sports' | 'suv' | 'economy';
  brand: string;
  year: number;
  age: number;
  insurance: string;
  weeklyRate: string;
  monthlyRate: string;
  model: string;
  seats: number;
  color: string;
  engine: string;
  transmission: string;
  fuelType: string;
  mileage: string;
  doors: number;
  airConditioning: boolean;
  gps: boolean;
  bluetooth: boolean;
  usb: boolean;
  warranty: string;
  availability: boolean;
  screen: boolean;
  camera: boolean;
  soundSystem: string;
  navigation : boolean;
  airbags: boolean;
  luggage: number;
  

}