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
    // Later: send this data to backend (Node/Express API)
  };

  return (
    <div className="flex min-h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-100 p-4 flex flex-col justify-between">
        <div className="space-y-2">
          <button className="w-full py-2 bg-blue-200">Student Management</button>
          <button className="w-full py-2">Professor Management</button>
          <button className="w-full py-2">Create Course Unit</button>
          <button className="w-full py-2">Generate Reports</button>
          <button className="w-full py-2">Create User Admin</button>
        </div>
        <div className="mt-10 space-y-2">
          <div>Help</div>
          <div>Log out</div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src="/assets/admin/student-managment/Generic avatar.png"
              alt="Profile"
            />
            <div>Profile</div>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-6 bg-white p-6 shadow rounded"
        >
          <div>
            <label className="block">Full Name</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block">Year</label>
            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>

          <div>
            <label className="block">Department</label>
            <select
              name="dep_id"
              value={formData.dep_id}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
            </select>
          </div>

          <div>
            <label className="block">Registration Number</label>
            <input
              type="text"
              name="regi_num"
              value={formData.regi_num}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block">Contact Number</label>
            <input
              type="text"
              name="contact_num"
              value={formData.contact_num}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="block">Index Number</label>
            <input
              type="text"
              name="index_num"
              value={formData.index_num}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div className="col-span-2 flex gap-2 mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
            <button type="button" className="bg-gray-300 px-4 py-2 rounded">
              Search
            </button>
            <button type="button" className="bg-yellow-400 px-4 py-2 rounded">
              Update
            </button>
            <button type="button" className="bg-red-500 text-white px-4 py-2 rounded">
              Delete
            </button>
          </div>
        </form>

        {/* Search Bar */}
        <div className="mt-6">
          <div className="flex items-center border p-2 rounded w-1/2">
            <input
              type="text"
              placeholder="Enter Student Name"
              className="flex-1 outline-none"
            />
            <img
              src="/assets/admin/student-managment/search.png"
              alt="Search"
              className="w-6 h-6"
            />
          </div>
        </div>

        {/* Table */}
        <div className="mt-6">
          <table className="w-full border">
            <thead>
              <tr>
                <th className="border p-2" colSpan="5">
                  There is no data
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentManagement;
