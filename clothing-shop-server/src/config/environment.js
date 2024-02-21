import { config } from 'dotenv'

config()

export const environment = {
  "MONGODB_CONNECTION_STRING": process.env.MONGODB_CONNECTION_STRING,
  "DATABASE_NAME": process.env.DATABASE_NAME
}

