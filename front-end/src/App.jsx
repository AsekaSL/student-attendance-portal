import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import StudentManagement from "./pages/studentmanagement";
import ProfessorManagement from "./pages/professormanagement";
import CourseManagement from "./pages/coursemanagement";
import Reports from "./pages/report";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import SignIn from "./pages/signin";

import "./index.css";

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
      <Routes>
        {/* Standalone SignIn page (no layout) */}
        <Route path="/signin" element={<SignIn />} />

        {/* All main routes wrapped in Layout */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/students"
          element={
            <Layout>
              <StudentManagement />
            </Layout>
          }
        />
        <Route
          path="/professors"
          element={
            <Layout>
              <ProfessorManagement />
            </Layout>
          }
        />
        <Route
          path="/courses"
          element={
            <Layout>
              <CourseManagement />
            </Layout>
          }
        />
        <Route
          path="/reports"
          element={
            <Layout>
              <Reports />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
