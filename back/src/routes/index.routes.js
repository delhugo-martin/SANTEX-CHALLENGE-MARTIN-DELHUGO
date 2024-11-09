import { Router } from "express";
import { createUserService, getUserService , loginUserService} from "../services/user.service.js";
import {  
  createPlayerService,
  getPlayerByPlayerIdService,
  getPlayerByIdService,
  getPlayersService,
  getPlayerByShortNameService,
  getPlayerByAgeService,
  getPlayerByClubNameService,
  getPlayerByNationalityService,
  getPlayerByLeagueNameService,
  putPlayerByIdService,
} from "../services/player.services.js";

const router = Router();

// USER ROUTES ====================================================
// LOGIN USER
router.post("/login", async (req, res) => {
    //console.log(res.headersSent);
  try {
    const { username, password } = req.body;
    //console.log({username,password})
    const loginUser = await loginUserService({ username, password });

    res.cookie("jwt", loginUser,{httpOnly:true, maxAge:24*60*60*1000} )
    res.status(200).json({ loginUser });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
});


// POST USER
router.post("/user", async (req, res) => {
  try {
    const { username, password } = req.body;
    const loginUser = await createUserService({ username, password });
    res.status(201).json({ loginUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


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


// PLAYER ROUTES ====================================================

// GET ALL PLAYERS
router.get("/players", async (req, res) => {
  try {
    const getPlayer = await getPlayersService();
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR PLAYER ID
router.get("/player/player_id/:player_id", async (req, res) => {

  try {
    const getPlayer = await getPlayerByPlayerIdService(req.params.player_id);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR ID
router.get("/player/id/:id", async (req, res) => {
  try {
    const getPlayer = await getPlayerByIdService(req.params.id);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR ID
router.get("/player/id/:id", async (req, res) => {
  try {
    const getPlayer = await getPlayerByPlayerIdService(req.params.player_id);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// GET PLAYER POR SHORT NAME
router.get(`/player/short_name/:short_name`, async (req, res) => {
  try {
    const getPlayer = await getPlayerByShortNameService(req.params.short_name);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// GET PLAYER POR CLUB NAME
router.get(`/player/club_name/:club_name`, async (req, res) => {
  try {
    const getPlayerLeague = await getPlayerByClubNameService(
      req.params.club_name
    );
    res.status(201).json(getPlayerLeague);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR LEAGUE NAME
router.get(`/player/league_name/:league_name`, async (req, res) => {
  try {
    const getPlayerLeague = await getPlayerByLeagueNameService(
      req.params.league_name
    );
    res.status(201).json(getPlayerLeague);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR NATIONALITY
router.get(`/player/nationality/:nationality`, async (req, res) => {
  try {
    const getPlayer = await getPlayerByNationalityService(
      req.params.nationality
    );
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET PLAYER POR AGE
router.get(`/player/age/:age`, async (req, res) => {
  try {
    const getPlayer = await getPlayerByAgeService(req.params.age);
    res.status(201).json(getPlayer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST PLAYER ====================================================
router.put("/player/put", async (req, res) => {
  try {
    console.log(req.body)
    const {
      id,
      league_name,
      club_name,
      pace,
      shooting,
      passing,
      //dribbing,
      defending,
      physic,
      mentality_penalties
    } = req.body;

    const putPlayer = await putPlayerByIdService({
      id,
      league_name,
      club_name,
      pace,
      shooting,
      passing,
      //dribbing,
      defending,
      physic,
      mentality_penalties
    });
    res.status(201).json({ putPlayer });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
