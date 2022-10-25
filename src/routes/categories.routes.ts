import { Router } from 'express';
import {ListCategory } from '../repository/CategoriesRepository'
import { ListSpecifications } from '../repository/Specification';
import CreateRepositoryService from '../services/CreateCategoryService';
import CreateSpecificationService from '../services/CreateSpecification';

export const categoriesRoutes = Router();
export const specificationRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body; 

  CreateRepositoryService({name, description})
  
  return res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
  const all = ListCategory(); 

  return res.json(all)
})

specificationRoutes.post("/", ( req, res) => {
  const { name, description } = req.body; 

  CreateSpecificationService({name, description})

  return res.status(201).send()
})

specificationRoutes.get("/", (req, res) => {
  const all = ListSpecifications(); 

  return res.json(all)
})
