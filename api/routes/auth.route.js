import exprees from "express";
import { signup, signin, google } from "../controlers/auth.controler.js";

const router = exprees.Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.post('/google', google);

export default router;