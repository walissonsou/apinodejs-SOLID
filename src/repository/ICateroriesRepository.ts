import { ICategory } from "../model/category";

export interface ICategoriesRepository{
  findByName(name: string): ICategory;
  list(): ICategory[];
  CreateRepository(name: string, description: string): ICategory;
}
