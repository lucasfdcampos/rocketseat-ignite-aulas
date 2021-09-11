import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log('Postgres - findByName', name);
    return null;
  }

  list(): Category[] {
    console.log('Postgres - list');
    return null;
  }

  create({ name, description }: ICreateCategoryDTO): void {
    console.log('Postgres - create', name, description);
  }
}

export { PostgresCategoriesRepository };
