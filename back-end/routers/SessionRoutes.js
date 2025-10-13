const express = require('express')
const sessionController = require('../controller/sessionController.js')
const userAuth = require('../middleware/userAuth.js')

const router = express.Router()

router.post('/add', sessionController.addSession)

module.exports = router