const express = require('express')

const router = express.Router()



router.post('/register', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/login', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/logout', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.get('/current', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/refresh', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
