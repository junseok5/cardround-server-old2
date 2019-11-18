import express from "express"
import * as authCtrl from "./authCtrl"

const router = express.Router()

router.post("/register/local", authCtrl.localLogin)

export default router
