const Student = require('../model/student.js')

const register = async (req, res) => {
    try {
        const {fullName, year, department, regiNumber, contactNum, address, email, indexNum, courseModules} = req.body;

        if(!fullName) {
            return res.status(401).send({success: false, message: 'Missing Full Name'})
        }

        if(!year) {
            return res.status(401).send({success: false, message: 'Missing Year'})
        }

        if(!department) {
            return res.status(401).send({success: false, message: 'Missing department'})
        }

        if(!regiNumber) {
            return res.status(401).send({success: false, message: 'Missing Register Number'})
        }

        if(!contactNum) {
            return res.status(401).send({success: false, message: 'Missing Contact Number'})
        }

        if(!address) {
            return res.status(401).send({success: false, message: 'Missing address'})
        }

        if(!email) {
            return res.status(401).send({success: false, message: 'Missing email'})
        }

        if(!indexNum) {
            return res.status(401).send({success: false, message: 'Missing index Number'})
        }

        if(!courseModules) {
            return res.status(401).send({success: false, message: 'Missing Course Modules'})
        }

        const existingUser = await Student.findOne({email})

        if(existingUser) {
            return res.status(401).send({success: false, message: 'Student already exists'})
        }

        const student = new Student({fullName, year, department, regiNumber, contactNum, address, email, indexNum, courseModules})

        await student.save()

        return res.status(201).send({success: true, message: 'Student registeration'})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

const getStudent = async (req, res) => {
    try {

        const {email} = req.body;

        if(!email) {
            return res.status(401).send({success: false, message: 'Missing email'})
        }

        const student = await Student.findOne({email})

        if(!student) {
            return res.status(401).send({success: false, message: 'Invalid Student'})
        }

        return res.status(201).send({success: true, message: student})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find()

        if(!students) {
            return res.status(401).send({success: false, message: 'No student'})
        }

        return res.status(201).send({success: true, message: students})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

const update = async (req, res) => {
    try {
        const { fullName, year, department, regiNumber, contactNum, address, email, indexNum, courseModules} = req.body;

        if(!fullName) {
            return res.status(401).send({success: false, message: 'Missing Full Name'})
        }

        if(!year) {
            return res.status(401).send({success: false, message: 'Missing Year'})
        }

        if(!department) {
            return res.status(401).send({success: false, message: 'Missing department'})
        }

        if(!regiNumber) {
            return res.status(401).send({success: false, message: 'Missing Register Number'})
        }

        if(!contactNum) {
            return res.status(401).send({success: false, message: 'Missing Contact Number'})
        }

        if(!address) {
            return res.status(401).send({success: false, message: 'Missing address'})
        }

        if(!email) {
            return res.status(401).send({success: false, message: 'Missing email'})
        }

        if(!indexNum) {
            return res.status(401).send({success: false, message: 'Missing index Number'})
        }

        if(!courseModules) {
            return res.status(401).send({success: false, message: 'Missing Course Modules'})
        }

        const student = await Student.updateOne({regiNumber}, {$set: {fullName, year, department, regiNumber, contactNum, address, email, indexNum, courseModules}})

        if(!student) {
            return res.staus(401).send({success: false, message: 'Not Updated'})
        }

        return res.status(201).send({success: true, message: 'Succesfully updated'})


    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

const deleteStudent = async (req, res) => {
    try {
        const { regiNumber} = req.body;

        if(!regiNumber) {
            return res.status(401).send({success: false, message: 'Missing Register Number'})
        }


        const student = await Student.findOne({regiNumber})

        if(!student) {
            return res.status(401).send({success: false, message: 'Invalid Student'})
        }

        const response = await student.deleteOne({regiNumber})

        if(!response) {
            return res.status(401).send({success: false, message: 'Not deleted'})
        }

        return res.status(201).send({success: true, message: response})

    } catch (error) {
        return res.status(401).send({success: false, message: error.message})
    }
}

exports.register = register
exports.getStudent = getStudent
exports.getAllStudents = getAllStudents
exports.update = update
exports.deleteStudent = deleteStudent