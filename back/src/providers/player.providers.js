import  {playerModel}  from "../models/player.model.js";


export const createPlayerProvider = async(userOptions) => {
    try {
        const newPlayer = await playerModel.create(userOptions)
        return newPlayer
    } catch (error) {
        throw error;
    }
}


export const getPlayerProvider = async(player_id) => {
    try {
        const getUser = await playerModel.findByPk(player_id)
        return getUser
    } catch (error) {
        throw error;
    }
}