import express from 'express'

export const router = express.Router()

router.use((req, res, next) => {
  console.log("We are inside the router-level middleware")
  next()
})

router.get('/first', (req, res, next) => {
  console.log("This is the router-level middleware that get executed everytime the user vist the path '/first'")
  res.send("<h1>There are a lot of things about NodeJS and ExpressJS that you haven't seen yet</h1>")
})

// default path always at the end
router.get('/', (req, res, next) => {
  console.log("We are inside the router-level middleware that get executed everytime the user visit the path '/'")
  res.send("<h1>Welcome to Express</h1>")
})