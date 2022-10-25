import { Router } from 'express';
import { v4 as uuidV4} from 'uuid'
import { ICategory } from '../model/category';

const categoriesRoutes = Router();

const categories: ICategory[] = [];

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const category: ICategory = { 
    id: uuidV4(),
    name,
    description,
    created_at: new Date(),
  };

  categories.push(category)

  return res.status(201).json({category})
})

export default categoriesRoutes;
