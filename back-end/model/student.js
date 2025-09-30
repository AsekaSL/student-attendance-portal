const mongoose = require('mongoose')
const schema = mongoose.Schema;

const studentSchema = new schema({
    fullName: {type: String, required: true},
    year: {type: Number, required: true},
    department: {type: String, required: true},
    regiNumber: {type: String, required: true},
    contactNum: {type: String, required: true},
    address: {type: String, required: true},
    email: {type: String, required: true},
    indexNum: {type: String, required: true},
    courseModules: {type: Array, required: true}
})

const Student = mongoose.model("Student", studentSchema)

module.exports = Student