import { response, Router } from "express";
import { createUserService } from "../services/user.service.js";

const router = Router();

router.get("/user");

router.post("/user", async (req, res) => {
  try {
    const { username, password } = req.body;
    const response = await createUserService({ username, password });
    res.status(201).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  res.send(response);
});


export default router