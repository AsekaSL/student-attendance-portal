import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // DEMO CREDENTIALS
    if (username === "admin" && password === "admin123") {
      navigate("/students"); // Admin -> Student Management
    } else if (username === "prof" && password === "prof123") {
      navigate("/courses"); // Professor -> Course Management
    } else if (username === "student" && password === "student123") {
      navigate("/reports"); // Student -> Reports
    } else {
      setError("Invalid username or password");
    }

    // REAL BACKEND LOGIN (commented for demo)
    /*
    axios.post("http://localhost:5000/api/auth/login", { email: username, password })
      .then((res) => {
        const role = res.data.role;
        if (role === "admin") navigate("/students");
        else if (role === "lecturer") navigate("/courses");
        else if (role === "student") navigate("/reports");
      })
      .catch((err) => setError(err.response?.data?.message || "Login failed"));
    */
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
