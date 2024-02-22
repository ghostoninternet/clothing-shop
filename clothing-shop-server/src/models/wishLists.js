import Joi from 'joi'
import { OBJECT_ID_RULE } from '../utils/constants'

const wishListsSchema = Joi.object({
  _id: Joi.string().required().pattern(OBJECT_ID_RULE),
  productId: Joi.string().required().max(6),
  userId: Joi.string().required().pattern(OBJECT_ID_RULE),
})