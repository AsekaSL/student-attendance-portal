import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-3">
        Manage Every Aspect of Your Student Life Here!
      </h2>
      <p className="mb-6 text-lg">Simple, Easy.</p>
      <p className="mb-6">
        Your personal attendance tracking portal makes your Life easier. Make
        your attendance, check your presence and stay organized.
      </p>

      <Link to="/signin" className="bg-purple-600 text-white px-4 py-2 rounded">
        Login
      </Link>

      <section className="mt-10 grid grid-cols-3 gap-6">
        <div className="border p-4 rounded shadow">📅 Attendance Making</div>
        <div className="border p-4 rounded shadow">📊 Generate Reports</div>
        <div className="border p-4 rounded shadow">⚡ Real-Time Updating</div>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold mb-3">
          Attendance Tracking Online:
        </h3>
        <p>
          This portal provides a user-friendly interface for students and
          administrators to record, review, and analyze attendance data in real
          time.
        </p>
      </section>
    </div>
  );
}

export default Home;
