import Joi from 'joi'
import { OBJECT_ID_RULE, MONEY_FORMAT_VND } from '../utils/constants'

const ordersSchema = Joi.object({
  _id: Joi.string().required().pattern(OBJECT_ID_RULE),
  userId: Joi.string().required().pattern(OBJECT_ID_RULE),
  productId: Joi.string().required().max(6),
  colorCode: Joi.string().required(),
  sizeCode: Joi.string().required(),
  productPrice: Joi.string().required().pattern(new RegExp(MONEY_FORMAT_VND)),
  productQuantity: Joi.number().integer().min(1).required(),
  orderDate: Joi.date().required(),
})