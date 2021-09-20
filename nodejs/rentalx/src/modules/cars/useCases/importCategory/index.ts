import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const categoriesReposioty = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUseCase(categoriesReposioty);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCase,
);

export { importCategoryController };