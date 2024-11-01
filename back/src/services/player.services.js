import { createPlayerProvider, getPlayerProvider } from "../providers/player.providers.js";

export const createPlayerService = async(player) => {
    return await createPlayerProvider(player)
}

export const getPlayerService = async(id) =>{
    return await getPlayerProvider(id)
}