import { Router } from 'express';
import {CreateRepository, findByName, ListCategory } from '../repository/CategoriesRepository'

const categoriesRoutes = Router();

categoriesRoutes.post("/", (req, res) => {
  const { name, description } = req.body;

  const categoryAlreadyExists = findByName(name)

  if(categoryAlreadyExists){
    return res.status(400).json({error:"Category already existis"})
  }

  CreateRepository({name, description});

  return res.status(201).send()
})

categoriesRoutes.get("/", (req, res) => {
  const all = ListCategory(); 

  return res.json(all)
})


export default categoriesRoutes;
