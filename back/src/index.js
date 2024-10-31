import express from "express";
import { initdb, PORT } from "./config/dbConnect.js";
import router from "./routes/index.routes.js";
import bodyParser from "body-parser";

const app = express();

// middlewares
app.use(express.json());
app.use(bodyParser.json());

//rutas
app.use(router);

// Este async es medio raro che :/
(async () => {
  await initdb();
  app.listen(PORT, () => console.log("SERVER ON PORT 3000"));
})();

//13:37
