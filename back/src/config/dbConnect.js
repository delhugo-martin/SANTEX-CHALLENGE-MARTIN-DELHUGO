// vamos a usar sequelize, por lo tanto lo importamos
import { Sequelize } from "sequelize";

// importamos el modelo para crear las tablas en la db en caso de que no lo estén
// import {userModel} from '../models/user.model.js'

// configuraciones de variables y puertos
export const { PORT = 3000 } = process.env;

//datos de configuracion, deben ser los mismos en docker-compose
const infoDb = {
  host: "localhost",
  user: "root",
  password: "1317",
  database: "db_challenge_delhugo", //nombre de la db que uso localmente
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

// persistencia a la db
// para esto debemos mantener la conexion
// y crear las tablas en caso de ser necesario

export const initdb = async(req,res) => {
  try {
    await pool.authenticate(); // persistencia de conexion
    console.log('persistencia establecida')
    await pool.sync({force:false})
    console.log('tablas creadas')

  } catch (error) {
    console.log('hubo un error: ', error)
  }

}

