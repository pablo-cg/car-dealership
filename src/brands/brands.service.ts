import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class BrandsService {
  private brands: Brand[] = [
    // { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...createBrandDto,
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const foundBrand = this.brands.find((brand) => brand.id === id);

    if (!foundBrand)
      throw new NotFoundException(`Brand with id: ${id} not found`);

    return foundBrand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let foundBrand = this.findOne(id);

    this.brands = this.brands.map((brand) => {
      if (brand.id === id) {
        foundBrand = {
          ...foundBrand,
          ...updateBrandDto,
          updatedAt: new Date().getTime(),
        };

        return foundBrand;
      }

      return brand;
    });

    return foundBrand;
  }

  remove(id: string) {
    this.findOne(id);
    this.brands = this.brands.filter((brand) => brand.id !== id);
  }

  seedBrands(seed: Brand[]) {
    this.brands = seed;
  }
}
