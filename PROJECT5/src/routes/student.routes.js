import { Router } from "express";
import { healthCtrl, studentCtrl } from "../controllers/p41.controllers";

const router = Router()

router.route("/health").get(healthCtrl)
router.route("/student").post(studentCtrl)


export default router