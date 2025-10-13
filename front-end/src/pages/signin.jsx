import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {backendUrl, setIsLoggedin, setRole, getAuthState} = useContext(AppContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    // DEMO CREDENTIALS
    if (username === "admin" && password === "admin123") {
      navigate("/admin"); // Admin -> Admin Dashboard
    } else if (username === "prof" && password === "prof123") {
      navigate("/professor"); // Professor -> Professor Dashboard
    } else if (username === "student" && password === "student123") {
      navigate("/student"); // Student -> Student Dashboard
    } else {
      setError("Invalid username or password");
    }

    // REAL BACKEND LOGIN (commented for demo)
    /*
    axios.post("http://localhost:5000/api/auth/login", { email: username, password })
      .then((res) => {
        const role = res.data.role;
        if (role === "admin") navigate("/admin");
        else if (role === "lecturer") navigate("/professor");
        else if (role === "student") navigate("/student");
      })
      .catch((err) => setError(err.response?.data?.message || "Login failed"));
    */
    axios.defaults.withCredentials = true

    const {data} = await axios.post(backendUrl + '/auth/login', {username, password});

    if(data.success) {
      setIsLoggedin(true)
      toast.success(data.message);
      setRole(data.role)
      if (data.role == 'admin') {
        navigate("/students"); // Admin -> Student Management
      } else if (data.role == 'lecture') {
        navigate("/courses"); // Professor -> Course Management
      } else if (data.role == 'student') {
        navigate("/reports"); // Student -> Reports
      }
    }else {
      toast.error(data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 shadow-md rounded w-full max-w-md">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">Sign In</h1>

        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        <div className="mt-4 text-gray-600 text-sm">
          <p>Demo Accounts:</p>
          <ul className="list-disc list-inside">
            <li>Admin: admin / admin123</li>
            <li>Professor: prof / prof123</li>
            <li>Student: student / student123</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
