import { v4 as uuidV4} from 'uuid'
import { ICategory } from "../model/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

let categories: ICategory[] = [];  

export function CreateRepository({description, name}: ICreateCategoryDTO){
  
    const category: ICategory ={
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    };

    categories.push(category)    
}

export function ListCategory():ICategory[] {  
  
  return categories 
}

export function findByName(name: string){ //  PRECISO RESOLVER A TIPAGEM DO FINDBYNAME 
  const category = categories.find((category) => category.name === name)  
  return category  
}
