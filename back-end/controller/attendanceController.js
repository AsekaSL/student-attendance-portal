const Attendance = require("../model/Attendance");
const Student = require("../model/student");
const Lecture = require("../model/Admin");
const Session = require("../model/Session");

// Add Attendance
const addAttendance = async (req, res) => {
  try {
    
    const {id, userId} = req.body

    if(!id) {
      return res.send({success: false, message: 'Missing ID'})
    }

    const session = await Session.findById(id)

    const attend = new Attendance({
      sessionId: id,
      studentId: userId,
      status: 'Present'
    })

    await attend.save()

    if (!attend) {
      return res.send({success: false, message: 'Not aproved'})
    }

    return res.send({success: true, message: 'Approved Session!'})

  } catch (error) {
    return res.send({ success: false, message: error.message });
  }
};


// ✅ Get Overall Student Attendance Percentage (all modules combined)
// const getStudentPercentage = async (req, res) => {
//   try {
//     const { studentId } = req.params;

//     const total = await Attendance.countDocuments({ studentId });
//     const present = await Attendance.countDocuments({ studentId, status: "Present" });

//     if (total === 0) {
//       return res.status(200).send({ success: true, studentId, percentage: "0%", message: "No attendance records found" });
//     }

//     const percentage = ((present / total) * 100).toFixed(2);

//     return res.status(200).send({
//       success: true,
//       studentId,
//       totalLectures: total,
//       attendedLectures: present,
//       percentage: `${percentage}%`
//     });

//   } catch (error) {
//     return res.status(500).send({ success: false, message: error.message });
//   }
// };

// // ✅ Get Overall Lecture Attendance Percentage (all students combined)
// const getLecturePercentage = async (req, res) => {
//   try {
//     const { lectureId } = req.params;

//     const total = await Attendance.countDocuments({ lectureId });
//     const present = await Attendance.countDocuments({ lectureId, status: "Present" });

//     if (total === 0) {
//       return res.status(200).send({ success: true, lectureId, percentage: "0%", message: "No attendance records found" });
//     }

//     const percentage = ((present / total) * 100).toFixed(2);

//     return res.status(200).send({
//       success: true,
//       lectureId,
//       totalStudents: total,
//       attendedStudents: present,
//       percentage: `${percentage}%`
//     });

//   } catch (error) {
//     return res.status(500).send({ success: false, message: error.message });
//   }
// };

module.exports = {
  addAttendance
};
