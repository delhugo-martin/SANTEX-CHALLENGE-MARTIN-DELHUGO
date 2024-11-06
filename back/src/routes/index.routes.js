import { Router } from "express";
import { createUserService, getUserService } from "../services/user.service.js";
import {
  createPlayerService,
  getPlayerByIdService,
  getPlayersService,
  getPlayerByShortNameService,
  getPlayerByAgeService,
  getPlayerByClubNameService,
  getPlayerByNationalityService,
  getPlayerByLeagueNameService
} from "../services/player.services.js";

const router = Router();

// USER ROUTES ====================================================
// GET USER
router.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  console.log(res.headersSent);

  try {
    const getUser = await getUserService(req.params.id);
    res.status(201).json(getUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST USER
router.post("/user", async (req, res) => {
  console.log(res.headersSent);
  try {
    const { username, password } = req.body;
    const newUser = await createUserService({ username, password });
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PLAYER ROUTES ====================================================

// GET ALL PLAYERS
router.get("/players", async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayer = await getPlayersService();
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR ID
router.get("/player/player_id/:player_id", async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayer = await getPlayerByIdService(req.params.player_id);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR SHORT NAME
router.get(`/player/short_name/:short_name`, async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayer = await getPlayerByShortNameService(req.params.short_name);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET PLAYER POR CLUB NAME
router.get(`/player/club_name/:club_name`, async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayerLeague = await getPlayerByClubNameService(req.params.club_name);
    res.status(201).json(getPlayerLeague);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR LEAGUE NAME
router.get(`/player/league_name/:league_name`, async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayerLeague = await getPlayerByLeagueNameService(req.params.league_name);
    res.status(201).json(getPlayerLeague);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR NATIONALITY
router.get(`/player/nationality/:nationality`, async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayer = await getPlayerByNationalityService(req.params.nationality);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET PLAYER POR AGE
router.get(`/player/age/:age`, async (req, res) => {
  console.log(res.headersSent);
  try {
    const getPlayer = await getPlayerByAgeService(req.params.age);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// POST PLAYER ====================================================
router.post("/player", async (req, res) => {
  console.log(res.headersSent);
  try {
    const {
      player_id,
      fifa_version,
      fifa_update_date,
      short_name,
      long_name,
      player_positions,
      overall,
      potential,
      age,
      dob,
      height_cm,
      weigth_kg,
      league_name,
      club_name,
      club_jersey_number,
      nationality_name,
      preferred_foot,
      pace,
      shooting,
      passing,
      dribbing,
      defending,
      physic,
      mentality_penalties,
      player_face_url,
    } = req.body;

    const newPlayer = await createPlayerService({
      player_id,
      fifa_version,
      fifa_update_date,
      short_name,
      long_name,
      player_positions,
      overall,
      potential,
      age,
      dob,
      height_cm,
      weigth_kg,
      league_name,
      club_name,
      club_jersey_number,
      nationality_name,
      preferred_foot,
      pace,
      shooting,
      passing,
      dribbing,
      defending,
      physic,
      mentality_penalties,
      player_face_url,
    });
    res.status(201).json({ newPlayer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
