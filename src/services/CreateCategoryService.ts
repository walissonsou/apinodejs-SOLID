import { findByName , CreateRepository} from "../repository/CategoriesRepository"

interface ICreateRepository{
  name: string;
  description: string;
}
// o service é a camada perto do domínio.
// a rotas é o baixo nível ( mais perto do usuario)

export default function CreateRepositoryService({name, description}: ICreateRepository){ 
   
  const categoryAlreadyExists = findByName(name)
  if(categoryAlreadyExists){

    throw new Error("Deu ruim meu chapa, a categoria já existe")    
  }

  CreateRepository({name, description});
}
