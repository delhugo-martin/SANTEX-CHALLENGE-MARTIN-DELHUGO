import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import  {userModel}  from "../models/user.model.js";

// CREATE USER
export const createUserProvider = async(user) => {
    try {
        const {username, password} = user
        const hashPass = await bcrypt.hash(password,4)
        console.log(hashPass)
        const newUser = await userModel.create({username,password:hashPass})
        return newUser
    } catch (error) {
        throw error;
    }
}

// LOGIN
export const loginUserProvider = async(userLogin) => {
    try {
        const {username, password} = userLogin
        // buscamos el usuario
        const loginUser = await userModel.findOne({where:{username:username}})
        if(!loginUser) throw new Error("El usuario no existe");
        
        // comparamos las contraseñas
        const isValid = await bcrypt.compare(password,loginUser.password)
        if(!isValid) throw new Error("Contraseña no valida");

        // generamos token
        const token = jwt.sign({id:loginUser.id, username:loginUser.username},"palabra_secreta"/*,{expiresIn:"1h"}*/)
        //la palabra secreta debe estar como variable de entorno en el servidor, ahora usamos esta

        //ahora le sacamos la contraseña a la info que devolvemos al cliente
        const {password:_, ...publicUser} = userLogin
        return token
    } catch (error) {
        throw error;
    }
}

//LOGOUT ???
export const logoutUserProvider = async()=>{
    const cookie = req.cookie("jwt")
    return cookie
}


// GET USER BY ID
export const getUserProvider = async(id) => {
    try {
        const getUser = await userModel.findByPk(id)
        return getUser
    } catch (error) {
        throw error;
    }
}