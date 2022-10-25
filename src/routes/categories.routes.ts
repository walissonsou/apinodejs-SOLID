import { Router } from 'express';
import {ListCategory } from '../repository/CategoriesRepository'
import CreateRepositoryService from '../services/CreateCategoryService';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body; 

  CreateRepositoryService({name, description})
  
  return res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
  const all = ListCategory(); 

  return res.json(all)
})


export default categoriesRoutes;
