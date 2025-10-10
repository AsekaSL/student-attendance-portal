import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // ---- Demo credentials ----
    // Admin
    if (username === "admin" && password === "admin123") {
      navigate("/professors"); // Admin page
      return;
    }

    // Professor
    if (username === "prof" && password === "prof123") {
      navigate("/courses"); // Professor page
      return;
    }

    // Student
    if (username === "student" && password === "student123") {
      navigate("/reports"); // Student page
      return;
    }

    alert("Invalid credentials. Use demo accounts:\nAdmin: admin/admin123\nProfessor: prof/prof123\nStudent: student/student123");

    /* 
    // Real login example (commented for demo)
    axios.post("/api/auth/login", { username, password })
      .then(res => {
        const role = res.data.role;
        if(role === "admin") navigate("/professors");
        else if(role === "professor") navigate("/courses");
        else navigate("/reports");
      })
      .catch(err => alert(err.response.data.message));
    */
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="border p-6 rounded shadow w-80 bg-white">
        <h2 className="text-xl mb-4 font-bold">Sign In</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            className="border w-full mb-3 px-2 py-1 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="border w-full mb-3 px-2 py-1 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
