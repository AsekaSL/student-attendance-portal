import React, { useState } from "react";

const AdminUserManagement = () => {
  const [formData, setFormData] = useState({
    lecture_id: "",
    full_name: "",
    nic: "",
    regi_num: "",
    year: "",
    contact_num: "",
    address: "",
    email: "",
    lecture_dep_id: "",
    password: "",
  });

  const [search, setSearch] = useState("");
  const [professors, setProfessors] = useState([]);

  const departments = ["CS", "SE", "IS"]; // Example departments

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add professor to list (demo only)
    setProfessors([...professors, formData]);
    setFormData({
      lecture_id: "",
      full_name: "",
      nic: "",
      regi_num: "",
      year: "",
      contact_num: "",
      address: "",
      email: "",
      lecture_dep_id: "",
      password: "",
    });
    alert("Professor added!");
  };

  const filteredProfessors = professors.filter(
    (prof) =>
      prof.full_name.toLowerCase().includes(search.toLowerCase()) ||
      prof.regi_num.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Admin User Management</h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 shadow-md rounded"
      >
        <input
          type="hidden"
          name="lecture_id"
          value={formData.lecture_id}
        />
        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={formData.full_name}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="nic"
          placeholder="NIC"
          value={formData.nic}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="regi_num"
          placeholder="Registration Number"
          value={formData.regi_num}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="contact_num"
          placeholder="Contact Number"
          value={formData.contact_num}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />
        <select
          name="lecture_dep_id"
          value={formData.lecture_dep_id}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        >
          <option value="">Select Department</option>
          {departments.map((dep, idx) => (
            <option key={idx} value={dep}>
              {dep}
            </option>
          ))}
        </select>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          required
        />

        <div className="col-span-2 flex gap-4 mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Save
          </button>
        </div>
      </form>

      {/* Search */}
      <div className="mt-6 w-full md:w-1/2">
        <input
          type="text"
          placeholder="Search by name or ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Professor List */}
      <div className="mt-4">
        {filteredProfessors.length > 0 ? (
          <ul className="bg-white shadow-md rounded divide-y">
            {filteredProfessors.map((prof, idx) => (
              <li key={idx} className="px-4 py-2 flex justify-between items-center">
                <span>
                  {prof.full_name} ({prof.regi_num})
                </span>
                <span>{prof.lecture_dep_id}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">No professors found</p>
        )}
      </div>
    </div>
  );
};

export default AdminUserManagement;
