import { createUserProvider, getUserProvider } from "../providers/user.provider.js";

export const createUserService = async(user) => {
    return await createUserProvider(user)
}

export const getUserService = async(id) =>{
    return await getUserProvider(id)
}