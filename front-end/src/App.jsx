import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import StudentManagement from "./pages/studentmanagement";
import ProfessorManagement from "./pages/professormanagement";
import CourseManagement from "./pages/coursemanagement";
import Reports from "./pages/report";

import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import SignIn from "./pages/signin";

function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
      <Footer />
    </div>
  );
}


function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#5e2ca5", color: "white" }}>
        <Link to="/" style={{ marginRight: "10px", color: "white" }}>Home</Link>
        <Link to="/students" style={{ marginRight: "10px", color: "white" }}>Students</Link>
        <Link to="/professors" style={{ marginRight: "10px", color: "white" }}>Professors</Link>
        <Link to="/courses" style={{ marginRight: "10px", color: "white" }}>Courses</Link>
        <Link to="/reports" style={{ color: "white" }}>Reports</Link>
      </nav>

      <Routes>
        <Route path="/signin" element={<SignIn />} />

        <Route path="/" element={<Home />} />
        <Route path="/students" element={<StudentManagement />} />
        <Route path="/professors" element={<ProfessorManagement />} />
        <Route path="/courses" element={<CourseManagement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
