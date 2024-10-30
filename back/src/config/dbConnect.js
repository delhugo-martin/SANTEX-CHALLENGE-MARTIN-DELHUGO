//vamos a usar sequelize, por lo tanto lo importamos
import { Sequelize } from "sequelize";

// configuraciones de variables y puertos
export const { PORT = 3000 } = process.env;

//esta configuracion debe ser la misma en docker-compose
const infoDb = {
  host: "localhost",
  user: "root",
  password: "1317",
  database: "db_challenge", //nombre de la db que uso localmente
//database: "fifa_local"   para docker
 
};

// conexion a la db
export const pool = new Sequelize(
  infoDb.database,
  infoDb.user,
  infoDb.password,
  {
    host: infoDb.host,
    dialect: "mysql",
  }
);

