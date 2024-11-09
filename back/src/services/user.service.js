import { createUserProvider, getUserProvider, loginUserProvider, logoutUserProvider } from "../providers/user.provider.js";
import bcrypt from "bcrypt"

export const createUserService = async(user) => {
    return await createUserProvider(user)
}

export const getUserService = async(id) =>{
    return await getUserProvider(id)
}

export const loginUserService = async(user) =>{
    return await loginUserProvider(user)
}

export const logoutUserService = async(user) =>{
    return await logoutUserProvider(user)
}