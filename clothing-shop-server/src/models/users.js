import Joi from 'joi'
import { getDB } from '../config/mongodbConnection.js'
import { ObjectId } from 'mongodb'

const COLLECTION_NAME = "users"

const usersSchema = Joi.object({
  gmail: Joi.string().email().required(),
  password: Joi.string().required().pattern(new RegExp("^\S{8,}$")),
  gender: Joi.string().required(),
  dateOfBirth: Joi.string().required(),
  refreshToken: Joi.string().required(),
})

const createNewUser = async (data) => {
  try {
    // const validData = await usersSchema.validateAsync(data)
    // console.log('🚀 ~ createNewUser ~ validData:', validData)
    const insertResult = await getDB().collection(COLLECTION_NAME).insertOne(data)
    console.log('🚀 ~ createNewUser ~ insertResult:', insertResult)
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