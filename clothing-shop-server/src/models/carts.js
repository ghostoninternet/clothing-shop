import Joi from 'joi'
import { OBJECT_ID_RULE } from '../utils/constants'

const cartsSchema = Joi.object({
  _id: Joi.string().required().pattern(OBJECT_ID_RULE),
  userId: Joi.string().required().pattern(OBJECT_ID_RULE),
  productId: Joi.string().required().max(6),
  colorCode: Joi.string().required(),
  sizeCode: Joi.string().required(),
  productQuantity: Joi.number().integer().min(1).required(),
})