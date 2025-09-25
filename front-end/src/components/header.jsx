import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header class="flex justify-between items-center px-6 py-4 bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-200">
        <div class="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img src="./assets/logo.jpg" alt="EduPortal Logo" class="h-10 w-10 rounded-full border-2 border-indigo-300 object-cover"/>
            <h2 class="text-xl font-bold tracking-wide gradient-text">EduPortal</h2>
        </div>
        
        <nav class="hidden md:flex gap-8 font-medium items-center">
            <a href="#" class="text-indigo-600 hover:text-indigo-800 transition-colors duration-200 flex items-center gap-1">
                <i data-feather="home" class="w-4 h-4"></i> Home
            </a>
            <a href="#features" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1">
                <i data-feather="zap" class="w-4 h-4"></i> Features
            </a>
            <a href="#services" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1">
                <i data-feather="tool" class="w-4 h-4"></i> Services
            </a>
            <a href="#about" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1">
                <i data-feather="info" class="w-4 h-4"></i> About
            </a>
            <a href="#contact" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200 flex items-center gap-1">
                <i data-feather="mail" class="w-4 h-4"></i> Contact
            </a>
        </nav>
        
        <div class="flex items-center gap-4">
            <button class="relative p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <i data-feather="bell" class="w-5 h-5 text-gray-600"></i>
                <span class="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <button class="hidden md:block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105">
                Get Started
            </button>
            <button class="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
                <i data-feather="menu" class="w-5 h-5 text-gray-600"></i>
            </button>
        </div>
    </header>
  );
}

export default Header;
