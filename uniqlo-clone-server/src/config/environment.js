import { config } from 'dotenv'

config()

export const environment = {
  "MONGODB_CONNECTION_STRING": process.env.MONGODB_CONNECTION_STRING,
  "DATABASE_NAME": process.env.DATABASE_NAME,
  "JWT_ACESS_TOKEN_SECRET_KEY": process.env.JWT_ACESS_TOKEN_SECRET_KEY,
  "JWT_REFRESH_TOKEN_SECRET_KEY": process.env.JWT_REFRESH_TOKEN_SECRET_KEY,
}
