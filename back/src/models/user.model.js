import { DataTypes } from "sequelize";
import { pool } from "../config/dbConnect.js"; // importamos la conexion para crear los modelos

// MODELOS DE LAS TABLAS DE LA DB
export const userModel = pool.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
