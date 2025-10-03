const Admin = require('../models/Admin')

// Get single admin by email
const getAdmin = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(401).send({ success: false, message: "Missing Email" });
        }

        const admin = await Admin.findOne({ email });

        if (!admin) {
            return res.status(401).send({ success: false, message: "Invalid Admin" });
        }

        return res.status(201).send({ success: true, message: admin });

    } catch (error) {
        return res.status(401).send({ success: false, message: error.message });
    }
};

// Get all admins
const getAllAdmins = async (req, res) => {
    try {
        const admins = await Admin.find();

        if (!admins || admins.length === 0) {
            return res.status(401).send({ success: false, message: "No Admins Found" });
        }

        return res.status(201).send({ success: true, message: admins });

    } catch (error) {
        return res.status(401).send({ success: false, message: error.message });
    }
};

// Update admin by uniId
const updateAdmin = async (req, res) => {
    try {
        const { fullName, department, subject, module, uniId, nic, email, contactNum, address } = req.body;

        // Validations
        if (!fullName) return res.status(401).send({ success: false, message: "Missing Full Name" });
        if (!department) return res.status(401).send({ success: false, message: "Missing Department" });
        if (!subject) return res.status(401).send({ success: false, message: "Missing Subject" });
        if (!module) return res.status(401).send({ success: false, message: "Missing Module" });
        if (!uniId) return res.status(401).send({ success: false, message: "Missing University ID" });
        if (!nic) return res.status(401).send({ success: false, message: "Missing NIC" });
        if (!email) return res.status(401).send({ success: false, message: "Missing Email" });
        if (!contactNum) return res.status(401).send({ success: false, message: "Missing Contact Number" });
        if (!address) return res.status(401).send({ success: false, message: "Missing Address" });

        const admin = await Admin.updateOne(
            { uniId },
            { $set: { fullName, department, subject, module, uniId, nic, email, contactNum, address } }
        );

        if (!admin) {
            return res.status(401).send({ success: false, message: "Not Updated" });
        }

        return res.status(201).send({ success: true, message: "Successfully Updated" });

    } catch (error) {
        return res.status(401).send({ success: false, message: error.message });
    }
};

// Delete admin by uniId
const deleteAdmin = async (req, res) => {
    try {
        const { uniId } = req.body;

        if (!uniId) {
            return res.status(401).send({ success: false, message: "Missing University ID" });
        }

        const admin = await Admin.findOne({ uniId });

        if (!admin) {
            return res.status(401).send({ success: false, message: "Invalid Admin" });
        }

        const response = await admin.deleteOne({ uniId });

        if (!response) {
            return res.status(401).send({ success: false, message: "Not Deleted" });
        }

        return res.status(201).send({ success: true, message: "Successfully Deleted" });

    } catch (error) {
        return res.status(401).send({ success: false, message: error.message });
    }
};

module.exports = {
    getAdmin,
    getAllAdmins,
    updateAdmin,
    deleteAdmin
};