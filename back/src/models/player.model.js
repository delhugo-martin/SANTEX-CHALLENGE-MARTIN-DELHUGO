import {DataTypes} from 'sequelize'
import {pool} from '../config/dbConnect.js' // importamos la conexion para crear los modelos

// MODELOS DE LAS TABLAS DE LA DB
// modelo de los PLAYERS

export const playerModel = pool.define("players",{
    player_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
     // autoIncrement:true
    },
    fifa_version: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fifa_update_date: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    short_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    long_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    player_positions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    overall: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    potential: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    birthday: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    height_cm: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weigth_kg: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    league_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    club_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    jersey_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    
    nationality_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    preferred_foot: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pace: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    shooting: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    passing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dribbing: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defending: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    physic: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    mentality_penalties: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    player_face_url: {
      type: DataTypes.STRING,
    //allowNull: false,
    },
  
  })