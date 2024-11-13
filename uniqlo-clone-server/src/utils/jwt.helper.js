import jwt from 'jsonwebtoken'

export const generateToken = (user, secretKey, tokenLife) => {
  return new Promise((resolve, reject) => {
    const userData = {
      gmail: user.gmail,
      gender: user.gender,
      dateOfBirth: user.dateOfBirth
    }
    jwt.sign(
      {data: userData},
      secretKey,
      {
        algorithm: "HS256",
        expiresIn: tokenLife
      },
      (error, token) => {
        if (error) reject(error)
        resolve(token)
      }
    )
  })
  
}

export const verifyToken = (token, secretKey) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretKey, (error, decoded) => {
      if (error) reject(error) 
      return resolve(decoded)
    })
  })
}