import React, { useState, useEffect } from "react";

const AttendanceMark = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [students, setStudents] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    loadProfessorCourses();
  }, []);

  useEffect(() => {
    if (selectedCourse) {
      loadStudentsForCourse(selectedCourse);
    }
  }, [selectedCourse]);

  const loadProfessorCourses = async () => {
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));

      const mockCourses = [
        { id: "CS101", name: "Introduction to Programming", schedule: "Mon/Wed 9:00 AM" },
        { id: "SE201", name: "Software Engineering", schedule: "Tue/Thu 11:00 AM" },
        { id: "IS301", name: "Information Systems", schedule: "Mon/Wed 2:00 PM" },
      ];

      setCourses(mockCourses);
    } catch {
      setError("Failed to load courses. Please try again.");
    }
  };

  const loadStudentsForCourse = async (courseId) => {
    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 800));

      // In a real app, you'd fetch students based on courseId
      console.log(`Loading students for course: ${courseId}`);

      const mockStudents = [
        { id: "ST001", name: "Alice Johnson", regNumber: "2024001" },
        { id: "ST002", name: "Bob Smith", regNumber: "2024002" },
        { id: "ST003", name: "Carol Davis", regNumber: "2024003" },
        { id: "ST004", name: "David Wilson", regNumber: "2024004" },
        { id: "ST005", name: "Eva Brown", regNumber: "2024005" },
        { id: "ST006", name: "Frank Miller", regNumber: "2024006" },
        { id: "ST007", name: "Grace Lee", regNumber: "2024007" },
        { id: "ST008", name: "Henry Taylor", regNumber: "2024008" },
      ];

      setStudents(mockStudents);

      // Initialize attendance data
      const initialAttendance = {};
      mockStudents.forEach(student => {
        initialAttendance[student.id] = "present"; // Default to present
      });
      setAttendanceData(initialAttendance);
    } catch {
      setError("Failed to load students. Please try again.");
    }
  };

  const handleAttendanceChange = (studentId, status) => {
    setAttendanceData(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const markAllPresent = () => {
    const allPresent = {};
    students.forEach(student => {
      allPresent[student.id] = "present";
    });
    setAttendanceData(allPresent);
  };

  const markAllAbsent = () => {
    const allAbsent = {};
    students.forEach(student => {
      allAbsent[student.id] = "absent";
    });
    setAttendanceData(allAbsent);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedCourse) {
      setError("Please select a course.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 2000));

      const attendanceSummary = {
        course: selectedCourse,
        date: new Date().toISOString().split('T')[0],
        totalStudents: students.length,
        present: Object.values(attendanceData).filter(status => status === "present").length,
        absent: Object.values(attendanceData).filter(status => status === "absent").length,
        late: Object.values(attendanceData).filter(status => status === "late").length,
      };

      setSuccess(`Attendance marked successfully! ${attendanceSummary.present} present, ${attendanceSummary.absent} absent, ${attendanceSummary.late} late.`);

      // Reset form
      setSelectedCourse("");
      setStudents([]);
      setAttendanceData({});
    } catch {
      setError("Failed to save attendance. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "present":
        return "bg-green-100 text-green-800";
      case "absent":
        return "bg-red-100 text-red-800";
      case "late":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-purple-700 flex items-center">
          <i className="fas fa-user-check mr-2"></i>
          Mark Attendance
        </h1>
        <div className="flex items-center gap-3">
          <img
            src="/user.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Professor</span>
        </div>
      </div>

      {/* Messages */}
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          {error}
        </div>
      )}

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
          <i className="fas fa-check-circle mr-2"></i>
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded">
        {/* Course Selection */}
        <div className="mb-6">
          <label className="block mb-2 font-medium text-gray-700">
            <i className="fas fa-book mr-1"></i>
            Select Course *
          </label>
          <select
            value={selectedCourse}
            onChange={(e) => setSelectedCourse(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          >
            <option value="">Choose a course...</option>
            {courses.map(course => (
              <option key={course.id} value={course.id}>
                {course.id} - {course.name} ({course.schedule})
              </option>
            ))}
          </select>
        </div>

        {/* Bulk Actions */}
        {students.length > 0 && (
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">Bulk Actions</label>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={markAllPresent}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                <i className="fas fa-check mr-2"></i>
                Mark All Present
              </button>
              <button
                type="button"
                onClick={markAllAbsent}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
              >
                <i className="fas fa-times mr-2"></i>
                Mark All Absent
              </button>
            </div>
          </div>
        )}

        {/* Students List */}
        {students.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">
              Mark Attendance for {courses.find(c => c.id === selectedCourse)?.name}
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {students.map(student => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded">
                  <div className="flex items-center gap-3">
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.id}`}
                      alt={student.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-sm text-gray-600">{student.regNumber}</div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {["present", "late", "absent"].map(status => (
                      <button
                        key={status}
                        type="button"
                        onClick={() => handleAttendanceChange(student.id, status)}
                        className={`px-3 py-1 rounded text-sm font-medium capitalize transition ${
                          attendanceData[student.id] === status
                            ? getStatusColor(status)
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                      >
                        {status}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Submit Button */}
        {students.length > 0 && (
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-purple-600 text-white px-8 py-3 rounded hover:bg-purple-700 transition disabled:bg-purple-400"
            >
              {loading ? (
                <>
                  <i className="fas fa-spinner fa-spin mr-2"></i>
                  Saving Attendance...
                </>
              ) : (
                <>
                  <i className="fas fa-save mr-2"></i>
                  Save Attendance
                </>
              )}
            </button>
          </div>
        )}

        {/* No Course Selected Message */}
        {!selectedCourse && (
          <div className="text-center py-12 text-gray-500">
            <i className="fas fa-book text-4xl mb-4"></i>
            <p>Please select a course to start marking attendance.</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default AttendanceMark;