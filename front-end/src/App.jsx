import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import StudentManagement from "./pages/studentmanagement";
import ProfessorManagement from "./pages/professormanagement";
import CourseManagement from "./pages/coursemanagement";
import Reports from "./pages/report";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import SignIn from "./pages/signin";
import AdminUserManagement from "./pages/adminusermanagement";
import { ToastContainer } from "react-toastify";

import "./index.css";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import QRCodeGenarate from "./pages/QRCodeGenarate";
import VerifyingAttendance from "./pages/VerifyingAttendance";

// Layout with sidebar (for internal pages)
function LayoutWithSidebar({ children }) {

  const {getAuthState, role} = useContext(AppContext)

  getAuthState();

  return (
    <div className="flex flex-col min-h-screen">
      <Header role={role} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-50">{children}</main>
      </div>
      <Footer />
    </div>
  );
}

// Layout without sidebar (for home)
function LayoutNoSidebar({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 px-6 py-4 bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div>
      <ToastContainer/>
        <Routes>
          {/* Home page without sidebar */}
          <Route
            path="/"
            element={
              <LayoutNoSidebar>
                <Home />
              </LayoutNoSidebar>
            }
          />

          {/* Sign in page */}
          <Route path="/signin" element={<SignIn />} />

          {/* Internal pages with sidebar */}
          <Route
            path="/students"
            element={
              <LayoutWithSidebar>
                <StudentManagement />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/professors"
            element={
              <LayoutWithSidebar>
                <ProfessorManagement />
              </LayoutWithSidebar>
            }
          />
          <Route 
            path="/adminuser" 
            element={
              <LayoutWithSidebar>
                <AdminUserManagement />
              </LayoutWithSidebar>
            } 
          />
          <Route
            path="/courses"
            element={
              <LayoutWithSidebar>
                <CourseManagement />
              </LayoutWithSidebar>
            }
          />
          <Route
            path="/reports"
            element={
              <LayoutWithSidebar>
                <Reports />
              </LayoutWithSidebar>
            }
          />

          <Route
            path="/qrcode"
            element={
              <LayoutWithSidebar>
                <QRCodeGenarate/>
              </LayoutWithSidebar>
            }
          />

            <Route
            path="/attendent/:id"
            element={
              <LayoutWithSidebar>
                <VerifyingAttendance />
              </LayoutWithSidebar>
            }
          />

          </Routes>
    </div>
    
   
  );
}

export default App;
