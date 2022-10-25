import express from 'express'; 
import {categoriesRoutes, specificationRoutes} from './routes/categories.routes'

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes)
app.use("/categorieslist", categoriesRoutes)
app.use("/spefication", specificationRoutes)
app.use("/speficationlist", specificationRoutes)
app.listen(3333, () => console.log("Server is running!"));
