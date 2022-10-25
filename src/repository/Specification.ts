import { v4 as uuidV4} from 'uuid'
import { ICategory } from "../model/category";
import { ISpecification } from "../model/specification";

interface ISpecificationDTO {
  name: string;
  description: string;
}

let specification: ISpecification[] = [];  

export function CreateSpecification({description, name}: ISpecificationDTO){
  
    const category: ICategory ={
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    };

    specification.push(category)    
}

export function ListSpecifications():ICategory[] {  
  
  return specification 
}

export function findByName(name: string){ 
  const category = specification.find((category) => category.name === name)    
  return category

}
