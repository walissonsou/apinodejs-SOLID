import { v4 as uuidV4} from 'uuid'
import { ICategory } from "../model/category";

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export default function CategoriesRepository({description, name}: ICreateCategoryDTO){
  const categories: ICategory[] = [];  
    const category: ICategory ={
      id: uuidV4(),
      name,
      description,
      created_at: new Date(),
    };

    categories.push(category)

    return categories.push(category)
  }



// class CategoriesRepository {
//   private categories: ICategory[] = [];    

//   constructor() {
//     this.categories = [];
//     }  

//     create({description, name}: ICategory): void {
//       const category: ICategory = { 
//         id: uuidV4(),
//         name,
//         description,
//         created_at: new Date(),
//       };
    
//       this.categories.push(category)
//     }
// }

// export { CategoriesRepository }
