import express from 'express'

const app = express()

const hostname = "localhost"
const port = 5050

app.get('/', (req, res) => {
  res.send("<h1>Hello world</h1>")
})

app.listen(port, hostname, () => {
  console.log(`Listening server at http://${hostname}:${port}`)
})