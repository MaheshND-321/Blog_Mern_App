import exprees from "express";
import { signup } from "../controlers/auth.controler.js";
import { signin } from "../controlers/auth.controler.js";

const router = exprees.Router();

router.post('/signup',signup);
router.post('/signin',signin);

export default router;