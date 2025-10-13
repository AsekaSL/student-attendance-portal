const Session = require('../model/Session.js')

const addSession = async (req, res) => {
    try {
        const {course, lectureTitle, qrTime, date} = req.body

        if (!course) {
            return res.send({ success: false, message: "Missing course" });
        }

        if (!lectureTitle) {
            return res.send({ success: false, message: "Missing Lecture Title" });
        }

        if (!qrTime) {
            return res.send({ success: false, message: "Missing QR Valid Time" });
        }


        if (!date) {
            return res.send({ success: false, message: "Missing Date" });
        }


        const session = new Session({course, lectureTitle, qrTime, date})

        await session.save();

        return res.send({success: true, message: 'Succsfuly create session', sessionId: session._id})

    } catch (error) {
        return res.send({success: false, message: error.message})
    }
}

exports.addSession = addSession;