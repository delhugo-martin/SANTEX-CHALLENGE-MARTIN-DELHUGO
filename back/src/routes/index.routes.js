import { response, Router } from "express";
import { createUserService, getUserService } from "../services/user.service.js";

const router = Router();

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


export default router