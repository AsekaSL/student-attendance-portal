import React from "react";
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  // Mock data for demonstration
  const stats = [
    { title: "Attendance Rate", value: "85%", icon: "📊" },
    { title: "Total Classes", value: "120", icon: "📚" },
    { title: "Present Days", value: "102", icon: "✅" },
    { title: "Absent Days", value: "18", icon: "❌" },
  ];

  const navigationItems = [
    { path: "/view-attendance", label: "View Attendance", icon: "📊" },
    { path: "/student-notifications", label: "Notification Panel", icon: "🔔" },
    { path: "/student-profile", label: "Update Your Profile", icon: "👤" },
  ];

  const recentAttendance = [
    { course: "CS101", status: "Present", date: "2025-10-12", time: "09:00 AM" },
    { course: "SE201", status: "Present", date: "2025-10-11", time: "11:00 AM" },
    { course: "IS301", status: "Absent", date: "2025-10-10", time: "02:00 PM" },
    { course: "CS101", status: "Present", date: "2025-10-09", time: "09:00 AM" },
    { course: "SE201", status: "Present", date: "2025-10-08", time: "11:00 AM" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700">Student Dashboard</h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Student</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded flex items-center">
            <div className="text-4xl mr-4">{stat.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{stat.title}</h3>
              <p className="text-2xl font-bold text-purple-700">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-purple-700 mb-4">Student Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navigationItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="bg-white p-6 shadow-md rounded hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <div className="flex items-center">
                <div className="text-3xl mr-4">{item.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.label}</h3>
                  <p className="text-sm text-gray-600">Click to access</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Attendance */}
      <div className="bg-white p-6 shadow-md rounded mb-6">
        <h2 className="text-xl font-bold text-purple-700 mb-4">Recent Attendance</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">Course</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentAttendance.map((record, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2">{record.course}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded text-sm ${
                      record.status === 'Present'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {record.status}
                    </span>
                  </td>
                  <td className="py-2">{record.date}</td>
                  <td className="py-2">{record.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white p-6 shadow-md rounded">
        <h2 className="text-xl font-bold text-purple-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/view-attendance"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-center"
          >
            View Full Report
          </Link>
          <Link
            to="/student-notifications"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-center"
          >
            Check Notifications
          </Link>
          <Link
            to="/student-profile"
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-center"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;