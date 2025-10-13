import React, { useState } from "react";

const ProfessorManagement = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    department: "",
    subject: "",
    uniID: "",
    designation: "",
    contactNumber: "",
    dateofjoin: "",
    address: "",
    email: "",
    nicNO: "",
    status: "Active",
  });

  const [subjects, setSubjects] = useState([]);
  const [professors, setProfessors] = useState([
    { uniID: "00001", fullName: "Dr. Smith", department: "CS", subject: "Data Structures", email: "smith@university.edu" },
    { uniID: "00002", fullName: "Dr. Johnson", department: "SE", subject: "Software Design", email: "johnson@university.edu" },
  ]);

  const [search, setSearch] = useState("");

  const departmentSubjects = {
    CS: ["Data Structures", "Algorithms", "DBMS", "Computer Networks"],
    SE: ["Software Design", "Testing", "DevOps", "Agile Methods"],
    IS: ["Information Security", "ERP Systems", "Business Analytics", "Data Mining"],
  };

  const handleDepartmentChange = (e) => {
    const dept = e.target.value;
    setFormData({ ...formData, department: dept, subject: "" });
    setSubjects(departmentSubjects[dept] || []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add professor to list (demo only)
    setProfessors([...professors, formData]);
    setFormData({
      fullName: "",
      department: "",
      subject: "",
      uniID: "",
      designation: "",
      contactNumber: "",
      dateofjoin: "",
      address: "",
      email: "",
      nicNO: "",
      status: "Active",
    });
    alert("Professor added!");
  };

  const filteredProfessors = professors.filter(
    (prof) =>
      prof.fullName.toLowerCase().includes(search.toLowerCase()) ||
      prof.uniID.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Professor Management</h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Admin</span>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded mb-6"
      >
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleDepartmentChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Department</option>
            <option value="CS">Computer Science</option>
            <option value="SE">Software Engineering</option>
            <option value="IS">Information Systems</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">Subject</label>
          <select
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Subject</option>
            {subjects.map((subj, idx) => (
              <option key={idx} value={subj}>
                {subj}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-medium">University ID Number</label>
          <input
            type="text"
            name="uniID"
            value={formData.uniID}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Designation</label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Contact Number</label>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Date of Join</label>
          <input
            type="date"
            name="dateofjoin"
            value={formData.dateofjoin}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">NIC Number</label>
          <input
            type="text"
            name="nicNO"
            value={formData.nicNO}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="Active">Active</option>
            <option value="On Leave">On Leave</option>
            <option value="Retired">Retired</option>
            <option value="Resigned">Resigned</option>
          </select>
        </div>

        <div className="col-span-2 flex gap-4 mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Update
          </button>
          <button
            type="button"
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      </form>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Professor Name or ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Professor Table */}
      <div className="bg-white shadow-md rounded">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-purple-700">Professor List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-4 py-2 text-left">University ID Number</th>
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Subject</th>
                <th className="px-4 py-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {filteredProfessors.length > 0 ? (
                filteredProfessors.map((prof, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{prof.uniID}</td>
                    <td className="px-4 py-2">{prof.fullName}</td>
                    <td className="px-4 py-2">{prof.department}</td>
                    <td className="px-4 py-2">{prof.subject}</td>
                    <td className="px-4 py-2">{prof.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-8 text-center text-gray-500">
                    No professors found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProfessorManagement;