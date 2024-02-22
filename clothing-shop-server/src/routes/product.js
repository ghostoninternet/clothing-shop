import express from 'express'

export const productRoute = express.Router()

productRoute.get('/', controller.getAllProduct)
productRoute.get('/:id', controller.getProduct)