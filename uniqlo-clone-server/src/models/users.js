/**
 * users Schema Design:
 * +) gmail:
 * +) password:
 * +) gender:
 * +) dateOfBirth:
 * +) firstName:
 * +) lastName:
 * +) state:
 * +) district:
 * +) ward:
 * +) address:
 * +) phoneNumber:
 * +) cellphoneNumber:
 * +) nonPersonalizedMessage:
 * +) personalizedMessage:
 * +) onlineStoreCoupon:
 * +) retailStoreCoupon:
 * +) refreshToken:
 * +) wishLists: array of ObjectId of each product
 */

import Joi from 'joi'
import { getDB } from '../config/mongodbConnection.js'
import { OBJECT_ID_RULE } from '../utils/constants.js'
import { ObjectId } from 'mongodb'

const COLLECTION_NAME = "users"

const usersSchema = Joi.object({
  gmail: Joi.string().email().required(),
  password: Joi.string().pattern(new RegExp("^\S{8,}$")).required(),
  gender: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  firstName: Joi.string(),
  lastName: Joi.string(),
  state: Joi.string(),
  district: Joi.string(),
  ward: Joi.string(),
  address: Joi.string(),
  phoneNumber: Joi.string().pattern(new RegExp(/^\d{10,11}$/)),
  cellphoneNumber: Joi.string().pattern(new RegExp(/^\d{11}$/)),
  nonPersonalizedMessage: Joi.boolean(),
  personalizedMessage: Joi.boolean(),
  onlineStoreCoupon: Joi.number().integer().min(0),
  retailStoreCoupon: Joi.number().integer.min(0),
  refreshToken: Joi.string().required(),
  wishLists: Joi.array().items(Joi.string().pattern(OBJECT_ID_RULE))
})

const createNewUser = async (data) => {
  try {
    // const validData = await usersSchema.validateAsync(data)
    // console.log('🚀 ~ createNewUser ~ validData:', validData)
    const insertResult = await getDB().collection(COLLECTION_NAME).insertOne(data)
    const getNewUser = getUserById(insertResult.insertedId)
    return getNewUser
  } catch (error) {
    throw new Error(error)
  }
}

const getUserById = async (userId) => {
  try {
    const getResult = await getDB().collection(COLLECTION_NAME).findOne({ _id: new ObjectId(userId) })
    return getResult
  } catch (error) {
    throw new Error(error)
  }
}

const getUserByGmail = async (userGmail) => {
  try {
    const getResult = await getDB().collection(COLLECTION_NAME).findOne({ gmail: userGmail })
    return getResult
  } catch (error) {
    throw new Error(error)
  }
}

const updateUserRefreshToken = async (userId, userRefreshToken) => {
  try {
    const filter = { _id: new ObjectId(userId) }
    const updateField = { $set: { refreshToken: userRefreshToken } }
    const updateResult = await getDB().collection(COLLECTION_NAME).findOneAndUpdate(filter, updateField)
    return updateResult
  } catch (error) {
    throw new Error(error)
  }
}

const deleteUserRefreshToken = async (userId) => {
  try {
    const filter = { _id: new ObjectId(userId) }
    const updateField = { $set: { refreshToken: "" } }
    const updateResult = await getDB().collection(COLLECTION_NAME).findOneAndUpdate(filter, updateField)
    return updateResult
  } catch (error) {
    throw new Error(error)
  }
}

export const usersModel = {
  createNewUser,
  getUserByGmail,
  getUserById,
  updateUserRefreshToken,
  deleteUserRefreshToken,
}