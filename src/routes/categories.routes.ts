import { Router } from 'express';
import {CreateRepository, findByName, ListCategory } from '../repository/CategoriesRepository'

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body; 

  return res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
  const all = ListCategory(); 

  return res.json(all)
})


export default categoriesRoutes;
