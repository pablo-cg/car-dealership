import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Camry' },
    { id: 2, brand: 'Honda', model: 'Civic' },
    { id: 3, brand: 'Ford', model: 'F-150' },
    { id: 4, brand: 'Chevrolet', model: 'Silverado' },
    { id: 5, brand: 'Nissan', model: 'Altima' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    const carFound = this.cars.find((car) => car.id === id);

    if (!carFound) throw new NotFoundException(`Car with id ${id} not found`);

    return carFound;
  }
}
