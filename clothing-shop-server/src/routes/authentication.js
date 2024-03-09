import express from 'express'
import { AuthController } from '../controllers/AuthController.js'

export const authenticationRouter = express.Router()

authenticationRouter.post("/signup", AuthController.signup)
authenticationRouter.post("/login", AuthController.login)
authenticationRouter.post("/refresh-token", AuthController.refreshToken)
authenticationRouter.post("/logout", AuthController.logout)
