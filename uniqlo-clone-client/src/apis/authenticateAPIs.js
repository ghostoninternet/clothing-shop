import axios from 'axios'
import { baseUrl } from '../utils/constants/baseUrl.js'

const signupAPI = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/signup`, userData)
    return response.data
  } catch (error) {
    return error
  }
}

const loginAPI = async (userData) => {
  try {
    const response = await axios.post(`${baseUrl}/auth/login`, userData)
    return response.data
  } catch (error) {
    return error
  }
}

export const authenticateAPIs = {
  signupAPI,
  loginAPI,
}