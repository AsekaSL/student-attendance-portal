function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4 font-bold">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="border w-full mb-3 px-2 py-1"
        />
        <input
          type="password"
          placeholder="Password"
          className="border w-full mb-3 px-2 py-1"
        />
        <button className="bg-purple-600 text-white w-full py-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn;
