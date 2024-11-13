import axios from 'axios'
import { baseUrl } from '../utils/constants/baseUrl.js'

const getMenProducts = async () => {
  try {
    const response = await axios.get(baseUrl, { url: "/products/men" })
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export const productAPIs = {
  getMenProducts
}