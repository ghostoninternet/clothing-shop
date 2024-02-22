import express from 'express'
import cors from 'cors'
import { corsOptions } from './config/corsConfig.js'
import { connectDB } from './config/mongodbConnection.js'

const hostname = "localhost"
const port = 5050

function start() {

  const app = express()
  app.use(cors(corsOptions))
  app.use(express.json())

  app.use((req, res, next) => {
    console.log("Hi there motherfucker!!")
    next()
  })
  app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
  })

  app.listen(port, hostname, () => {
    console.log(`Listening server at http://${hostname}:${port}`)
  })
}

connectDB()
.then(() => console.log("Successfully connected to MongoDB"))
.then(() => start())
.catch((err) => console.log(err))