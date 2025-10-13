const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const attendanceSchema = new Schema({
  lectureId: { type: mongoose.Schema.Types.ObjectId, ref: "Lecture", required: true },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  module: {type: String, require: true},
  status: { type: String, enum: ["Present", "Absent"], required: true },
  date: { type: Date, default: Date.now }
});

const Attendance = mongoose.model("Attendance", attendanceSchema);
module.exports = Attendance;