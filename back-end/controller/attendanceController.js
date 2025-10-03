const Attendance = require("../model/Attendance");
const Student = require("../model/student");
const Lecture = require("../model/Admin");

// Add Attendance
const addAttendance = async (req, res) => {
  try {
    const { lectureId, studentId, status } = req.body;

    if (!lectureId || !studentId || !status) {
      return res.status(400).send({ success: false, message: "Missing required fields" });
    }

    const attendance = new Attendance({ lectureId, studentId, status });
    await attendance.save();

    return res.status(201).send({ success: true, message: "Attendance marked", data: attendance });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// Update Attendance
const updateAttendance = async (req, res) => {
  try {
    const { id, status } = req.body; // attendanceId

    if (!id || !status) {
      return res.status(400).send({ success: false, message: "Missing fields" });
    }

    const attendance = await Attendance.findByIdAndUpdate(
      id,
      { $set: { status } },
      { new: true }
    );

    if (!attendance) {
      return res.status(404).send({ success: false, message: "Attendance not found" });
    }

    return res.status(200).send({ success: true, message: "Updated", data: attendance });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// Delete Attendance
const deleteAttendance = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).send({ success: false, message: "Missing Attendance ID" });
    }

    const response = await Attendance.findByIdAndDelete(id);

    if (!response) {
      return res.status(404).send({ success: false, message: "Attendance not found" });
    }

    return res.status(200).send({ success: true, message: "Deleted successfully" });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// Get Attendance by Lecture (with percentage)
const getLectureAttendance = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const records = await Attendance.find({ lectureId }).populate("studentId", "fullName indexNum");

    if (!records || records.length === 0) {
      return res.status(404).send({ success: false, message: "No attendance records found" });
    }

    const total = records.length;
    const present = records.filter(r => r.status === "Present").length;
    const absent = total - present;
    const percentage = ((present / total) * 100).toFixed(2);

    return res.status(200).send({
      success: true,
      lectureId,
      total,
      present,
      absent,
      percentage: `${percentage}%`,
      records
    });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// Get Attendance by Student (with percentage per module)
const getStudentAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;

    const records = await Attendance.find({ studentId }).populate("lectureId", "subject module");

    if (!records || records.length === 0) {
      return res.status(404).send({ success: false, message: "No attendance found for student" });
    }

    // Group by module
    const moduleStats = {};
    records.forEach(r => {
      const module = r.lectureId.module;
      if (!moduleStats[module]) {
        moduleStats[module] = { total: 0, present: 0 };
      }
      moduleStats[module].total++;
      if (r.status === "Present") {
        moduleStats[module].present++;
      }
    });

    // Calculate percentages
    const result = Object.keys(moduleStats).map(mod => ({
      module: mod,
      total: moduleStats[mod].total,
      present: moduleStats[mod].present,
      percentage: ((moduleStats[mod].present / moduleStats[mod].total) * 100).toFixed(2) + "%"
    }));

    return res.status(200).send({
      success: true,
      studentId,
      records,
      stats: result
    });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// ✅ Get Overall Student Attendance Percentage (all modules combined)
const getStudentPercentage = async (req, res) => {
  try {
    const { studentId } = req.params;

    const total = await Attendance.countDocuments({ studentId });
    const present = await Attendance.countDocuments({ studentId, status: "Present" });

    if (total === 0) {
      return res.status(200).send({ success: true, studentId, percentage: "0%", message: "No attendance records found" });
    }

    const percentage = ((present / total) * 100).toFixed(2);

    return res.status(200).send({
      success: true,
      studentId,
      totalLectures: total,
      attendedLectures: present,
      percentage: `${percentage}%`
    });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

// ✅ Get Overall Lecture Attendance Percentage (all students combined)
const getLecturePercentage = async (req, res) => {
  try {
    const { lectureId } = req.params;

    const total = await Attendance.countDocuments({ lectureId });
    const present = await Attendance.countDocuments({ lectureId, status: "Present" });

    if (total === 0) {
      return res.status(200).send({ success: true, lectureId, percentage: "0%", message: "No attendance records found" });
    }

    const percentage = ((present / total) * 100).toFixed(2);

    return res.status(200).send({
      success: true,
      lectureId,
      totalStudents: total,
      attendedStudents: present,
      percentage: `${percentage}%`
    });

  } catch (error) {
    return res.status(500).send({ success: false, message: error.message });
  }
};

module.exports = {
  addAttendance,
  updateAttendance,
  deleteAttendance,
  getLectureAttendance,
  getStudentAttendance,
  getStudentPercentage,
  getLecturePercentage
};
