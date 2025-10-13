import React, { useState } from "react";

const StudentManagement = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    year: "",
    dep_id: "",
    regi_num: "",
    contact_num: "",
    address: "",
    email: "",
    index_num: "",
  });

  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add student to list (demo only)
    setStudents([...students, formData]);
    setFormData({
      full_name: "",
      year: "",
      dep_id: "",
      regi_num: "",
      contact_num: "",
      address: "",
      email: "",
      index_num: "",
    });
    alert("Student added!");
  };

  const filteredStudents = students.filter(
    (student) =>
      student.full_name.toLowerCase().includes(search.toLowerCase()) ||
      student.regi_num.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Student Management</h1>
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
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Select Year</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Department</label>
          <select
            name="dep_id"
            value={formData.dep_id}
            onChange={handleChange}
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
          <label className="block mb-1 font-medium">Registration Number</label>
          <input
            type="text"
            name="regi_num"
            value={formData.regi_num}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Contact Number</label>
          <input
            type="text"
            name="contact_num"
            value={formData.contact_num}
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
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
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
          <label className="block mb-1 font-medium">Index Number</label>
          <input
            type="text"
            name="index_num"
            value={formData.index_num}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>

        <div className="col-span-2 flex gap-4 mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Save Student
          </button>
        </div>
      </form>

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by name or registration number..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Student List */}
      <div className="bg-white shadow-md rounded">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-purple-700">Student List</h2>
        </div>
        {filteredStudents.length > 0 ? (
          <ul className="divide-y">
            {filteredStudents.map((student, idx) => (
              <li key={idx} className="px-4 py-3 flex justify-between items-center">
                <div>
                  <span className="font-medium">{student.full_name}</span>
                  <span className="text-gray-500 ml-2">({student.regi_num})</span>
                </div>
                <div className="text-sm text-gray-600">
                  {student.dep_id} - Year {student.year}
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="p-4 text-gray-500">No students found</p>
        )}
      </div>
    </div>
  );
};

export default StudentManagement;