import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import StudentManagement from "./pages/studentmanagement";
import ProfessorManagement from "./pages/professormanagement";
import CourseManagement from "./pages/coursemanagement";
import Reports from "./pages/report";

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
