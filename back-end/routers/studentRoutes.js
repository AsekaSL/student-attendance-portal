const express = require('express')
const userAuth = require('../middleware/userAuth.js')
const studentController = require('../controller/studentController.js')

const router = express.Router()

router.get('/student', userAuth ,studentController.getStudent)
router.get('/students', userAuth ,studentController.getAllStudents)
router.put('/update', userAuth , studentController.update)
router.delete('/delete', userAuth ,studentController.deleteStudent)

module.exports = router