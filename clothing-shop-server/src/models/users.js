import Joi from 'joi'
import { OBJECT_ID_RULE, MONEY_FORMAT_VND } from '../utils/constants'

const usersSchema = Joi.object({
  _id: Joi.string().required().pattern(OBJECT_ID_RULE),
  email: Joi.string().email().required(),
  password: Joi.string().required().pattern(new RegExp("^\S{8,}$")),
  refreshToken: Joi.string().required(),
  boughtProducts: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE)),
  currentInCartProducts: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE)),
  currentWishList: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE)),
  moneySpent: Joi.string().required().pattern(new RegExp(MONEY_FORMAT_VND)),
})