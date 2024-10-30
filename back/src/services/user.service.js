import { createUserProvider } from "../providers/user.provider.js";

export const createUserService = async(user) => {
    return await createUserProvider(user)
}