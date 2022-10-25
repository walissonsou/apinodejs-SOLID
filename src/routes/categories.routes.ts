import { Router } from 'express';
import CategoriesRepository from '../repository/CategoriesRepository'

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  CategoriesRepository({name, description});

  return res.status(201).send()
})

export default categoriesRoutes;
