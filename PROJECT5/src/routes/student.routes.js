import { Router } from "express";
import { healthCtrl, studentCtrl } from "../controllers/p41.controllers.js";
import { loginCtrl } from "../controllers/login.controllers.js";

const router = Router()

router.route("/health").get(healthCtrl)
router.route("/student").post(studentCtrl)
router.route("/login").get(loginCtrl)


export default router