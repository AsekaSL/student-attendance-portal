// routes/attendanceRoutes.js
const express = require('express');
const attendanceController = require('../controller/attendanceController.js');
const userAuth = require('../middleware/userAuth.js');

const router = express.Router();

// Create (mark attendance)
router.post('/mark', userAuth, attendanceController.addAttendance);

// Update attendance
router.put('/update/:id', userAuth, attendanceController.updateAttendance);

// Delete attendance
router.delete('/delete/:id', userAuth, attendanceController.deleteAttendance);

// Get attendance by student
router.get('/student/:studentId', userAuth, attendanceController.getStudentAttendance);

// Get attendance by lecture/module
router.get('/lecture/:lectureId', userAuth, attendanceController.getLectureAttendance);

// Get percentage report for student
router.get('/student/:studentId/percentage', userAuth, attendanceController.getStudentPercentage);

// Get percentage report for lecture
router.get('/lecture/:lectureId/percentage', userAuth, attendanceController.getLecturePercentage);

module.exports = router;
