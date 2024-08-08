enum Transmission {
  MANUAL = 'MANUAL',
  AUTOMATIC = 'AUTOMATIC',
}

enum FuelType {
  DIESEL = 'DIESEL',
  ELECTRIC = 'ELECTRIC',
  GASOLINE = 'GASOLINE',
  HYBRID = 'HYBRID',
}

enum BodyType {
  SEDAN = 'Sedan',
  COUPE = 'Coupe',
  HATCHBACK = 'Hatchback',
  SUV = 'SUV',
  CONVERTIBLE = 'Convertible',
}

enum AdditionalFeatures {
  Bluetooth = 'Bluetooth',
  NAVIGATION_SYSTEM = 'Navigation System',
  HEATED_SEATS = 'Heated Seats',
  SUNROOF = 'Sunroof',
  REARVIEW_CAMERA = 'Rearview Camera',
  CLIMATE_CONTROL = 'Climate Control',
}

export interface ICar {
  id: number;
  brand: string;
  model: string;
  year: number;
  body_type: BodyType;
  engine: string;
  fuel_type: FuelType;
  mileage: number;
  color: string;
  transmission: Transmission;
  price: number;
  additional_features: AdditionalFeatures[];
}
