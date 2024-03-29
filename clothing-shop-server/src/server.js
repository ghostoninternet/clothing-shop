import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { corsOptions } from './config/corsConfig.js'
import { connectDB } from './config/mongodbConnection.js'
import { router } from './routes/index.js'

const hostname = "localhost"
const port = 5050

function start() {

  const app = express()

  app.use(cors(corsOptions))
  app.use(cookieParser())
  app.use(express.json())

  app.use('/', router)

  app.listen(port, hostname, () => {
    console.log(`Listening server at http://${hostname}:${port}`)
  })
}

connectDB()
.then(() => console.log("Successfully connected to MongoDB"))
.then(() => start())
.catch((err) => console.log(err))