const express = require('express')
const studentController = require('../controller/studentController.js')

const router = express.Router()

router.post('/register', studentController.register)
router.get('/student', studentController.getStudent)
router.get('/students', studentController.getAllStudents)
router.put('/update', studentController.update)
router.delete('/delete', studentController.deleteStudent)

module.exports = router