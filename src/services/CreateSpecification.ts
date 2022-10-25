import { findByName , CreateSpecification} from "../repository/Specification"

interface ICreateRepository{
  name: string;
  description: string;
}

export default function CreateSpecificationService({name, description}: ICreateRepository){ 
   
  const specificationAlreadyExists = findByName(name)
  if(specificationAlreadyExists){

    throw new Error("Deu ruim meu chapa, a categoria já existe")    
  }

  CreateSpecification({name, description});
}
