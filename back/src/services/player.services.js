import { createPlayerProvider, getPlayerProvider } from "../providers/player.providers.js";

export const createPlayerService = async(user) => {
    return await createPlayerProvider(user)
}

export const getPlayerService = async(id) =>{
    return await getPlayerProvider(id)
}