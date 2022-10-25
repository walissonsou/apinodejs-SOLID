import { findByName , CreateRepository} from "../repository/CategoriesRepository"

interface ICreateRepository{
  name: string;
  description: string;
}
/* 
- definir o tipo de retorno
- alterar o retorno de erro
- acessar o repositorio
- retornar algo

*/

export default class CreateRepositoryService{
  execute({name, description}: ICreateRepository) { 
   
  const categoryAlreadyExists = findByName(name)

  if(categoryAlreadyExists){
    // return res.status(400).json({error:"Category already existis"
 // como eu nao tenho acesso ao response, tenho que fazer um throw ( excessão, é um erro que vai ser lançado pra quem fez a requisição) 
    throw new Error("Category already existis")  
  
  }

  CreateRepository({name, description});
  }
}
