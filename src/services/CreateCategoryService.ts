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

// o service nao tem que conhecer o tipo do repositorio, ele é o alto nivel, 
// oé a camada perto do domínio.
// rostas é o baixo nível ( mais perto do usuario)

export default function CreateRepositoryService({name, description}: ICreateRepository){ 
   
  const categoryAlreadyExists = findByName(name)
  if(categoryAlreadyExists){

    throw new Error("Category already existis")    
  }

  CreateRepository({name, description});
}
