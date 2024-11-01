import { Router } from "express";
import { createUserService, getUserService } from "../services/user.service.js";
import { createPlayerService, getPlayerService } from "../services/player.services.js";


const router = Router();

// USER ROUTES ====================================================
// GET USER
router.get("/user/:id" , async (req,res)=>{
  const id = req.params.id
  console.log(res.headersSent);  


  try {
    const getUser = await getUserService(req.params.id)
    res.status(201).json(getUser)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

// POST USER
router.post("/user", async (req, res) => {
  console.log(res.headersSent);
  try {
    const { username, password } = req.body;
    const newUser = await createUserService({ username, password });
    res.status(201).json({newUser});
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});


// PLAYER ROUTES ====================================================

// GET PLAYER
router.get("/player/:player_id" , async (req,res)=>{
  console.log(res.headersSent);  
  try {
    const getPlayer = await getPlayerService(req.params.player_id)
    res.status(201).json(getPlayer)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
});

// POST PLAYER
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
      player_face_url
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
      player_face_url

     });
    res.status(201).json({newPlayer});
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
});

export default router

