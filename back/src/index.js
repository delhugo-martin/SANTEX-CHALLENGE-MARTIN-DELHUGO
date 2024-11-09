import express from "express";
import { initdb, PORT } from "./config/dbConnect.js";
import router from "./routes/index.routes.js";
import bodyParser from "body-parser";
import cors from 'cors'
import cookieParser from "cookie-parser";

const app = express();

// middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({origin:'http://localhost:4200', credentials:true}))
app.use(cookieParser())


//rutas
app.use(router);

// Este async es medio raro che :/
(async () => {
  await initdb();
  app.listen(PORT, () => console.log("SERVER ON PORT 3000"));
})();

//13:37


/* ERRORES EN LA DB

- Row import failed with error: ("Field 'createdAt' doesn't have a default value", 1364)
ALTER TABLE players MODIFY createdAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE players MODIFY updatedAt DATETIME NULL DEFAULT CURRENT_TIMESTAMP;


- Row import failed with error: ("Incorrect integer value: '' for column 'pace' at row 1", 1366)



// objeto de prueba para el body

{
  "player_id": 1,
  "fifa_version": "15",
  "fifa_update_date": "2014-09-18",
  "short_name": "L. Messi",
  "long_name": "Lionel Andrés Messi Cuccittini",
  "player_positions": "CF",
  "overall": 93,
  "potential": 95,
  "age": 27,
  "dob": "1987-06-24",
  "height_cm": 169,
  "weigth_kg": 67,
  "league_name": "La Liga",
  "club_name": "FC Barcelona",
  "club_jersey_number": 10,
  "nationality_name": "Argentina",
  "preferred_foot": "Left",
  "pace": 93,
  "shooting": 89,
  "passing": 86,
  "dribbing": 96,
  "defending": 27,
  "physic": 63,
  "mentality_penalties": 76,
  "player_face_url": "https://cdn.sofifa.net/players/158/023/15_120.png"
}


*/
