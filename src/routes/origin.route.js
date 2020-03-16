const express = require('express')
const router = express.Router()
const originController = require('../controllers/origin.controller')

router.post('/', originController.create)

module.exports = router