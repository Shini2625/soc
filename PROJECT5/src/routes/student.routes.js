import { Router } from "express";
import jwt from 'jsonwebtoken';
import { healthCtrl, studentCtrl } from "../controllers/p41.controllers.js";
import { loginCtrl } from "../controllers/login.controllers.js";

const router = Router()

router.route("/health").get(healthCtrl)
router.route("/student").post(studentCtrl)
router.route("/login").post(loginCtrl)
router.route("/student").post(verifyJWT, studentCtrl);


export default router