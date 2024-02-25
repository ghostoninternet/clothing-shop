import brcypt from 'bcrypt' 
import { generateToken, verifyToken } from "../utils/jwt.helper.js"
import { environment } from "../config/environment.js"
import { usersModel } from '../models/users.js'

const signUp = async (req, res) => {
  const userData = {
    gmail: req.body.gmail || "",
    password: req.body.password || "",
    gender: req.body.gender || "",
    dateOfBirth: req.body.dateOfBirth || "",
  }
  
  // Check if user doesn't enter email or password
  if (userData.gmail == "" || userData.password == "" || userData.gender == "" || userData.dateOfBirth == "") {
    res.status(403).json({message: "Please proivde all information"})
  }

  let userFromDb
  try {
    userFromDb = await usersModel.getUserByGmail(userData.gmail)
  } catch (error) {
    res.status(500).json({message: "Oops!! Something went wrong while looking for user from Database :("})
  }

  if (userFromDb != null || userFromDb != undefined) {
    if (userFromDb?.gmail === userData.gmail) {
      res.status(403).json({message: "User already existed!!"})
    }
  }
  
  // hash user's password
  brcypt.hash(userData.password, 10, (err, hash) => {
    if (err) res.status(500).json({message: "Oops!! Something went wrong while hashing the password :("})
    userData.password = hash
  })

  // Generate user access-token and refresh-token and save user data in DB
  try {
    const userDataToGenerateToken = {
      gmail: userData.gmail,
      gender: userData.gender,
      dateOfBirth: userData.dateOfBirth
    }
    const accessToken = await generateToken(userDataToGenerateToken, environment.JWT_ACESS_TOKEN_SECRET_KEY, "24h")
    const refreshToken = await generateToken(userDataToGenerateToken, environment.JWT_REFRESH_TOKEN_SECRET_KEY, "168h")

    // Save user data in DB
    userData.refreshToken = refreshToken
    console.log(userData)
    const newUser = await usersModel.createNewUser(userData)
    console.log('🚀 ~ signUp ~ newUser:', newUser)

    // Return to FE access token and refresh token in cookie
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7*24*60*60*1000 })
    res.status(200).json({message: "Signed up sucessful!", accessToken: accessToken, user: {_id: newUser._id, gmail: newUser.gmail, gender: newUser.gender, dateOfBirth: newUser.dateOfBirth}})
  } catch (error) {
    res.status(500).json({message: "Oops! Something went wrong :("})
  }
}

const login = async (req, res) => {
  const userData = {
    gmail: req.body.gmail || "",
    password: req.body.password || "",
  }
  
  // Check if user doesn't enter email or password
  if (userData.gmail == "" || userData.password == "") {
    res.status(403).json({message: "Please proivde email and password"})
  }

  let userFromDb
  try {
    userFromDb = await usersModel.getUserByGmail(userData.gmail)
  } catch (error) {
    res.status(500).json({message: "Oops!! Something went wrong while looking for user from Database :("})
  }

  if (userFromDb == null || userFromDb == undefined) {
    res.status(403).json({message: "User doesn't existed!. Please sign up to continue"})
  }

  // hash user's password
  brcypt.hash(userData.password, 10, (err, hash) => {
    if (err) res.status(500).json({message: "Oops!! Something went wrong while hashing the password :("})
    userData.password = hash
  })

  if (userFromDb.password != userData.password) {
    res.status(403).json({message: "Incorrect password!"})
  }

  try {
    const userDataToGenerateToken = {
      gmail: userFromDb.gmail,
      gender: userFromDb.gender,
      dateOfBirth: userFromDb.dateOfBirth
    }
    const accessToken = await generateToken(userDataToGenerateToken, environment.JWT_ACESS_TOKEN_SECRET_KEY, "24h")
    const refreshToken = await generateToken(userDataToGenerateToken, environment.JWT_REFRESH_TOKEN_SECRET_KEY, "168h")

    // Update user data in DB
    const updateResult = await usersModel.updateUserRefreshToken(userFromDb._id, refreshToken)

    // Return to FE access token and refresh token in cookie
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7*24*60*60*1000 })
    res.status(200).json({message: "Log in sucessful!", accessToken: accessToken, user: {_id: updateResult._id, gmail: updateResult.gmail, gender: updateResult.gender, dateOfBirth: updateResult.dateOfBirth}})
  } catch (error) {
    res.status(500).json({message: "Oops! Something went wrong :("})
  }
}

const refreshToken = async (req, res) => {
  const userData = {
    _id: req.body._id || "",
    gmail: req.body.gmail || "",
    gender: req.body.gender || "",
    dateOfBirth: req.body.dateOfBirth || "",
  } 

  const userRefreshToken = req?.cookies?.refreshToken || null
  
  // Todo: Get user refresh-token from database
  let userFromDb
  try {
    userFromDb = await usersModel.getUserById(userData._id)
  } catch (error) {
    res.status(500).json({message: "Oops!! Something went wrong while looking for user from Database :("})
  }

  if (userFromDb.refreshToken === userRefreshToken) {
    let verifyResult
    try {
      verifyResult = await verifyToken(userRefreshToken, environment.JWT_REFRESH_TOKEN_SECRET_KEY)
    } catch (error) {
      res.status(403).json({message: "User refresh token is invalid"})
    }

    try {
      const accessToken = await generateToken(verifyResult.data, environment.JWT_ACESS_TOKEN_SECRET_KEY, "24h")
      res.status(200).json({ message: "Successfully created new access token", accessToken: accessToken, user: userData })
    } catch (error) {
      res.status(500).json({message: "Oops! Something went wrong :("})
    }
  }
}

const logout = async (req, res) => {
  const userId = req.body._id || ""
  
  try {
    const updateResult = usersModel.deleteUserRefreshToken(userId)
    res.clearCookie('jwt')
    res.status(200).json({message: "Logout!", user: {}})
  } catch (error) {
    res.status(500).json({message: "Oops! Something went wrong :("})
  }
}

export const AuthController = {
  signUp,
  login,
  refreshToken,
  logout
}