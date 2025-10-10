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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Student data submitted (check console)");
  };

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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-6 shadow-md rounded"
      >
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Year</label>
          <select
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
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
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Index Number</label>
          <input
            type="text"
            name="index_num"
            value={formData.index_num}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Buttons */}
        <div className="col-span-2 flex gap-3 mt-4 justify-center">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-gray-300 px-6 py-2 rounded hover:bg-gray-400 transition"
          >
            Search
          </button>
          <button
            type="button"
            className="bg-yellow-500 px-6 py-2 rounded hover:bg-yellow-600 transition"
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

      {/* Search Bar */}
      <div className="mt-8 w-full md:w-1/2">
        <div className="flex items-center border px-3 py-2 rounded">
          <input
            type="text"
            placeholder="Enter Student Name"
            className="flex-1 outline-none"
          />
          <img
            src="/search.png"
            alt="Search"
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* Table */}
      <div className="mt-6 overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-left">
          <thead className="bg-purple-100">
            <tr>
              <th className="border px-3 py-2">Index No</th>
              <th className="border px-3 py-2">Name</th>
              <th className="border px-3 py-2">Department</th>
              <th className="border px-3 py-2">Year</th>
              <th className="border px-3 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-3 py-2" colSpan="5">
                No data available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentManagement;
