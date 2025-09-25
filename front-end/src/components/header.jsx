import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-purple-700 text-white">
      <div className="flex items-center gap-3">
        <img src={logo} alt="EduPortal Logo" className="h-10 w-10" />
        <h1 className="text-xl font-bold">EduPortal</h1>
      </div>
      <nav className="flex gap-6">
        <Link to="/">Home</Link>
        <a href="#features">Features</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="bg-white text-purple-700 px-3 py-1 rounded">🔔</button>
    </header>
  );
}

export default Header;
