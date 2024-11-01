import { DataTypes } from "sequelize";
import { pool } from "../config/dbConnect.js"; // importamos la conexion para crear los modelos

// MODELOS DE LAS TABLAS DE LA DB

// modelo del USER
export const userModel = pool.define("user", {
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

