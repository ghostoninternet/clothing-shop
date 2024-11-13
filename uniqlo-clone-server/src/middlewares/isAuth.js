import { verifyToken } from "../utils/jwt.helper"
import { environment } from "../config/environment"

export const isAuth = async (req, res, next) => {
  const token = req.headers["JWT-Token"] || null

  if (token) {
    try {
      const verifyResult = await verifyToken(token, environment.JWT_ACESS_TOKEN_SECRET_KEY)
      req.userData = verifyResult
      next()
    } catch (error) {
      res.status(401).json({message: "Error! Your session is expired. Please login again"})
    }
  } else {
    res.status(403).json({message: "Error! Please login to continue"})
  }
}