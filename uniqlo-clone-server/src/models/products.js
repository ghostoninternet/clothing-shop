/**
 * products Schema Design:
 * +) productId: string: The ID of product
 * +) title: string: The title of product
 * +) customerType: string: The customer that the product serves to
 * +) collectionType: string: The collection type of the product
 * +) price: integer: The price of the product
 * +) limitedPrice: integer: The sale off price of the product
 * +) limitedDate: string: The date until the sale ends
 * +) colorCode: string: The code of the color
 * +) colorName: string: The name of the color
 * +) sizeCode: string: The code of the size
 * +) imageUrls: array of string: An array contains string of URLs of images
 * +) rateStar: integer: Product's rate star
 * +) rateQuantity: integer: The number of people rate the product
 * +) description: string: The product description
 * +) note: string: Small note about the product, used when the product is in sale
 * +) quantity: integer: Quantity of product
 * +) productStatus: string: The status of the product
 * +) soldQuantity: integer: Number of products has been sold
 * +) overview: string: Short description about the product for product detail page
 * +) material: string: The material of product
 */

import Joi from 'joi'

const productsSchema = Joi.object({
  productId: Joi.string().pattern(new RegExp(/^E\d{6}-000/)).required(),
  title: Joi.string().required(),
  customerType: Joi.string().valid("Nam", "Nữ", "Trẻ em", "Trẻ sơ sinh").required(),
  collectionType: Joi.ref(title),
  price: Joi.number().integer().required().min(0),
  limitedPrice: Joi.number().integer().min(0),
  limitedDate: Joi.date(),
  colorCode: Joi.string().pattern(new RegExp(/COL\d{2}/)).required(),
  sizeCode: Joi.string().pattern(new RegExp(/SMA\d{3}/)).required(),
  imageUrls: Joi.array().items(Joi.string().uri().required()).required(),
  rateStar: Joi.number().integer().min(0).max(5).required(),
  rateQuantity: Joi.number().integer().min(0).required(),
  description: Joi.string().required(),
  note: Joi.string(),
  quantity: Joi.number().integer().min(0).required(),
  productStatus: Joi.number(),
  soldQuantity: Joi.number().integer().required(),
  overview: Joi.string().required(),
  material: Joi.string().required()
})