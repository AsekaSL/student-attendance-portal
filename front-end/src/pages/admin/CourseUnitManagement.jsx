import React, { useState } from "react";

const CourseUnitManagement = () => {
  const [formData, setFormData] = useState({
    courseCode: "",
    courseDesc: "",
    department: "",
    semester: "",
    status: "",
    professor: "",
    courseName: "",
    faculty: "",
    credits: "",
    year: "",
    prerequisites: "",
    schedule: "",
  });

  const [courses, setCourses] = useState([
    { id: 1, courseCode: "CS101", courseName: "Introduction to Programming", professor: "Dr. Smith" },
    { id: 2, courseCode: "SE201", courseName: "Software Engineering", professor: "Dr. Johnson" },
  ]);

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add course to list (demo only)
    const newCourse = {
      id: courses.length + 1,
      courseCode: formData.courseCode,
      courseName: formData.courseName,
      professor: formData.professor,
    };
    setCourses([...courses, newCourse]);
    setFormData({
      courseCode: "",
      courseDesc: "",
      department: "",
      semester: "",
      status: "",
      professor: "",
      courseName: "",
      faculty: "",
      credits: "",
      year: "",
      prerequisites: "",
      schedule: "",
    });
    alert("Course added!");
  };

  const filteredCourses = courses.filter(
    (course) =>
      course.courseName.toLowerCase().includes(search.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Course Unit Management</h1>
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
          <label className="block mb-1 font-medium">Course Code</label>
          <input
            type="text"
            name="courseCode"
            placeholder="Course Code"
            value={formData.courseCode}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Course Description</label>
          <input
            type="text"
            name="courseDesc"
            placeholder="Course Description"
            value={formData.courseDesc}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Department</label>
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Semester</label>
          <input
            type="text"
            name="semester"
            placeholder="Semester"
            value={formData.semester}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Status</label>
          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Assigned Professor</label>
          <input
            type="text"
            name="professor"
            placeholder="Assigned Professor"
            value={formData.professor}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Course Name</label>
          <input
            type="text"
            name="courseName"
            placeholder="Course Name"
            value={formData.courseName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Faculty</label>
          <input
            type="text"
            name="faculty"
            placeholder="Faculty"
            value={formData.faculty}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Credits</label>
          <input
            type="text"
            name="credits"
            placeholder="Credits"
            value={formData.credits}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Year Offered</label>
          <input
            type="text"
            name="year"
            placeholder="Year Offered"
            value={formData.year}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Prerequisites</label>
          <input
            type="text"
            name="prerequisites"
            placeholder="Prerequisites"
            value={formData.prerequisites}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Course Schedule (Starting date)</label>
          <input
            type="date"
            name="schedule"
            value={formData.schedule}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="col-span-2 flex gap-4 mt-2">
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Add Course
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
          placeholder="Enter Course Name or Code"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Course Table */}
      <div className="bg-white shadow-md rounded">
        <div className="p-4 border-b">
          <h2 className="text-xl font-bold text-purple-700">Course List</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-50">
                <th className="px-4 py-2 text-left">ID</th>
                <th className="px-4 py-2 text-left">Course Code</th>
                <th className="px-4 py-2 text-left">Course Name</th>
                <th className="px-4 py-2 text-left">Department</th>
                <th className="px-4 py-2 text-left">Semester</th>
                <th className="px-4 py-2 text-left">Professor</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course) => (
                  <tr key={course.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{course.id}</td>
                    <td className="px-4 py-2">{course.courseCode}</td>
                    <td className="px-4 py-2">{course.courseName}</td>
                    <td className="px-4 py-2">CS</td>
                    <td className="px-4 py-2">Fall 2025</td>
                    <td className="px-4 py-2">{course.professor}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-4 py-8 text-center text-gray-500">
                    No courses found
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

export default CourseUnitManagement;