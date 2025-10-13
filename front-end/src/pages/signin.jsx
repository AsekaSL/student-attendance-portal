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
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="border p-6 rounded shadow w-80 bg-white">
        <h2 className="text-2xl mb-4 font-bold text-center">Sign In</h2>

        {error && <p className="text-red-500 mb-3 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border w-full mb-3 px-3 py-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border w-full mb-3 px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
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
