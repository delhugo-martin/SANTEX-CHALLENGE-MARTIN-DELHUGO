import express from "express";
import { PORT } from "./config/dbConnect.js";
import router from './routes/index.routes.js'

const app = express();

// middlewares
app.use(express.json());

//rutas
app.use(router)

app.listen(PORT, () => console.log("SERVER ON PORT 3000"));
