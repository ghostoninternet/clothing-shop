import express from 'express'
import { connectDB } from './config/mongodbConnection.js'
const app = express()

const hostname = "localhost"
const port = 5050

function start() {
  app.get('/', (req, res) => {
    res.send("<h1>Hello world</h1>")
  })

  app.listen(port, hostname, () => {
    console.log(`Listening server at http://${hostname}:${port}`)
  })
}

connectDB()
.then(() => start())
.catch((err) => console.log(err))