import { Car } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CARS_SEED: Car[] = [
  { id: uuid(), brand: 'Toyota', model: 'Camry' },
  { id: uuid(), brand: 'Honda', model: 'Civic' },
  { id: uuid(), brand: 'Ford', model: 'F-150' },
  { id: uuid(), brand: 'Chevrolet', model: 'Silverado' },
  { id: uuid(), brand: 'Nissan', model: 'Altima' },
];
