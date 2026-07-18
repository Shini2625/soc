import { Router } from "express";
import { healthCtrl, registerCtrl } from "../controllers/p41.controllers.js";
import verifyJWT from "../middlewares/auth.middlewares.js"
import { loginCtrl, refreshAccessTokenCtrl } from "../controllers/login.controllers.js";

const router = Router()

router.route("/health").get(healthCtrl)
router.route("/register").post(registerCtrl)
router.route("/login").post( loginCtrl)
router.route("/refresh-token").post(refreshAccessTokenCtrl)




export default router