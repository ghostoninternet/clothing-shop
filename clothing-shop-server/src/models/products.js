import Joi from 'joi'
import { OBJECT_ID_RULE, MONEY_FORMAT_VND } from '../utils/constants'

const productsSchema = Joi.object({
  _id: Joi.string().required().pattern(OBJECT_ID_RULE),
  productId: Joi.string().required().max(6),
  title: Joi.string().required(),
  customerType: Joi.string().required(),
  productType: Joi.string().required(),
  collectionType: Joi.string().required(),
  price: Joi.string().required().pattern(new RegExp(MONEY_FORMAT_VND)),
  limitedPrice: Joi.string().pattern(new RegExp(MONEY_FORMAT_VND)),
  limitedDate: Joi.string(),
  colorCode: Joi.array().items(Joi.string().required()),
  sizeCode: Joi.array().items(Joi.string().required()),
  mainImage: Joi.array().items(Joi.string().required()),
  rateStar: Joi.number().integer().min(0).max(5).required(),
  rateQuantity: Joi.number().integer().min(0).required(),
  image: Joi.array().items(Joi.string().required()),
  note: Joi.string().required(),
  description: Joi.string().required(),
  productStatus: Joi.string(),
  quantity: Joi.array().items(Joi.array().items(Joi.number().integer().min(0).required())),
  soldQuantity: Joi.array().items(Joi.array().items(Joi.number().integer().min(0).required())),
  overview: Joi.array().items(Joi.string().required()),
  material: Joi.array().items(Joi.string().required()),
})