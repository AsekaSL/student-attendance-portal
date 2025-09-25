import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="w-56 bg-purple-100 p-4 h-screen">
      <nav className="flex flex-col gap-4">
        <Link to="/course">📘 Course Unit Management</Link>
        <Link to="/professor">👨‍🏫 Admin User Management</Link>
        <Link to="/student">🎓 Student Management</Link>
        <Link to="/report">📊 Report Generation</Link>
      </nav>
    </aside>
  );
}

export default Sidebar;
