import { userModel } from "../models/user.model.js";

export const createUserProvider = async(userOptions) => {
    try {
        const newUser = await userModel.create(userOptions)
        return newUser
    } catch (error) {
        throw error;
    }
}

export const getUserProvider = async(id) => {
    try {
        const getUser = await userModel.findByPk(id)
        return getUser
    } catch (error) {
        throw error;
    }
}