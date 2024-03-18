/**
 * orders Schema Design:
 * +) userId: Id of an user
 * +) productId: The _id field of products Schema
 * +) productQuantity: The number of products that was bought
 * +) orderDate: The date that the user buy the product
 * +) orderStatus: The status of the order
 */

import Joi from 'joi'
import { OBJECT_ID_RULE, MONEY_FORMAT_VND } from '../utils/constants'

const ordersSchema = Joi.object({
  userId: Joi.string().pattern(OBJECT_ID_RULE).required(),
  productId: Joi.string().pattern(OBJECT_ID_RULE).required(),
  productQuantity: Joi.number().integer().min(1).required(),
  orderDate: Joi.date().required(),
  orderStatus: Joi.string().required(),
})