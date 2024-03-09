import express from 'express'
import { productRoute } from './product.js'
import { authenticationRouter } from './authentication.js'

export const router = express.Router()

router.use('/auth', authenticationRouter)
router.use('/product', productRoute)