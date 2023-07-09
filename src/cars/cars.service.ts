import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Camry' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Ford', model: 'F-150' },
    { id: uuid(), brand: 'Chevrolet', model: 'Silverado' },
    { id: uuid(), brand: 'Nissan', model: 'Altima' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const carFound = this.cars.find((car) => car.id === id);

    if (!carFound) throw new NotFoundException(`Car with id ${id} not found`);

    return carFound;
  }

  create(createCarDto: CreateCarDto) {
    const newCar = {
      id: uuid(),
      ...createCarDto,
    };

    this.cars.push(newCar);

    return newCar;
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    let carFound = this.findOneById(id);

    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carFound = {
          ...carFound,
          ...updateCarDto,
          id,
        };

        return carFound;
      }

      return car;
    });

    return carFound;
  }

  delete(id: string) {
    this.findOneById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
