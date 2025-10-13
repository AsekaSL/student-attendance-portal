const mongoose = require('mongoose')
const schema = mongoose.Schema;

const sessionSchema = new schema({
    course: {type: String, required: true},
    lectureTitle: {type: String, required: true},
    qrTime: {type: String, required: true},
    date: {type: String, required: true}
})

const Session = mongoose.model("Session", sessionSchema)

module.exports = Session