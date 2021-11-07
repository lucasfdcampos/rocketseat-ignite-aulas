import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRepositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvaiableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepositoryInMemory = new CarsRepositoryInMemory();
    listAvaiableCarsUseCase = new ListAvailableCarsUseCase(
      carsRepositoryInMemory,
    );
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Test',
      description: 'Car Test description',
      daily_rate: 0,
      license_plate: 'TEST-0001',
      fine_amount: 0,
      brand: 'Car Test Brand',
      category_id: 'category_id',
    });

    const cars = await listAvaiableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Test 2',
      description: 'Car Test description',
      daily_rate: 0,
      license_plate: 'TEST-0001',
      fine_amount: 0,
      brand: 'Car Test Brand 2',
      category_id: 'category_id',
    });

    const cars = await listAvaiableCarsUseCase.execute({
      brand: 'Car Test Brand 2',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Test 3',
      description: 'Car Test description',
      daily_rate: 0,
      license_plate: 'TEST-0001',
      fine_amount: 0,
      brand: 'Car Test Brand 3',
      category_id: 'category_id',
    });

    const cars = await listAvaiableCarsUseCase.execute({
      name: 'Car Test 3',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category', async () => {
    const car = await carsRepositoryInMemory.create({
      name: 'Car Test 3',
      description: 'Car Test description',
      daily_rate: 0,
      license_plate: 'TEST-0001',
      fine_amount: 0,
      brand: 'Car Test Brand 3',
      category_id: 'category_id',
    });

    const cars = await listAvaiableCarsUseCase.execute({
      category_id: 'category_id',
    });

    expect(cars).toEqual([car]);
  });
});
