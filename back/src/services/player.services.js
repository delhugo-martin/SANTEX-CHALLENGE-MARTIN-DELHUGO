import {
  createPlayerProvider,
  getPlayerByIdProvider,
  getPlayersProvider,
  getPlayerByShortNameProvider,
  getPlayerByAgeProvider,
  getPlayerByNationalityProvider,
  getPlayerByClubNameProvider,
  getPlayerByLeagueNameProvider
} from "../providers/player.providers.js";

export const createPlayerService = async (player) => {
  return await createPlayerProvider(player);
};

// BY ID
export const getPlayerByIdService = async (id) => {
  return await getPlayerByIdProvider(id);
};

// SHORT NAME
export const getPlayerByShortNameService = async ( player) => {
  return await getPlayerByShortNameProvider( player);
};

// NATIONALITY
export const getPlayerByNationalityService = async ( player) => {
    return await getPlayerByNationalityProvider(player);
  };

// AGE
export const getPlayerByAgeService = async ( player) => {
    return await getPlayerByAgeProvider(player);
  };

// CLUB NAME
export const getPlayerByClubNameService = async ( player) => {
    return await getPlayerByClubNameProvider(player);
  };

  // LEAGUE NAME
export const getPlayerByLeagueNameService = async ( player) => {
    return await getPlayerByLeagueNameProvider(player);
  };

// ALL
export const getPlayersService = async () => {
  return await getPlayersProvider();
};
