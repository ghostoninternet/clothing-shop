import Joi from 'joi'
import { OBJECT_ID_RULE } from '../utils/constants'

const purchasesSchema = Joi.object({
  userId: Joi.string().pattern(OBJECT_ID_RULE).required(),
  productId: Joi.string().pattern(OBJECT_ID_RULE).required(),
  productQuantity: Joi.number().integer().min(1).required(),
  purchasesDate: Joi.date().required(),
})