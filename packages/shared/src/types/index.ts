export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  role: 'PETANI' | 'SELEP' | 'ADMIN';
  isActive: boolean;
}

export interface Selep {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  capacityKg: number;
  pricePerKg: number;
  isActive: boolean;
  operatingHours?: string;
  contactPhone?: string;
}

export interface BookingCreateDto {
  selepId: string;
  gabahKg: number;
  bookingDate: string;
  notes?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}