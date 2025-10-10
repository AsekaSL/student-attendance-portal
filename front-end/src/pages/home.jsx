import { Link } from "react-router-dom";
import attendanceIcon from "../assets/attendance.svg";
import reportIcon from "../assets/report.svg";
import realtimeIcon from "../assets/updating.svg";

function Home() {
  return (
    <div className="flex flex-col items-center justify-start bg-gray-50 text-center py-10 px-10 min-h-[90vh] w-full">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-3">
          Manage Every Aspect of Your Student Life Here!
        </h2>
        <p className="mb-6 text-lg">Simple, Easy.</p>
        <p className="mb-6 text-gray-700">
          Your personal attendance tracking portal makes your life easier.
          Mark attendance, check your presence, and stay organized.
        </p>

        <Link
          to="/signin"
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-200"
        >
          Login
        </Link>

        {/* Features Section */}
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="border p-6 rounded-xl shadow hover:shadow-md transition">
            <img
              src={attendanceIcon}
              alt="Attendance"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-xl mb-2">📅 Attendance Making</h4>
            <p className="text-gray-600">
              Mark and track attendance with just a few clicks.
            </p>
          </div>

          <div className="border p-6 rounded-xl shadow hover:shadow-md transition">
            <img
              src={reportIcon}
              alt="Reports"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-xl mb-2">📊 Generate Reports</h4>
            <p className="text-gray-600">
              Create and export attendance summaries effortlessly.
            </p>
          </div>

          <div className="border p-6 rounded-xl shadow hover:shadow-md transition">
            <img
              src={realtimeIcon}
              alt="Real Time"
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-xl mb-2">⚡ Real-Time Updating</h4>
            <p className="text-gray-600">
              Stay up-to-date with instant syncing of records.
            </p>
          </div>
        </section>

        {/* Description Section */}
        <section className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-3">
            Attendance Tracking Online
          </h3>
          <p className="text-gray-700">
            This portal provides a user-friendly interface for students and
            administrators to record, review, and analyze attendance data in
            real time.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Home;
