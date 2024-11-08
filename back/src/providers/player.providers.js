import { playerModel } from "../models/player.model.js";

// CREATE
export const createPlayerProvider = async (userOptions) => {
  try {
    const newPlayer = await playerModel.create(userOptions);
    return newPlayer;
  } catch (error) {
    throw error;
  }
};

// GET ALL
export const getPlayersProvider = async () => {
  try {
    const getUsers = await playerModel.findAll();
    return getUsers;
  } catch (error) {
    throw error;
  }
};

// GET BY SHORT NAME
export const getPlayerByShortNameProvider = async (short_name_value) => {
  try {
    const getUsers = await playerModel.findAll({
      where: {
        short_name: short_name_value,
      },
    });
    return getUsers;
  } catch (error) {
    throw error;
  }
};

// GET BY NATIONALITY
export const getPlayerByNationalityProvider = async (info) => {
  try {
    const getUsers = await playerModel.findAll({
      where: {
        nationality: info,
      },
    });
    return getUsers;
  } catch (error) {
    throw error;
  }
};

// GET BY AGE
export const getPlayerByAgeProvider = async (info) => {
  try {
    const getUsers = await playerModel.findAll({
      where: {
        age: info,
      },
    });
    return getUsers;
  } catch (error) {
    throw error;
  }
};

// GET BY CLUB NAME
export const getPlayerByClubNameProvider = async (club_name_value) => {
  try {
    const getPlayer = await playerModel.findAll({
      where: {
        club_name: club_name_value,
      },
    });
    return getPlayer;
  } catch (error) {
    throw error;
  }
};

// GET BY LEAGUE NAME
export const getPlayerByLeagueNameProvider = async (league_name_value) => {
    try {
      const getPlayer = await playerModel.findAll({
        where: {
          league_name: league_name_value,
        },
      });
      return getPlayer;
    } catch (error) {
      throw error;
    }
  };

// GET BY PLAYER ID
export const getPlayerByPlayerIdProvider = async (player_id_value) => {
  try {
    const getUser = await playerModel.findAll({       
      where: {
      player_id: player_id_value,
    },});
    return getUser;
  } catch (error) {
    throw error;
  }
};


// GET BY ID
export const getPlayerByIdProvider = async (id_value) => {
  try {
    const getUser = await playerModel.findAll({       
      where: {
      id: id_value,
    },});
    return getUser;
  } catch (error) {
    throw error;
  }
};

// PUT BY ID
export const putPlayerByIdProvider = async (player) => {
  try {
      const putUser = await playerModel.update(
      {
          // info de club
          club_name: player.club_name,
          league_name: player.league_name,
          // atributos del jugador
          pace: player.pace,
          shooting: player.shooting,
          passing: player.passing,
          //dribbling: player.dribbling,
          defending: player.defending,
          physic: player.physic,
          mentality_penalties: player.mentality_penalties,
     
      },
      { where: {id:player.id }}
    );
    return putUser;
  } catch (error) {
    throw error;
  }
};


