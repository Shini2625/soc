import { Router } from "express";
import verifyJWT from "../middlewares/auth.middlewares.js";
import { healthCtrl, studentCtrl } from "../controllers/p41.controllers.js";
import { loginCtrl } from "../controllers/login.controllers.js";

const router = Router()

router.route("/health").get(healthCtrl)
router.route("/student").post(verifyJWT, studentCtrl)
router.route("/login").post( loginCtrl)



export default router