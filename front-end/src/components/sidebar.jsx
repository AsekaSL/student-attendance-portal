import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <aside class="hidden md:block w-64 bg-white/80 backdrop-blur-md p-4 h-screen sticky top-0 shadow-lg border-r border-gray-200">
            <nav class="flex flex-col gap-2 mt-6">
                <a href="/course" class="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
                    <span class="sidebar-icon transition-transform duration-200">
                        <i data-feather="book" class="w-5 h-5"></i>
                    </span>
                    <span class="font-medium">Course Management</span>
                </a>
                <a href="/professor" class="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
                    <span class="sidebar-icon transition-transform duration-200">
                        <i data-feather="users" class="w-5 h-5"></i>
                    </span>
                    <span class="font-medium">Admin Management</span>
                </a>
                <a href="/student" class="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
                    <span class="sidebar-icon transition-transform duration-200">
                        <i data-feather="user" class="w-5 h-5"></i>
                    </span>
                    <span class="font-medium">Student Portal</span>
                </a>
                <a href="/report" class="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700">
                    <span class="sidebar-icon transition-transform duration-200">
                        <i data-feather="bar-chart-2" class="w-5 h-5"></i>
                    </span>
                    <span class="font-medium">Analytics Dashboard</span>
                </a>
                <a href="/settings" class="sidebar-item flex items-center gap-3 p-3 rounded-lg hover:bg-indigo-50 transition-colors duration-200 hover:shadow-sm text-gray-700 hover:text-indigo-700 mt-4">
                    <span class="sidebar-icon transition-transform duration-200">
                        <i data-feather="settings" class="w-5 h-5"></i>
                    </span>
                    <span class="font-medium">Settings</span>
                </a>
            </nav>
        </aside>
  );
}

export default Sidebar;
