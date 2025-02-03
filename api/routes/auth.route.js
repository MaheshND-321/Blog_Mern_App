import exprees from "express";
import { signup } from "../controlers/auth.controler.js";

const router = exprees.Router();

router.post('/signup',signup);

export default router;